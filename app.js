const countries = window.COUNTRIES;
const confederationLabels = {
  AFC: "亚洲足联",
  CAF: "非洲足联",
  CONCACAF: "中北美及加勒比足联",
  CONMEBOL: "南美足联",
  OFC: "大洋洲足联",
  UEFA: "欧洲足联"
};
const confederations = ["全部", ...Object.keys(confederationLabels)];
const speechRecognitionLang = "zh-CN";
const helloSpeechLocales = {
  "葡萄牙语": "pt-PT",
  "西班牙语": "es-ES",
  "阿拉伯语": "ar-SA",
  "阿马齐格语": "ar-SA",
  "法语": "fr-FR",
  "日语": "ja-JP",
  "英语": "en-US",
  "毛利语": "mi-NZ",
  "波斯语": "fa-IR",
  "乌兹别克语": "uz-UZ",
  "韩语": "ko-KR",
  "瓜拉尼语": "gn-PY",
  "沃洛夫语": "wo-SN",
  "荷兰语": "nl-NL",
  "海地克里奥尔语": "fr-FR",
  "克里奥尔语": "pt-PT",
  "德语": "de-DE",
  "克罗地亚语": "hr-HR",
  "挪威语": "nb-NO",
  "瑞典语": "sv-SE",
  "土耳其语": "tr-TR",
  "捷克语": "cs-CZ",
  "帕皮阿门托语": "nl-NL",
  "波斯尼亚语": "bs-BA",
  "塞尔维亚语": "sr-RS",
  "林加拉语等": "fr-FR",
  "库尔德语": "ku-TR",
  "多种官方语言": "en-ZA"
};
const imageTopics = {
  brazil: [
    ["亚马逊雨林", "Amazon rainforest"],
    ["里约热内卢", "Rio de Janeiro"],
    ["桑巴狂欢节", "Rio Carnival"]
  ],
  argentina: [
    ["伊瓜苏瀑布", "Iguazu Falls"],
    ["布宜诺斯艾利斯", "Buenos Aires"],
    ["潘帕斯草原", "Pampas"]
  ],
  morocco: [
    ["撒哈拉", "Sahara"],
    ["马拉喀什集市", "Jemaa el-Fnaa"],
    ["舍夫沙万蓝城", "Chefchaouen"]
  ],
  france: [
    ["卢浮宫", "Louvre"],
    ["埃菲尔铁塔", "Eiffel Tower"],
    ["凡尔赛宫", "Palace of Versailles"]
  ],
  mexico: [
    ["奇琴伊察", "Chichen Itza"],
    ["亡灵节", "Day of the Dead"],
    ["墨西哥城", "Mexico City"]
  ],
  japan: [
    ["富士山", "Mount Fuji"],
    ["东京", "Tokyo"],
    ["京都", "Kyoto"]
  ],
  canada: "Canadian Rockies",
  "united-states": [
    ["大峡谷", "Grand Canyon"],
    ["纽约", "New York City"],
    ["黄石国家公园", "Yellowstone National Park"]
  ],
  "new-zealand": "Milford Sound",
  iran: "Persepolis",
  uzbekistan: "Registan",
  jordan: [
    ["佩特拉", "Petra"],
    ["瓦迪拉姆沙漠", "Wadi Rum"]
  ],
  "south-korea": [
    ["景福宫", "Gyeongbokgung"],
    ["首尔", "Seoul"],
    ["济州岛", "Jeju Island"]
  ],
  australia: [
    ["悉尼歌剧院", "Sydney Opera House"],
    ["大堡礁", "Great Barrier Reef"],
    ["乌鲁鲁", "Uluru"]
  ],
  ecuador: [
    ["加拉帕戈斯群岛", "Galapagos Islands"],
    ["赤道纪念碑", "Ciudad Mitad del Mundo"]
  ],
  paraguay: "Paraguay River",
  uruguay: "Colonia del Sacramento",
  colombia: [
    ["卡塔赫纳", "Cartagena, Colombia"],
    ["咖啡产区", "Colombian coffee growing axis"],
    ["波哥大", "Bogota"]
  ],
  tunisia: "Carthage",
  egypt: [
    ["吉萨金字塔", "Giza pyramid complex"],
    ["尼罗河", "Nile"],
    ["卢克索神庙", "Luxor Temple"]
  ],
  algeria: "Sahara",
  ghana: "Cape Coast Castle",
  "cape-verde": "Sal, Cape Verde",
  qatar: "Doha Corniche",
  "saudi-arabia": "Diriyah",
  senegal: "Goree",
  "south-africa": [
    ["桌山", "Table Mountain"],
    ["克鲁格国家公园", "Kruger National Park"],
    ["开普敦", "Cape Town"]
  ],
  "ivory-coast": "Basilica of Our Lady of Peace",
  england: [
    ["大本钟", "Big Ben"],
    ["温布利球场", "Wembley Stadium"],
    ["伦敦", "London"]
  ],
  croatia: "Dubrovnik",
  portugal: [
    ["贝伦塔", "Belem Tower"],
    ["里斯本", "Lisbon"],
    ["波尔图", "Porto"]
  ],
  norway: "Geirangerfjord",
  germany: [
    ["勃兰登堡门", "Brandenburg Gate"],
    ["新天鹅堡", "Neuschwanstein Castle"],
    ["柏林", "Berlin"]
  ],
  netherlands: [
    ["阿姆斯特丹运河", "Canals of Amsterdam"],
    ["风车", "Kinderdijk"],
    ["郁金香花田", "Keukenhof"]
  ],
  switzerland: [
    ["马特洪峰", "Matterhorn"],
    ["阿尔卑斯山", "Swiss Alps"],
    ["卢塞恩", "Lucerne"]
  ],
  scotland: "Edinburgh Castle",
  spain: [
    ["圣家堂", "Sagrada Familia"],
    ["阿尔罕布拉宫", "Alhambra"],
    ["马德里", "Madrid"]
  ],
  austria: "Schonbrunn Palace",
  belgium: "Grand-Place",
  panama: "Panama Canal",
  curacao: "Willemstad",
  haiti: "Citadelle Laferriere",
  bosnia: "Stari Most",
  sweden: "Gamla stan",
  turkey: [
    ["圣索菲亚", "Hagia Sophia"],
    ["卡帕多奇亚", "Cappadocia"],
    ["伊斯坦布尔大巴扎", "Grand Bazaar, Istanbul"]
  ],
  "czech-republic": "Charles Bridge",
  "dr-congo": "Congo River",
  iraq: "Tigris"
};
const memoryStories = {
  brazil: "想到巴西，可以想象一片会呼吸的绿色森林和会跳舞的街道：亚马逊像地球的大肺，桑巴和足球让人感觉这里的创造力总是在流动。",
  argentina: "阿根廷像一首热烈的探戈：有人在草原上喝马黛茶，有人在球场上等待灵光一闪，激情和优雅常常同时出现。",
  morocco: "摩洛哥像一扇通往沙漠和古城的彩色大门：集市里有香料味，远处是撒哈拉，球队也常让人记住他们的韧性。",
  france: "法国很适合用一座博物馆来记住：从卢浮宫到巴黎街头，艺术、时尚、多元文化和速度感都能在这里相遇。",
  mexico: "墨西哥可以用一块玉米饼和一场亡灵节记住：它把古老文明、鲜艳颜色、家人记忆和热闹节奏放在一起。",
  japan: "日本像富士山旁的一次安静传球：动漫、寿司、礼仪和团队配合，都让人感觉这里很重视细节和秩序。",
  canada: "加拿大可以想成一片挂着枫叶的巨大自然课堂：雪山、森林、湖泊和多元城市，让人记住宽阔与包容。",
  "united-states": "美国像一条从大峡谷通向大城市的长路：国家公园、流行文化和移民故事很多，足球队也带着速度和活力。",
  "new-zealand": "新西兰像电影里的绿色岛屿：峡湾、草地和毛利问候 Kia ora，让人记住自然、勇敢和团队精神。",
  iran: "伊朗可以用古老波斯的石柱来记住：诗歌、地毯、古城和热情待客，让这个国家像一本很厚的历史书。",
  uzbekistan: "乌兹别克斯坦像丝绸之路上的蓝色宝石：撒马尔罕的蓝色建筑提醒孩子，这里曾连接东西方的商人和故事。",
  jordan: "约旦最容易用佩特拉古城记住：一座从玫瑰色岩石中雕出来的城市，像探险故事里的入口。",
  "south-korea": "韩国像一首节奏很快的歌：韩流、科技城市、礼仪和不停奔跑的足球风格，让人记住它的活力。",
  australia: "澳大利亚像一块被海包围的大陆：歌剧院、海岸和广阔户外，让人想到阳光、运动和直接勇敢的性格。",
  ecuador: "厄瓜多尔的名字就藏着赤道：你可以想象一只脚站在北半球，一只脚站在南半球，再去看神奇的加拉帕戈斯动物。",
  paraguay: "巴拉圭像南美洲中心的一条安静大河：瓜拉尼语言和竖琴音乐提醒人们，小国家也有很深的文化根。",
  uruguay: "乌拉圭可以用马黛茶和世界杯老故事记住：它国家不大，却很早就站上过世界足球舞台，像一个低调但坚强的队友。",
  colombia: "哥伦比亚像一杯咖啡配一段舞蹈：高山、海岸、彩色老城和节奏感，让人记住它的热情与创造力。",
  tunisia: "突尼斯像地中海边的一枚历史贝壳：迦太基遗迹、集市和北非风味，让古代故事和今天的生活连在一起。",
  egypt: "埃及最好记的画面就是金字塔和尼罗河：几千年前的人建起巨大奇迹，今天孩子仍能一眼认出来。",
  algeria: "阿尔及利亚像一边靠海、一边通向撒哈拉的国家：城市、沙漠和音乐在这里碰面，也让球队显得有力量。",
  ghana: "加纳可以用鼓声和金色海岸记住：音乐、肯特布和热情笑容，让人感觉团队合作像节奏一样重要。",
  "cape-verde": "佛得角像大西洋上的一串小岛：海风、音乐和第一次世界杯亮相，让它很适合被记成勇敢的新朋友。",
  qatar: "卡塔尔像沙漠旁升起的现代城市：多哈的海湾、珍珠传统和新球场，让古老海湾文化遇见未来感。",
  "saudi-arabia": "沙特阿拉伯可以用沙漠、椰枣和绿旗记住：广阔沙海里有古老商路，也有突然加速的足球反击。",
  senegal: "塞内加尔有一个很美的词叫 Teranga，意思接近热情待客：鼓声、海岸和团结，让人记住温暖与力量。",
  "south-africa": "南非常被叫作彩虹之国：很多语言和文化生活在一起，桌山像一张大桌子，邀请不同的人坐下来。",
  "ivory-coast": "科特迪瓦可以用可可和鼓点记住：这里和巧克力原料有联系，球场上也常能看到爆发力和欢乐感。",
  england: "英格兰像现代足球故事的开头：从伦敦钟声到周末球场，很多足球规则和传统都可以从这里讲起。",
  croatia: "克罗地亚像亚得里亚海边的一件红白格球衣：古城、海岸和沉稳中场，让人记住美丽与坚韧。",
  portugal: "葡萄牙像一艘从海边出发的船：航海故事、法朵音乐、蛋挞和技术型足球，都带着探索世界的味道。",
  norway: "挪威像一本打开的峡湾画册：雪山、极光和森林湖泊，让人记住北方自然的安静力量。",
  germany: "德国可以用一台精密机器来记住：工程、音乐、圣诞市集和整体足球，都让人想到秩序与效率。",
  netherlands: "荷兰像一张会管理水的地图：运河、风车、郁金香和空间感足球，让孩子记住人怎样和自然合作。",
  switzerland: "瑞士像阿尔卑斯山里的一只精准钟表：多种语言、雪山、奶酪和秩序感，让人记住稳定与精确。",
  scotland: "苏格兰可以用风笛声和高地城堡记住：格子呢、山风和拼搏精神，让这个地方很有故事感。",
  spain: "西班牙像阳光下的一次连续传球：广场、艺术、海鲜饭和传控足球，让人记住耐心与技术。",
  austria: "奥地利像一首从维也纳飘出的古典乐：宫殿、咖啡馆、阿尔卑斯山和有秩序的节奏都在里面。",
  belgium: "比利时像一块巧克力旁边放着漫画书：多种语言、欧盟城市和创造力，让小国家显得很丰富。",
  panama: "巴拿马最好用一条运河记住：它像世界海运的快捷通道，把太平洋和加勒比海一笔连起来。",
  curacao: "库拉索像加勒比海边一排彩色房子：小岛、多语文化和明亮港口，让孩子一眼记住它的颜色。",
  haiti: "海地可以用加勒比鼓声和山顶城堡记住：它有独特语言和独立历史，也有很强的生命力。",
  bosnia: "波黑像一座连接两岸的古桥：山城、咖啡和不同文化相遇的历史，让人记住连接与修复。",
  sweden: "瑞典像森林湖泊旁的一间简洁小屋：设计、平等、北欧生活和集体配合，让人记住清爽与合作。",
  turkey: "土耳其像一座横跨欧亚的大桥：集市、茶、圣索菲亚和热烈球迷，让东西方故事在这里相遇。",
  "czech-republic": "捷克像布拉格的一座石桥：城堡、木偶、老城和耐心组织，让人记住中欧童话感。",
  "dr-congo": "刚果民主共和国可以用一条巨大的刚果河记住：雨林、音乐和强壮节奏，让人想到非洲中部的生命力。",
  iraq: "伊拉克像两条河流之间的古老课堂：底格里斯河和幼发拉底河孕育过早期文明，也让这里充满历史重量。"
};
const videoTopicOverrides = {
  england: "England country culture history",
  scotland: "Scotland country culture history",
  "ivory-coast": "Cote d'Ivoire country culture history",
  "dr-congo": "Democratic Republic of the Congo culture history",
  curacao: "Curacao island culture history",
  bosnia: "Bosnia and Herzegovina culture history",
  turkey: "Turkey country culture history",
  "czech-republic": "Czech Republic culture history"
};
const matchStoryOverrides = {
  73: {
    canada: "加拿大久攻不下，直到 Eustáquio 90+2' 一脚绝杀，艰难跨过南非进入 16 强。",
    "south-africa": "南非守到最后时刻仍被 Eustáquio 90+2' 绝杀，虽然出局，但这场比赛让孩子看到防守坚持和最后一分钟的残酷。"
  },
  74: {
    brazil: "巴西先被日本的 Sano 29' 打开局面，但下半场靠 Casemiro 56' 扳平，并由 Martinelli 90+5' 绝杀完成逆转。",
    japan: "日本靠 Sano 29' 先取得领先，却被 Casemiro 56' 扳平，又在最后时刻被 Martinelli 90+5' 反超。"
  },
  75: {
    paraguay: "巴拉圭先靠 Enciso 42' 领先，被 Havertz 54' 扳平后仍把德国拖进点球大战，并以 4–3 制造大冷门。",
    germany: "德国靠 Havertz 54' 追平 Enciso 42' 的进球，但没能在 120 分钟解决比赛，最终倒在点球大战。"
  },
  76: {
    morocco: "摩洛哥在被 Gakpo 72' 领先后没有放弃，最后时刻由 Diop 90+1' 扳平，并靠点球大战淘汰荷兰。",
    netherlands: "荷兰一度靠 Gakpo 72' 领先，却在补时被 Diop 90+1' 追平，最终倒在混乱而残酷的点球大战中。"
  },
  77: {
    norway: "挪威先靠 Nusa 39' 破门，又在被 Diallo 74' 追平后由 Haaland 86' 打进制胜球，惊险闯入 16 强。",
    "ivory-coast": "科特迪瓦靠 Diallo 74' 扳平比分并一度看到希望，但最后阶段没能挡住 Haaland 86' 的致命一击。"
  },
  78: {
    france: "法国靠 Mbappé 45', 74' 的两粒进球和 Barcola 53' 的破门 3–0 击败瑞典，展现出强队在淘汰赛中的效率。",
    sweden: "瑞典努力用防守抵抗法国，但面对 Mbappé 45', 74' 和 Barcola 53' 的连续冲击，最终没能挡住法国的进攻火力。"
  },
  98: {
    spain: "西班牙先靠 Fabián Ruiz 30' 打开局面，虽然被 De Ketelaere 41' 追平，但最终由 Merino 88' 完成绝杀，挺进半决赛。",
    belgium: "比利时靠 De Ketelaere 41' 一度追平比分，但最后时刻还是没能挡住 Merino 88' 的绝杀，无缘半决赛。"
  }
};

