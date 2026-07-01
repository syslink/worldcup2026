const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const OPENAI_SPEECH_ENDPOINT = "https://api.openai.com/v1/audio/speech";
const DEFAULT_TTS_MODEL = "gpt-4o-mini-tts";
const DEFAULT_TTS_VOICE = "coral";
const DEFAULT_TTS_INSTRUCTIONS = "使用自然、清晰、亲切的普通话朗读，语速适中，适合网页导览场景。";

function sendJson(res, status, payload) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(payload));
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

function cacheDir() {
  return process.env.SPEECH_CACHE_DIR
    || (process.env.VERCEL ? "/tmp/worldcup2026-speech-cache" : path.join(__dirname, ".speech-cache"));
}

function cacheKey({ text, model, voice, instructions }) {
  return crypto
    .createHash("sha256")
    .update(JSON.stringify({ text, model, voice, instructions }))
    .digest("hex")
    .slice(0, 32);
}

function audioPath(id) {
  return path.join(cacheDir(), `${id}.mp3`);
}

function safeId(value) {
  return typeof value === "string" && /^[a-f0-9]{32}$/.test(value) ? value : "";
}

function streamAudio(req, res) {
  const url = new URL(req.url, "http://localhost");
  const id = safeId(url.searchParams.get("id"));
  if (!id) return sendJson(res, 400, { error: "缺少音频 id" });

  const filePath = audioPath(id);
  if (!fs.existsSync(filePath)) {
    return sendJson(res, 404, { error: "音频缓存不存在，请重新点击朗读生成" });
  }

  res.statusCode = 200;
  res.setHeader("Content-Type", "audio/mpeg");
  res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
  fs.createReadStream(filePath).pipe(res);
}

async function createSpeech(req, res) {
  if (!process.env.OPENAI_API_KEY) {
    return sendJson(res, 500, { error: "服务端还没有配置 OPENAI_API_KEY" });
  }

  const body = requestBody(req);
  const text = String(body.text || "").trim().slice(0, 2000);
  if (!text) return sendJson(res, 400, { error: "缺少需要朗读的文本" });

  const model = process.env.OPENAI_TTS_MODEL || DEFAULT_TTS_MODEL;
  const voice = process.env.OPENAI_TTS_VOICE || DEFAULT_TTS_VOICE;
  const instructions = process.env.OPENAI_TTS_INSTRUCTIONS || DEFAULT_TTS_INSTRUCTIONS;
  const id = cacheKey({ text, model, voice, instructions });
  const filePath = audioPath(id);

  fs.mkdirSync(cacheDir(), { recursive: true });
  if (fs.existsSync(filePath)) {
    return sendJson(res, 200, { url: `/api/speech?id=${id}`, cached: true });
  }

  const speechResponse = await fetch(OPENAI_SPEECH_ENDPOINT, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model,
      voice,
      input: text,
      instructions,
      response_format: "mp3"
    })
  });

  if (!speechResponse.ok) {
    const detail = await speechResponse.text().catch(() => "");
    return sendJson(res, speechResponse.status, { error: detail || "OpenAI 语音合成失败" });
  }

  const audioBuffer = Buffer.from(await speechResponse.arrayBuffer());
  fs.writeFileSync(filePath, audioBuffer);
  return sendJson(res, 200, { url: `/api/speech?id=${id}`, cached: false });
}

module.exports = async function handler(req, res) {
  try {
    if (req.method === "OPTIONS") {
      res.setHeader("Allow", "GET, POST, OPTIONS");
      return sendJson(res, 204, {});
    }
    if (req.method === "GET") return streamAudio(req, res);
    if (req.method === "POST") return createSpeech(req, res);
    res.setHeader("Allow", "GET, POST, OPTIONS");
    return sendJson(res, 405, { error: "只支持 GET / POST 请求" });
  } catch (error) {
    return sendJson(res, 500, { error: "语音服务暂时不可用，请稍后再试" });
  }
};
