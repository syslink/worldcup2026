const OPENAI_ENDPOINT = "https://api.openai.com/v1/responses";
const DEFAULT_MODEL = "gpt-4.1-mini";

function sendJson(res, status, payload) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
}

function sanitizeMessages(messages) {
  if (!Array.isArray(messages)) return [];
  return messages
    .filter((message) => ["user", "assistant"].includes(message.role) && typeof message.content === "string")
    .slice(-8)
    .map((message) => ({
      role: message.role,
      content: message.content.slice(0, 1200)
    }));
}

function requestBody(req) {
  if (!req.body) return {};
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body);
    } catch (error) {
      return {};
    }
  }
  return req.body;
}

function countryBrief(country = {}) {
  return [
    `国家：${country.nameZh || ""} (${country.nameEn || ""})`,
    `地区：${country.region || ""}；足联：${country.confederation || ""}`,
    `首都：${country.capital || ""}`,
    `语言：${Array.isArray(country.languages) ? country.languages.join(" / ") : ""}`,
    `问候语：${country.hello || ""}`,
    `地标：${country.landmark || ""}`,
    `文化记忆点：${Array.isArray(country.culture) ? country.culture.join("、") : ""}`,
    `食物：${Array.isArray(country.food) ? country.food.join("、") : ""}`,
    `球队性格：${country.footballStyle || ""}`,
    `价值观：${Array.isArray(country.values) ? country.values.join("、") : ""}`,
    `一句记忆：${country.memory || ""}`,
    `近期比赛：${Array.isArray(country.recentMatches) ? country.recentMatches.join("；") : ""}`
  ].filter((line) => !line.endsWith("：")).join("\n");
}

function buildInput(country, messages) {
  const guide = `你是“世界杯，观世界”网站里的 AI 小导游，服务于想借世界杯了解世界的用户。
回答要求：
1. 使用简体中文，语气自然、具体、有画面感，适合普通用户快速理解。
2. 每次回答围绕当前国家，不要跑题；可以连接历史、人文、地理、食物、足球、价值观。
3. 不编造具体比赛事实；如果资料不足，要说“我不确定”，并建议查官方资料。
4. 回答控制在 120-220 字，尽量提供一个容易记住的故事、观察角度或知识线索。
5. 同时给出 2 到 3 个后续提示问题，让用户能继续聊下去。
6. 只输出严格 JSON，不要 Markdown，不要代码块。格式：
{"answer":"...","suggestions":["...","...","..."]}`;

  return [
    {
      role: "developer",
      content: [{ type: "input_text", text: guide }]
    },
    {
      role: "user",
      content: [{
        type: "input_text",
        text: `当前国家资料：\n${countryBrief(country)}\n\n最近对话：\n${messages.map((message) => `${message.role === "user" ? "用户" : "AI"}：${message.content}`).join("\n")}`
      }]
    }
  ];
}

function extractText(data) {
  if (typeof data.output_text === "string") return data.output_text;
  const parts = [];
  for (const item of data.output || []) {
    for (const content of item.content || []) {
      if (typeof content.text === "string") parts.push(content.text);
    }
  }
  return parts.join("\n").trim();
}

function parseModelJson(text) {
  try {
    return JSON.parse(text);
  } catch (error) {
    const match = text.match(/\{[\s\S]*\}/);
    if (match) return JSON.parse(match[0]);
    throw error;
  }
}

module.exports = async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Allow", "POST, OPTIONS");
    return sendJson(res, 204, {});
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST, OPTIONS");
    return sendJson(res, 405, { error: "只支持 POST 请求" });
  }

  if (!process.env.OPENAI_API_KEY) {
    return sendJson(res, 500, { error: "服务端还没有配置 OPENAI_API_KEY" });
  }

  const body = requestBody(req);
  const country = body.country || {};
  const messages = sanitizeMessages(body.messages);
  if (!country.nameZh || !messages.length) {
    return sendJson(res, 400, { error: "缺少国家信息或聊天内容" });
  }

  try {
    const openaiResponse = await fetch(OPENAI_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || DEFAULT_MODEL,
        input: buildInput(country, messages),
        temperature: 0.7,
        max_output_tokens: 700
      })
    });

    const data = await openaiResponse.json();
    if (!openaiResponse.ok) {
      const detail = data.error?.message || "OpenAI 请求失败";
      return sendJson(res, openaiResponse.status, { error: detail });
    }

    const parsed = parseModelJson(extractText(data));
    return sendJson(res, 200, {
      answer: String(parsed.answer || "").slice(0, 1000),
      suggestions: Array.isArray(parsed.suggestions)
        ? parsed.suggestions.map((item) => String(item).slice(0, 80)).filter(Boolean).slice(0, 3)
        : []
    });
  } catch (error) {
    return sendJson(res, 500, { error: "AI 服务暂时不可用，请稍后再试" });
  }
};