const state = {
  selectedId: countries[0].id,
  filter: "全部",
  query: ""
};

const elements = {
  countryCount: document.querySelector("#countryCount"),
  searchInput: document.querySelector("#searchInput"),
  filters: document.querySelector("#filters"),
  countryList: document.querySelector("#countryList"),
  detailFlag: document.querySelector("#detailFlag"),
  detailRegion: document.querySelector("#detailRegion"),
  detailName: document.querySelector("#detailName"),
  detailStatus: document.querySelector("#detailStatus"),
  latestMatchList: document.querySelector("#latestMatchList"),
  quarterfinalList: document.querySelector("#quarterfinalList"),
  capital: document.querySelector("#capital"),
  languages: document.querySelector("#languages"),
  hello: document.querySelector("#hello"),
  flagColors: document.querySelector("#flagColors"),
  cultureList: document.querySelector("#cultureList"),
  themeList: document.querySelector("#themeList"),
  footballStyle: document.querySelector("#footballStyle"),
  valueChips: document.querySelector("#valueChips"),
  videoList: document.querySelector("#videoList"),
  matchSummary: document.querySelector("#matchSummary"),
  groupMatchList: document.querySelector("#groupMatchList"),
  knockoutMatchList: document.querySelector("#knockoutMatchList"),
  countryPhoto: document.querySelector("#countryPhoto"),
  imageCaption: document.querySelector("#imageCaption"),
  photoControls: document.querySelector("#photoControls"),
  memoryText: document.querySelector("#memoryText"),
  jumpMatchButton: document.querySelector("#jumpMatchButton"),
  matchRecords: document.querySelector("#matchRecords"),
  aiChatOpen: document.querySelector("#aiChatOpen"),
  aiChatClose: document.querySelector("#aiChatClose"),
  aiGuide: document.querySelector("#aiGuide"),
  aiChatIntro: document.querySelector("#aiChatIntro"),
  aiChatMessages: document.querySelector("#aiChatMessages"),
  aiChatSuggestions: document.querySelector("#aiChatSuggestions"),
  aiChatForm: document.querySelector("#aiChatForm"),
  aiChatInput: document.querySelector("#aiChatInput"),
  aiChatSubmit: document.querySelector("#aiChatSubmit"),
  aiVoiceInput: document.querySelector("#aiVoiceInput"),
  aiVoiceOutput: document.querySelector("#aiVoiceOutput"),
  aiVoiceSpeed: document.querySelector("#aiVoiceSpeed"),
  aiVoiceSpeedValue: document.querySelector("#aiVoiceSpeedValue"),
  aiVoiceStatus: document.querySelector("#aiVoiceStatus"),
  noteHint: document.querySelector("#noteHint"),
  familyNotes: document.querySelector("#familyNotes")
};

