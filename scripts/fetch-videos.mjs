import { execFile } from "node:child_process";
import { readFile, writeFile } from "node:fs/promises";
import { promisify } from "node:util";
import vm from "node:vm";

const execFileAsync = promisify(execFile);
const countrySource = await readFile(new URL("../data/countries.js", import.meta.url), "utf8");
const context = { window: {} };
vm.createContext(context);
vm.runInContext(countrySource, context);

const countries = context.window.COUNTRIES;
const overrides = {
  england: "England country culture history",
  scotland: "Scotland country culture history",
  "ivory-coast": "Cote d'Ivoire country culture history",
  "dr-congo": "Democratic Republic of the Congo culture history",
  curacao: "Curacao island culture history",
  bosnia: "Bosnia and Herzegovina culture history",
  turkey: "Turkey country culture history",
  "czech-republic": "Czech Republic culture history"
};

function queriesFor(country) {
  const topic = overrides[country.id] || `${country.nameEn} country culture history geography`;
  return [
    {
      type: "overview",
      platform: "YouTube",
      title: `Geography Now：${country.nameEn} 国家介绍`,
      description: "节奏快、信息密度高，适合先建立国家轮廓。",
      query: `Geography Now ${topic}`
    },
    {
      type: "history",
      platform: "YouTube",
      title: `${country.nameZh}历史人文纪录片`,
      description: "从历史故事进入国家记忆，适合家长陪孩子暂停讲解。",
      query: `${country.nameEn} history documentary culture`
    },
    {
      type: "culture",
      platform: "YouTube",
      title: `${country.nameZh}旅行与文化画面`,
      description: "用城市、自然、食物和日常生活画面帮助孩子形成印象。",
      query: `${country.nameEn} culture travel guide documentary`
    },
    {
      type: "kids",
      platform: "YouTube",
      title: `${country.nameEn} for kids / culture`,
      description: "适合找英语短视频，顺便接触国家相关英文表达。",
      query: `${country.nameEn} culture for kids geography history`
    }
  ];
}

function extractVideoId(html) {
  const ids = [...html.matchAll(/"videoId":"([a-zA-Z0-9_-]{11})"/g)].map((match) => match[1]);
  return [...new Set(ids)].find(Boolean);
}

async function findVideo(query) {
  const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
  for (let attempt = 1; attempt <= 2; attempt += 1) {
    try {
      const { stdout } = await execFileAsync("curl", ["-L", "-s", "--max-time", "25", url], {
        maxBuffer: 18 * 1024 * 1024,
        timeout: 30000
      });
      return extractVideoId(stdout);
    } catch (error) {
      if (attempt === 2) return null;
      await new Promise((resolve) => setTimeout(resolve, 1200));
    }
  }
  return null;
}

const videos = {};

for (const country of countries) {
  const entries = [];
  for (const item of queriesFor(country)) {
    const videoId = await findVideo(item.query);
    entries.push({
      type: item.type,
      platform: item.platform,
      title: item.title,
      description: item.description,
      videoId,
      query: item.query
    });
    await new Promise((resolve) => setTimeout(resolve, 300));
  }
  videos[country.id] = entries;
  console.log(country.id, entries.map((entry) => entry.videoId || "NONE").join(","));
}

await writeFile(
  new URL("../data/videos.js", import.meta.url),
  `window.COUNTRY_VIDEOS = ${JSON.stringify(videos, null, 2)};\n`,
  "utf8"
);