let imageRequestId = 0;
let activePhotoIndex = 0;
let chatRequestId = 0;
let chatBusy = false;
let chatOpen = false;
let voiceOutputEnabled = false;
let recognition = null;
let isListening = false;
let activeSpeechAudio = null;
const chatSessions = {};

function countryById(id) {
  return countries.find((item) => item.id === id);
}

function countryByUrlToken(token) {
  const normalized = decodeURIComponent(String(token || ""))
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/^#/, "");
  if (!normalized) return null;
  return countries.find((country) => {
    const candidates = [
      country.id,
      country.nameEn,
      country.nameZh,
      country.flag
    ].map((value) => String(value || "").trim().toLowerCase().replace(/\s+/g, "-"));
    return candidates.includes(normalized);
  }) || null;
}

function parseUrlState() {
  const params = new URLSearchParams(window.location.search);
  let countryToken = params.get("country") || params.get("c") || "";
  let sectionToken = params.get("section") || params.get("target") || "";
  const hash = decodeURIComponent(window.location.hash.replace(/^#/, "")).trim();

  if (hash) {
    if (hash.includes("=")) {
      const hashParams = new URLSearchParams(hash);
      countryToken = hashParams.get("country") || hashParams.get("c") || countryToken;
      sectionToken = hashParams.get("section") || hashParams.get("target") || sectionToken;
    } else {
      const [hashCountry, hashSection] = hash.split(/[/:]/);
      countryToken = hashCountry || countryToken;
      sectionToken = hashSection || sectionToken;
    }
  }

  return {
    country: countryByUrlToken(countryToken),
    shouldShowMatches: ["match", "matches", "records", "matchrecords", "世界杯比赛记录"].includes(sectionToken.toLowerCase())
  };
}

function updateCountryUrl(countryId, section = "") {
  const targetHash = section === "matches" ? `#${countryId}/matches` : `#${countryId}`;
  if (window.location.hash === targetHash) return;
  window.history.pushState(null, "", targetHash);
}

function scrollToCountryDetail() {
  document.querySelector(".country-detail").scrollIntoView({ behavior: "smooth", block: "start" });
}

function scrollToMatchRecords() {
  elements.matchRecords.scrollIntoView({ behavior: "smooth", block: "start" });
}

function statusLabel(status) {
  return status === "complete" ? "已完善" : "待扩展";
}

function flagMarkup(country, className) {
  if (country.flagImage) {
    return `<img class="${className}" src="${country.flagImage}" alt="${country.nameZh}国旗">`;
  }
  return `<span class="${className}">${country.flag}</span>`;
}

function noteKey(countryId) {
  return `worldcup-passport-${countryId}`;
}

function getFilteredCountries() {
  const query = state.query.trim().toLowerCase();
  return countries.filter((country) => {
    const inFilter = state.filter === "全部" || country.confederation === state.filter;
    const haystack = [
      country.nameZh,
      country.nameEn,
      country.region,
      country.capital,
      country.confederation,
      ...country.languages,
      ...country.culture
    ].join(" ").toLowerCase();
    return inFilter && (!query || haystack.includes(query));
  });
}

function renderFilters() {
  elements.filters.innerHTML = "";
  confederations.forEach((filter) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = filter === "全部" ? filter : confederationLabels[filter];
    button.className = filter === state.filter ? "is-active" : "";
    button.addEventListener("click", () => {
      state.filter = filter;
      const filtered = getFilteredCountries();
      if (!filtered.some((country) => country.id === state.selectedId)) {
        state.selectedId = filtered[0]?.id || countries[0].id;
      }
      render();
    });
    elements.filters.append(button);
  });
}

function renderCountryList() {
  const filtered = getFilteredCountries();
  elements.countryCount.textContent = `${filtered.length}/${countries.length}`;
  elements.countryList.innerHTML = "";

  filtered.forEach((country) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `country-button ${country.id === state.selectedId ? "is-selected" : ""}`;
    button.innerHTML = `
      ${flagMarkup(country, "mini-flag")}
      <span>
        <strong>${country.nameZh}</strong>
        <small>${country.nameEn} · ${country.region}</small>
      </span>
      <span class="dot ${country.status}" title="${statusLabel(country.status)}"></span>
    `;
    button.addEventListener("click", () => selectCountry(country.id, { scroll: false }));
    elements.countryList.append(button);
  });

  if (!filtered.length) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = "没有匹配的国家";
    elements.countryList.append(empty);
  }
}

function renderList(target, items) {
  target.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    target.append(li);
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function helloLocale(country) {
  const languageText = country.languages.join(" / ");
  const matchedLanguage = Object.keys(helloSpeechLocales)
    .sort((a, b) => b.length - a.length)
    .find((language) => languageText.includes(language));
  return matchedLanguage ? helloSpeechLocales[matchedLanguage] : "en-US";
}

function pickSpeechVoice(locale) {
  const voices = window.speechSynthesis?.getVoices?.() || [];
  const normalized = locale.toLowerCase();
  return voices.find((voice) => voice.lang?.toLowerCase() === normalized)
    || voices.find((voice) => voice.lang?.toLowerCase().startsWith(normalized.split("-")[0]))
    || null;
}

function speakHello(country) {
  if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
    elements.hello.title = "当前浏览器不支持内置语音朗读";
    return;
  }
  window.speechSynthesis.cancel();
  const locale = helloLocale(country);
  const utterance = new SpeechSynthesisUtterance(country.hello);
  utterance.lang = locale;
  utterance.rate = 0.95;
  utterance.pitch = 1;
  const voice = pickSpeechVoice(locale);
  if (voice) utterance.voice = voice;
  window.speechSynthesis.speak(utterance);
}

function externalSearchUrl(query) {
  const encoded = encodeURIComponent(query);
  return `https://www.youtube.com/results?search_query=${encoded}`;
}

function getVideoLinks(country) {
  const curatedVideos = window.COUNTRY_VIDEOS?.[country.id];
  if (curatedVideos?.length) {
    return curatedVideos.map((video) => ({
      platform: video.platform,
      title: video.title,
      description: video.description,
      videoId: video.videoId,
      url: `https://www.youtube.com/watch?v=${video.videoId}`
    }));
  }

  const topic = videoTopicOverrides[country.id] || `${country.nameEn} country culture history geography`;
  return [{
    platform: "YouTube",
    title: `${country.nameZh}视频搜索`,
    description: "暂未配置可嵌入视频，点击前往外站选择高播放内容。",
    videoId: "",
    url: externalSearchUrl(topic)
  }];
}

function renderVideoLinks(country) {
  elements.videoList.innerHTML = "";
  getVideoLinks(country).forEach((video) => {
    const thumbnail = video.videoId ? `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg` : "";
    const card = document.createElement("article");
    card.className = "video-card";
    card.innerHTML = `
      <a class="video-thumb" href="${video.url}" target="_blank" rel="noopener noreferrer" aria-label="观看：${video.title}">
        ${thumbnail ? `<img src="${thumbnail}" alt="${video.title}封面" loading="lazy">` : ""}
        <span class="play-badge">播放</span>
      </a>
      <div class="video-card__body">
        <span>${video.platform}</span>
        <strong>${video.title}</strong>
        <small>${video.description}</small>
        <a href="${video.url}" target="_blank" rel="noopener noreferrer">去外站观看</a>
      </div>
    `;
    elements.videoList.append(card);
  });
}

function resultForCountry(match, country) {
  if (match.homeId === country.id) return match.homeResult;
  if (match.awayId === country.id) return match.awayResult;
  return "";
}

function opponentForCountry(match, country) {
  return match.homeId === country.id ? match.away : match.home;
}

function selectCountry(countryId, options = {}) {
  if (!countryById(countryId)) return;
  const config = typeof options === "boolean" ? { scroll: options } : options;
  const shouldScroll = config.scroll ?? true;
  const section = config.section || "";
  const shouldUpdateUrl = config.updateUrl ?? true;
  state.selectedId = countryId;
  state.query = "";
  elements.searchInput.value = "";
  renderCountryList();
  renderCountryDetail();
  if (shouldUpdateUrl) updateCountryUrl(countryId, section);
  if (shouldScroll) {
    if (section === "matches") {
      scrollToMatchRecords();
    } else {
      scrollToCountryDetail();
    }
  }
}

function teamButtonMarkup(teamId, teamName, currentCountryId) {
  const team = countryById(teamId);
  const label = team?.nameZh || teamName;
  const disabled = teamId === currentCountryId || !team;
  const flag = team ? flagMarkup(team, "team-flag") : "";
  return `
    <button class="team-jump" type="button" data-country-id="${teamId}" ${disabled ? "disabled" : ""}>
      ${flag}
      <span>${label}</span>
    </button>
  `;
}

function scoreForCountry(match, country) {
  if (!match.score) return `第 ${match.matchNo} 场`;
  const scoreMatch = match.score.match(/(\d+)\s*–\s*(\d+)(.*)/);
  const score = scoreMatch
    ? (match.homeId === country.id
      ? `${scoreMatch[1]}–${scoreMatch[2]}${scoreMatch[3]}`
      : `${scoreMatch[2]}–${scoreMatch[1]}${scoreMatch[3]}`)
    : match.score;
  const penalties = match.homeId === country.id ? match.penalties : match.penalties.split("–").reverse().join("–");
  return match.penalties ? `${score}，点球 ${penalties}` : score;
}

function goalMinute(goal) {
  const match = goal.match(/(\d+)(?:\+(\d+))?'/);
  if (!match) return 999;
  return Number(match[1]) + (match[2] ? Number(match[2]) / 100 : 0);
}

function goalSearchUrl(match, goal) {
  const cleanGoal = goal.replace(/\s*\([^)]*\)/g, "").trim();
  return externalSearchUrl(`${match.home} vs ${match.away} ${cleanGoal} goal 2026 FIFA World Cup highlights`);
}

function goalLinkMarkup(match, goal) {
  return `<a class="goal-link" href="${goalSearchUrl(match, goal)}" target="_blank" rel="noopener noreferrer" title="在 YouTube 搜索这个进球片段">${goal}</a>`;
}

function goalListHtml(match, goals) {
  if (!goals?.length) return "";
  const linkedGoals = goals.map((goal) => goalLinkMarkup(match, goal));
  if (linkedGoals.length === 1) return linkedGoals[0];
  return `${linkedGoals.slice(0, -1).join("、")}和${linkedGoals[linkedGoals.length - 1]}`;
}

function linkStoryGoals(story, match) {
  return [...(match.homeGoals || []), ...(match.awayGoals || [])]
    .sort((a, b) => b.length - a.length)
    .reduce((linkedStory, goal) => linkedStory.split(goal).join(goalLinkMarkup(match, goal)), story);
}

function sideGoals(match, country) {
  return match.homeId === country.id ? match.homeGoals || [] : match.awayGoals || [];
}

function opponentGoals(match, country) {
  return match.homeId === country.id ? match.awayGoals || [] : match.homeGoals || [];
}

function firstScoringSide(match) {
  const home = (match.homeGoals || []).map((goal) => ({ side: "home", minute: goalMinute(goal) }));
  const away = (match.awayGoals || []).map((goal) => ({ side: "away", minute: goalMinute(goal) }));
  return [...home, ...away].sort((a, b) => a.minute - b.minute)[0]?.side || "";
}

function detailedMatchStory(match, country, opponentName, result, score, stage) {
  const ownGoals = sideGoals(match, country);
  const againstGoals = opponentGoals(match, country);
  const ownText = goalListHtml(match, ownGoals);
  const againstText = goalListHtml(match, againstGoals);
  const ownSide = match.homeId === country.id ? "home" : "away";
  const firstSide = firstScoringSide(match);
  const ledFirst = firstSide === ownSide;
  const trailedFirst = firstSide && firstSide !== ownSide;

  if (!ownGoals.length && !againstGoals.length) {
    return `${stage}战报：${country.nameZh}与${opponentName}互交白卷，0–0 的比分背后是一场耐心、防守和机会把握的拉锯。`;
  }

  if (result === "胜") {
    if (!againstGoals.length) {
      return `${stage}战报：${country.nameZh}凭借 ${ownText} 的进球以 ${score} 击败${opponentName}，同时完成零封。`;
    }
    if (trailedFirst) {
      return `${stage}战报：${country.nameZh}先被${opponentName}的 ${againstText} 破门，但随后依靠 ${ownText} 完成反超，以 ${score} 取胜。`;
    }
    return `${stage}战报：${country.nameZh}由 ${ownText} 建功，以 ${score} 击败${opponentName}；${opponentName}的 ${againstText} 曾制造压力。`;
  }

  if (result === "负") {
    if (!ownGoals.length) {
      return `${stage}战报：${country.nameZh}没能取得进球，被${opponentName}依靠 ${againstText} 以 ${score} 击败。`;
    }
    if (ledFirst) {
      return `${stage}战报：${country.nameZh}曾靠 ${ownText} 取得进球，但之后被${opponentName}用 ${againstText} 反超，最终以 ${score} 告负。`;
    }
    return `${stage}战报：${country.nameZh}由 ${ownText} 破门回应，但没能挡住${opponentName}的 ${againstText}，最终以 ${score} 落败。`;
  }

  if (ownGoals.length && againstGoals.length) {
    if (ledFirst) {
      return `${stage}战报：${country.nameZh}先由 ${ownText} 破门，但${opponentName}依靠 ${againstText} 追平，双方以 ${score} 收场。`;
    }
    return `${stage}战报：${country.nameZh}在落后后依靠 ${ownText} 扳回比分，与${opponentName}的 ${againstText} 共同写成 ${score} 的平局。`;
  }

  return `${stage}战报：${country.nameZh}与${opponentName}踢成 ${score}，比赛的关键进球来自 ${ownText || againstText}。`;
}

function matchStory(match, country) {
  const override = matchStoryOverrides[match.matchNo]?.[country.id];
  if (override) return linkStoryGoals(override, match);

  const opponent = opponentForCountry(match, country);
  const opponentId = match.homeId === country.id ? match.awayId : match.homeId;
  const opponentName = countryById(opponentId)?.nameZh || opponent;
  const result = resultForCountry(match, country);
  const score = scoreForCountry(match, country);
  const stage = match.stage;

  if (match.status !== "completed") {
    return `${stage}待赛：${country.nameZh}将对阵${opponentName}，可以和孩子一起提前找找两国在地图上的位置。`;
  }

  if (match.homeGoals || match.awayGoals) {
    return detailedMatchStory(match, country, opponentName, result, score, stage);
  }

  if (result === "胜") {
    return `${stage}战报：${country.nameZh}以 ${score} 战胜${opponentName}，这场胜利很适合聊聊“坚持到最后”和团队配合。`;
  }

  if (result === "负") {
    return `${stage}战报：${country.nameZh}以 ${score} 不敌${opponentName}，输球也可以成为理解风度、尊重和重新出发的好机会。`;
  }

  return `${stage}战报：${country.nameZh}与${opponentName}踢成 ${score}，双方都没有轻易让步，平局也很能体现比赛的拉锯感。`;
}

function renderMatchList(target, matches, country) {
  target.innerHTML = "";
  if (!matches.length) {
    const empty = document.createElement("p");
    empty.className = "match-empty";
    empty.textContent = "暂无该阶段比赛。";
    target.append(empty);
    return;
  }

  matches.forEach((match) => {
    const result = resultForCountry(match, country);
    const opponent = opponentForCountry(match, country);
    const opponentId = match.homeId === country.id ? match.awayId : match.homeId;
    const card = document.createElement("article");
    card.className = `match-card result-${result}`;
    card.innerHTML = `
      <div class="match-card__top">
        <span>${match.stage}${match.group ? ` · ${match.group}组` : ""}</span>
        <strong>${result}</strong>
      </div>
      <div class="match-card__main">
        ${teamButtonMarkup(country.id, country.nameEn, country.id)}
        <strong>${scoreForCountry(match, country)}</strong>
        ${teamButtonMarkup(opponentId, opponent, country.id)}
      </div>
      <p>${match.date || "待定"} ${match.time || ""}${match.venue ? ` · ${match.venue}` : ""}</p>
      <p class="match-story">${matchStory(match, country)}</p>
      <a href="${match.replayUrl}" target="_blank" rel="noopener noreferrer">看重播 / 集锦</a>
    `;
    card.querySelectorAll(".team-jump:not(:disabled)").forEach((button) => {
      button.addEventListener("click", () => {
        selectCountry(button.dataset.countryId);
      });
    });
    target.append(card);
  });
}

function latestCompletedMatches(limit = 4) {
  return (window.WORLD_CUP_MATCHES?.matches || [])
    .filter((match) => match.status === "completed" && match.stageType === "knockout")
    .sort((a, b) => {
      const dateCompare = String(b.date || "").localeCompare(String(a.date || ""));
      return dateCompare || b.matchNo - a.matchNo;
    })
    .slice(0, limit);
}

function latestTeamButton(match, side) {
  const teamId = match[`${side}Id`];
  const teamName = match[side];
  const team = countryById(teamId);
  return `
    <button class="latest-team" type="button" data-country-id="${teamId}" ${team ? "" : "disabled"}>
      ${team ? flagMarkup(team, "latest-flag") : ""}
      <span>${team?.nameZh || teamName}</span>
    </button>
  `;
}

function latestTeamName(match, side) {
  const team = countryById(match[`${side}Id`]);
  return team?.nameZh || match[side];
}

function latestScoreText(match) {
  return match.penalties ? `${match.score} 点球 ${match.penalties}` : match.score;
}

function latestWinnerText(match) {
  if (match.homeResult === "胜") return `${latestTeamName(match, "home")}晋级`;
  if (match.awayResult === "胜") return `${latestTeamName(match, "away")}晋级`;
  return "平局收场";
}

function latestGoalLinks(match) {
  const goals = [
    ...(match.homeGoals || []),
    ...(match.awayGoals || [])
  ];
  if (!goals.length) return "";
  const links = goals.slice(0, 4).map((goal) => {
    return `<a class="latest-goal-link" href="${goalSearchUrl(match, goal)}" target="_blank" rel="noopener noreferrer" title="在 YouTube 搜索这个进球片段">${goal}</a>`;
  });
  return goals.length > 4 ? `${links.join("、")}等` : links.join("、");
}

function latestNoteText(match) {
  const goalLinks = latestGoalLinks(match);
  if (goalLinks) return `${latestWinnerText(match)} · ${goalLinks}`;
  if (match.penalties) return `${latestWinnerText(match)} · 点球大战 ${match.penalties}`;
  return latestWinnerText(match);
}

function renderLatestMatches() {
  elements.latestMatchList.innerHTML = "";
  const matches = latestCompletedMatches();
  if (!matches.length) {
    elements.latestMatchList.innerHTML = `<p class="latest-empty">暂无已结束的淘汰赛。</p>`;
    return;
  }

  matches.forEach((match) => {
    const item = document.createElement("article");
    item.className = "latest-match";
    item.innerHTML = `
      <div class="latest-match__meta">
        <span>最新赛果 · ${match.stage}</span>
        <strong>${match.date}</strong>
      </div>
      <div class="latest-match__score">
        ${latestTeamButton(match, "home")}
        <strong>${latestScoreText(match)}</strong>
        ${latestTeamButton(match, "away")}
      </div>
      <p class="latest-match__note">${latestNoteText(match)}</p>
    `;
    elements.latestMatchList.append(item);
  });
}

function quarterfinalMatches() {
  return (window.WORLD_CUP_MATCHES?.matches || [])
    .filter((match) => match.stage === "四分之一决赛")
    .sort((a, b) => a.matchNo - b.matchNo);
}

function venueCity(venue = "") {
  return venue.replace(/\s*,\s*/g, " · ").replace(/\s+/g, " ").trim();
}

function beijingTimeLabel(match) {
  const dateMatch = String(match.date || "").match(/^(\d{4})-(\d{2})-(\d{2})$/);
  const timeMatch = String(match.time || "").match(/^(\d{1,2}):(\d{2})\s*(a\.m\.|p\.m\.)\s*UTC([−-])(\d+)$/i);
  if (!dateMatch || !timeMatch) return "北京时间待定";

  let hour = Number(timeMatch[1]);
  const minute = Number(timeMatch[2]);
  const meridiem = timeMatch[3].toLowerCase();
  if (meridiem === "p.m." && hour !== 12) hour += 12;
  if (meridiem === "a.m." && hour === 12) hour = 0;

  const offsetSign = timeMatch[4] === "−" || timeMatch[4] === "-" ? -1 : 1;
  const sourceOffset = offsetSign * Number(timeMatch[5]);
  const utcMillis = Date.UTC(Number(dateMatch[1]), Number(dateMatch[2]) - 1, Number(dateMatch[3]), hour - sourceOffset, minute);
  const beijing = new Date(utcMillis + 8 * 60 * 60 * 1000);
  const month = String(beijing.getUTCMonth() + 1).padStart(2, "0");
  const day = String(beijing.getUTCDate()).padStart(2, "0");
  const beijingHour = String(beijing.getUTCHours()).padStart(2, "0");
  const beijingMinute = String(beijing.getUTCMinutes()).padStart(2, "0");
  return `北京时间 ${month}月${day}日 ${beijingHour}:${beijingMinute}`;
}

function quarterfinalStatus(match) {
  if (match.status === "completed") {
    return `${latestScoreText(match)} · ${latestWinnerText(match)}`;
  }
  return beijingTimeLabel(match);
}

function renderQuarterfinals() {
  if (!elements.quarterfinalList) return;
  elements.quarterfinalList.innerHTML = "";
  const matches = quarterfinalMatches();
  if (!matches.length) {
    elements.quarterfinalList.innerHTML = `<p class="latest-empty">8强赛程待更新。</p>`;
    return;
  }

  matches.forEach((match) => {
    const card = document.createElement("article");
    card.className = "quarterfinal-card";
    card.innerHTML = `
      <div class="quarterfinal-card__meta">
        <span>${match.stage}</span>
        <strong>${beijingTimeLabel(match).replace("北京时间 ", "")}</strong>
      </div>
      <div class="quarterfinal-card__teams">
        ${latestTeamButton(match, "home")}
        <span>${match.status === "completed" ? latestScoreText(match) : "vs"}</span>
        ${latestTeamButton(match, "away")}
      </div>
      <p>${quarterfinalStatus(match)}${match.venue ? ` · ${venueCity(match.venue)}` : ""}</p>
    `;
    elements.quarterfinalList.append(card);
  });
}

function renderMatches(country) {
  const matches = window.WORLD_CUP_MATCHES?.byCountry?.[country.id] || [];
  const groupMatches = matches.filter((match) => match.stageType === "group");
  const knockoutMatches = matches.filter((match) => match.stageType === "knockout");
  const completed = matches.filter((match) => match.status === "completed");
  const wins = completed.filter((match) => resultForCountry(match, country) === "胜").length;
  const draws = completed.filter((match) => resultForCountry(match, country) === "平").length;
  const losses = completed.filter((match) => resultForCountry(match, country) === "负").length;

  elements.matchSummary.textContent = `${country.nameZh}已记录 ${matches.length} 场比赛，其中已完赛 ${completed.length} 场：${wins}胜 ${draws}平 ${losses}负。时间为比赛所在地当地时间。`;
  renderMatchList(elements.groupMatchList, groupMatches, country);
  renderMatchList(elements.knockoutMatchList, knockoutMatches, country);
}

function initialChatSuggestions(country) {
  const questions = [
    `${country.nameZh}最适合小朋友记住的故事是什么？`,
    `${country.nameZh}的${country.landmark}有什么有趣来历？`,
    `看${country.nameZh}比赛时，可以顺便聊哪些文化？`,
    `${country.nameZh}有什么代表性食物适合家庭主题夜？`
  ];
  return questions.filter(Boolean).slice(0, 4);
}

function chatSession(country) {
  if (!chatSessions[country.id]) {
    chatSessions[country.id] = {
      messages: [],
      suggestions: initialChatSuggestions(country)
    };
  }
  return chatSessions[country.id];
}

function setChatBusy(isBusy) {
  chatBusy = isBusy;
  elements.aiChatSubmit.disabled = isBusy;
  elements.aiChatInput.disabled = isBusy;
  elements.aiVoiceInput.disabled = isBusy || !recognition;
  elements.aiChatSuggestions.querySelectorAll("button").forEach((button) => {
    button.disabled = isBusy;
  });
}

function setChatOpen(isOpen) {
  chatOpen = isOpen;
  elements.aiGuide.classList.toggle("is-open", isOpen);
  elements.aiGuide.setAttribute("aria-hidden", String(!isOpen));
  elements.aiChatOpen.setAttribute("aria-expanded", String(isOpen));
  if (isOpen) {
    window.setTimeout(() => elements.aiChatInput.focus(), 160);
  }
}

function setVoiceStatus(message = "", isListeningNow = false) {
  elements.aiVoiceStatus.textContent = message;
  elements.aiVoiceStatus.classList.toggle("is-listening", isListeningNow);
}

function currentSpeechSpeed() {
  const speed = Number(elements.aiVoiceSpeed.value);
  return Number.isFinite(speed) ? Math.min(1.6, Math.max(0.8, speed)) : 1.15;
}

function speedLabel() {
  return `${currentSpeechSpeed().toFixed(2)}x`;
}

function updateSpeechSpeedLabel() {
  elements.aiVoiceSpeedValue.textContent = speedLabel();
}

function voiceOutputStatusText() {
  return `播报已开启，AI 回复会按 ${speedLabel()} 自动朗读。`;
}

function stopSpeechAudio() {
  if (!activeSpeechAudio) return;
  activeSpeechAudio.pause();
  activeSpeechAudio.currentTime = 0;
  activeSpeechAudio = null;
}

async function speakText(text) {
  if (!text) return;
  stopSpeechAudio();
  setVoiceStatus("正在准备 OpenAI 语音...");
  try {
    const response = await fetch("/api/speech", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, speed: currentSpeechSpeed() })
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data.url) {
      throw new Error(data.error || "语音生成失败");
    }
    activeSpeechAudio = new Audio(data.url);
    activeSpeechAudio.onplay = () => setVoiceStatus(data.cached ? "正在播放已缓存的 OpenAI 语音..." : "正在播放 OpenAI 语音...");
    activeSpeechAudio.onended = () => {
      activeSpeechAudio = null;
      setVoiceStatus(voiceOutputEnabled ? voiceOutputStatusText() : "");
    };
    activeSpeechAudio.onerror = () => {
      activeSpeechAudio = null;
      setVoiceStatus("音频播放失败，可以再点一次“朗读”。");
    };
    await activeSpeechAudio.play();
  } catch (error) {
    setVoiceStatus(error.message || "语音服务暂时不可用，请稍后再试。");
  }
}

function initSpeechRecognition() {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!Recognition) {
    elements.aiVoiceInput.disabled = true;
    elements.aiVoiceInput.title = "当前浏览器不支持语音输入";
    setVoiceStatus("此浏览器可能不支持语音输入；仍可输入文字，并可尝试播报。");
    return;
  }

  recognition = new Recognition();
  recognition.lang = speechRecognitionLang;
  recognition.interimResults = true;
  recognition.continuous = false;

  recognition.onstart = () => {
    isListening = true;
    elements.aiVoiceInput.classList.add("is-active");
    setVoiceStatus("正在用简体中文识别你说的话，说完会填入输入框，请确认后手动发送。", true);
  };

  recognition.onresult = (event) => {
    let transcript = "";
    let finalTranscript = "";
    for (let index = event.resultIndex; index < event.results.length; index += 1) {
      const text = event.results[index][0].transcript;
      transcript += text;
      if (event.results[index].isFinal) finalTranscript += text;
    }
    elements.aiChatInput.value = (finalTranscript || transcript).trim();
    if (finalTranscript.trim()) {
      recognition.stop();
      setVoiceStatus("语音已填入输入框，可以修改后再点“发送”。");
      elements.aiChatInput.focus();
    }
  };

  recognition.onerror = (event) => {
    const message = event.error === "not-allowed"
      ? "麦克风权限没有打开，请允许浏览器使用麦克风。"
      : "这次没有听清楚，可以再点一次“语音”。";
    setVoiceStatus(message);
  };

  recognition.onend = () => {
    isListening = false;
    elements.aiVoiceInput.classList.remove("is-active");
    if (!elements.aiVoiceStatus.textContent.includes("权限") && !elements.aiChatInput.value.trim()) {
      setVoiceStatus(voiceOutputEnabled ? voiceOutputStatusText() : "");
    }
  };
}

function toggleVoiceInput() {
  if (!recognition) {
    setVoiceStatus("当前浏览器不支持语音输入，可以换 Chrome 或 Safari 试试。");
    return;
  }
  if (isListening) {
    recognition.stop();
    return;
  }
  try {
    recognition.start();
  } catch (error) {
    setVoiceStatus("语音输入已经在启动中，稍等一下再试。");
  }
}

function initVoiceControls() {
  initSpeechRecognition();
}

function appendChatMessage(message) {
  const bubble = document.createElement("div");
  bubble.className = `chat-message ${message.role}${message.pending ? " is-loading" : ""}`;
  const label = message.role === "user" ? "你" : "AI小导游";
  const speakButton = message.role === "assistant" && !message.pending
    ? `<button class="chat-speak" type="button">朗读</button>`
    : "";
  bubble.innerHTML = `
    <div class="chat-message__top">
      <strong>${label}</strong>
      ${speakButton}
    </div>
    <span>${escapeHtml(message.content)}</span>
  `;
  bubble.querySelector(".chat-speak")?.addEventListener("click", () => speakText(message.content));
  elements.aiChatMessages.append(bubble);
  elements.aiChatMessages.scrollTop = elements.aiChatMessages.scrollHeight;
  return bubble;
}

function renderChatSuggestions(country, suggestions) {
  elements.aiChatSuggestions.innerHTML = "";
  suggestions.slice(0, 4).forEach((question) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = question;
    button.addEventListener("click", () => {
      elements.aiChatInput.value = question;
      submitChatQuestion(country);
    });
    elements.aiChatSuggestions.append(button);
  });
}

function renderChat(country) {
  const session = chatSession(country);
  elements.aiChatIntro.textContent = `和 AI 一起聊${country.nameZh}的历史、人文、食物、足球和旅行画面。`;
  elements.aiChatMessages.innerHTML = "";

  if (!session.messages.length) {
    appendChatMessage({
      role: "assistant",
      content: `我是${country.nameZh}这一页的 AI 小导游。可以从一个故事、一种食物、一场比赛或一个地标开始聊。`
    });
  } else {
    session.messages.forEach(appendChatMessage);
  }

  renderChatSuggestions(country, session.suggestions);
  elements.aiChatInput.value = "";
  elements.aiChatInput.placeholder = `问问${country.nameZh}的故事、食物、球星或比赛`;
  setChatBusy(chatBusy);
}

function countryChatContext(country) {
  const matches = window.WORLD_CUP_MATCHES?.byCountry?.[country.id] || [];
  const completed = matches.filter((match) => match.status === "completed");
  const recentMatches = completed.slice(-4).map((match) => {
    const opponent = countryById(match.homeId === country.id ? match.awayId : match.homeId)?.nameZh || opponentForCountry(match, country);
    return `${match.stage}${match.group ? match.group + "组" : ""} 对${opponent} ${scoreForCountry(match, country)} ${resultForCountry(match, country)}`;
  });

  return {
    id: country.id,
    nameZh: country.nameZh,
    nameEn: country.nameEn,
    region: country.region,
    confederation: confederationLabels[country.confederation],
    capital: country.capital,
    languages: country.languages,
    hello: country.hello,
    landmark: country.landmark,
    culture: country.culture,
    food: country.food,
    footballStyle: country.footballStyle,
    values: country.values,
    memory: memoryStories[country.id] || "",
    recentMatches
  };
}

async function submitChatQuestion(country) {
  const content = elements.aiChatInput.value.trim();
  if (!content || chatBusy) return;

  const requestId = ++chatRequestId;
  const session = chatSession(country);
  session.messages.push({ role: "user", content });
  elements.aiChatInput.value = "";
  renderChat(country);
  const loadingBubble = appendChatMessage({ role: "assistant", content: "正在整理一个清楚好记的说法...", pending: true });
  setChatBusy(true);

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        country: countryChatContext(country),
        messages: session.messages.slice(-8)
      })
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(data.error || "AI 暂时没有回应");
    }
    if (requestId !== chatRequestId || country.id !== state.selectedId) return;
    const answer = data.answer || "我还没组织好答案，可以换个问法再试一次。";
    const suggestions = Array.isArray(data.suggestions) && data.suggestions.length
      ? data.suggestions.slice(0, 4)
      : initialChatSuggestions(country);

    session.messages.push({ role: "assistant", content: answer });
    session.suggestions = suggestions;
    loadingBubble.remove();
    renderChat(country);
    if (voiceOutputEnabled) speakText(answer);
  } catch (error) {
    if (requestId !== chatRequestId || country.id !== state.selectedId) return;
    const message = error.message || "AI 暂时没有回应";
    session.messages.push({
      role: "assistant",
      content: `${message}。可以稍后再试，或先点下面的问题继续探索。`
    });
    loadingBubble.remove();
    renderChat(country);
    if (voiceOutputEnabled) speakText(session.messages[session.messages.length - 1].content);
  } finally {
    if (requestId === chatRequestId) setChatBusy(false);
  }
}

function getImageItems(country) {
  const topics = imageTopics[country.id] || country.nameEn;
  const items = Array.isArray(topics) ? topics : [[country.landmark, topics]];
  return items.map(([label, topic]) => ({ label, topic }));
}

function renderPhotoControls(country) {
  const items = getImageItems(country);
  elements.photoControls.innerHTML = "";
  elements.photoControls.hidden = items.length <= 1;

  items.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = item.label;
    button.className = index === activePhotoIndex ? "is-active" : "";
    button.addEventListener("click", () => {
      activePhotoIndex = index;
      renderPhotoControls(country);
      loadCountryImage(country, index);
    });
    elements.photoControls.append(button);
  });
}

function setCountryPhoto(src, alt, caption, quality = "") {
  elements.countryPhoto.src = src;
  elements.countryPhoto.alt = alt;
  elements.countryPhoto.dataset.quality = quality;
  elements.imageCaption.textContent = caption;
}

function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(src);
    image.onerror = reject;
    image.src = src;
  });
}

async function loadCountryImage(country, index = 0) {
  const requestId = ++imageRequestId;
  const imageItems = getImageItems(country);
  const item = imageItems[index] || imageItems[0];
  const fallback = "assets/family-world-cup.jpg";

  setCountryPhoto(fallback, `${country.nameZh}特色图片`, `正在加载：${country.nameZh} · ${item.label}`, "fallback");

  let timeout;
  try {
    const controller = new AbortController();
    timeout = window.setTimeout(() => controller.abort(), 4500);
    const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(item.topic)}`, {
      signal: controller.signal
    });
    if (!response.ok) throw new Error("Image topic not found");
    const data = await response.json();
    const thumbnail = data.thumbnail?.source;
    const original = data.originalimage?.source;
    const firstImage = thumbnail || original;
    if (!firstImage) throw new Error("No image in summary");
    if (requestId !== imageRequestId) return;
    setCountryPhoto(firstImage, `${country.nameZh}特色图片：${item.label}`, `${country.nameZh} · ${item.label}`, thumbnail ? "thumbnail" : "original");

    if (thumbnail && original && thumbnail !== original) {
      preloadImage(original)
        .then((src) => {
          if (requestId !== imageRequestId) return;
          setCountryPhoto(src, `${country.nameZh}高清特色图片：${item.label}`, `${country.nameZh} · ${item.label}`, "original");
        })
        .catch(() => {
          if (requestId === imageRequestId) {
            elements.countryPhoto.dataset.quality = "thumbnail";
          }
        });
    }
  } catch (error) {
    if (requestId !== imageRequestId) return;
    setCountryPhoto(fallback, "家庭共学世界杯场景图", `${country.nameZh} · ${item.label}`, "fallback");
  } finally {
    if (timeout) window.clearTimeout(timeout);
  }
}

function renderCountryDetail() {
  const country = countries.find((item) => item.id === state.selectedId) || countries[0];
  const savedNote = localStorage.getItem(noteKey(country.id)) || "";

  elements.detailFlag.innerHTML = flagMarkup(country, "flag-visual");
  elements.detailRegion.textContent = `${country.region} · ${confederationLabels[country.confederation]}`;
  elements.detailName.textContent = `${country.nameZh} ${country.nameEn}`;
  elements.detailStatus.textContent = statusLabel(country.status);
  activePhotoIndex = 0;
  renderPhotoControls(country);
  loadCountryImage(country, activePhotoIndex);
  elements.memoryText.textContent = memoryStories[country.id] || `${country.nameZh}最适合从${country.landmark}、${country.culture.join("、")}和${country.footballStyle}开始记住。`;
  elements.capital.textContent = country.capital;
  elements.languages.textContent = country.languages.join(" / ");
  elements.hello.textContent = country.hello;
  elements.hello.classList.add("hello-speak");
  elements.hello.setAttribute("role", "button");
  elements.hello.setAttribute("tabindex", "0");
  elements.hello.setAttribute("title", `点击朗读：${country.hello}`);
  elements.hello.onclick = () => speakHello(country);
  elements.hello.onkeydown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      speakHello(country);
    }
  };
  elements.flagColors.textContent = country.flagColors;
  renderList(elements.cultureList, [country.landmark, ...country.culture].filter(Boolean));
  renderList(elements.themeList, [...country.food, `景点：${country.landmark}`, `问候语：${country.hello}`]);
  elements.footballStyle.textContent = country.footballStyle;
  elements.valueChips.innerHTML = "";
  country.values.forEach((value) => {
    const chip = document.createElement("span");
    chip.textContent = value;
    elements.valueChips.append(chip);
  });

  renderVideoLinks(country);
  renderMatches(country);
  renderChat(country);

  elements.noteHint.textContent = `${country.nameZh}这一页可以写：一句当地问候语、一个球员故事、一种食物、一个想问当地小朋友的问题。`;
  elements.familyNotes.value = savedNote;
  elements.familyNotes.placeholder = `${country.flag} ${country.nameZh}环球护照：\n我记住的地点：\n我想尝试的食物：\n我想问的问题：`;
  elements.familyNotes.oninput = () => {
    localStorage.setItem(noteKey(country.id), elements.familyNotes.value);
  };
}

function render() {
  renderFilters();
  renderCountryList();
  renderCountryDetail();
  renderLatestMatches();
  renderQuarterfinals();
}

elements.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  const filtered = getFilteredCountries();
  if (!filtered.some((country) => country.id === state.selectedId)) {
    state.selectedId = filtered[0]?.id || countries[0].id;
  }
  renderCountryList();
  renderCountryDetail();
});

function handleHeaderTeamClick(event) {
  const button = event.target.closest(".latest-team:not(:disabled)");
  if (!button) return;
  selectCountry(button.dataset.countryId);
}

elements.latestMatchList.addEventListener("click", handleHeaderTeamClick);
elements.quarterfinalList?.addEventListener("click", handleHeaderTeamClick);

elements.aiChatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const country = countries.find((item) => item.id === state.selectedId) || countries[0];
  submitChatQuestion(country);
});

elements.aiChatOpen.addEventListener("click", () => {
  const country = countries.find((item) => item.id === state.selectedId) || countries[0];
  renderChat(country);
  setChatOpen(true);
});

elements.aiChatClose.addEventListener("click", () => {
  setChatOpen(false);
  stopSpeechAudio();
});

elements.jumpMatchButton.addEventListener("click", () => {
  updateCountryUrl(state.selectedId, "matches");
  scrollToMatchRecords();
});

elements.aiVoiceInput.addEventListener("click", () => {
  toggleVoiceInput();
});

elements.aiVoiceOutput.addEventListener("click", () => {
  voiceOutputEnabled = !voiceOutputEnabled;
  elements.aiVoiceOutput.classList.toggle("is-active", voiceOutputEnabled);
  elements.aiVoiceOutput.setAttribute("aria-pressed", String(voiceOutputEnabled));
  if (voiceOutputEnabled) {
    setVoiceStatus(voiceOutputStatusText());
  } else {
    stopSpeechAudio();
    setVoiceStatus("");
  }
});

elements.aiVoiceSpeed.addEventListener("input", () => {
  updateSpeechSpeedLabel();
  if (voiceOutputEnabled) {
    setVoiceStatus(voiceOutputStatusText());
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && chatOpen) {
    setChatOpen(false);
    stopSpeechAudio();
  }
});

initVoiceControls();
updateSpeechSpeedLabel();
const initialUrlState = parseUrlState();
if (initialUrlState.country) {
  state.selectedId = initialUrlState.country.id;
}
render();
if (initialUrlState.shouldShowMatches) {
  window.setTimeout(scrollToMatchRecords, 0);
}

window.addEventListener("popstate", () => {
  const urlState = parseUrlState();
  if (urlState.country) {
    selectCountry(urlState.country.id, {
      scroll: urlState.shouldShowMatches,
      section: urlState.shouldShowMatches ? "matches" : "",
      updateUrl: false
    });
  } else if (urlState.shouldShowMatches) {
    scrollToMatchRecords();
  }
});

window.addEventListener("hashchange", () => {
  const urlState = parseUrlState();
  if (urlState.country) {
    selectCountry(urlState.country.id, {
      scroll: true,
      section: urlState.shouldShowMatches ? "matches" : "",
      updateUrl: false
    });
  } else if (urlState.shouldShowMatches) {
    scrollToMatchRecords();
  }
});
