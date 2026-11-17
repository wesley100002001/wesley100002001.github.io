// 主力版 CV 投影片的選稿：作品資料在 credits.js，這裡只決定放哪些、放在哪一頁
const cvDeck = {
  name: "林家偉",
  nameEn: "CHIA WEI LIN",
  nickname: "Wesley",
  headline: "2025 臺北藝穗節 藝穗精選獎",
  email: "wesley100002001@gmail.com",
  phone: "0926-324-469",
  line: "wesley100002001",
  website: "wesley100002001.github.io/wesley.cwlin",
  instagram: "@wesley.cwlin",

  profile: [
    ["姓名", "林家偉 / Wesley"],
    ["年齡", "38y"],
    ["身材", "184cm / 73kg"],
    ["三圍", "92 / 81 / 101cm"],
    ["鞋號", "27.5"],
    ["專長", "唱歌、當代舞、網頁工程、與爸媽溝通"],
    ["興趣", "芭蕾、踢踏、料理、保齡球、桌球"]
  ],
  languages: ["國語、台語（母語）", "英文（精通）", "日文、法文（可對話）"],
  traits: "親和力高、書生氣質、娃娃臉、肢體靈活",

  intro: [
    "你好，我是林家偉，從劇場開始，已經演戲超過十年，演過超過 30 檔大小製作。",
    "我是一個外表看似溫和，但卻有一個大嗓門的人。擅長聽別人說話，好好地回應。喜歡戶外的陽光，一本書、一台腳踏車，就可以讓我在外頭待上一整天。",
    "這兩三年開始，喜歡在生活裡使用台語，珍惜可以跟父母用台語聊天的機會。"
  ],

  // layout：feature 主照片＋其餘、even 等寬一排、stagger 等寬一高一低
  // 照片欄位：pos 是裁切時對齊的位置（CSS object-position），頭被切到時用 "center top"；video 是影片檔，src 當封面（PDF 用）
  slides: [
    { type: "cover", photo: "cover.jpg" },
    { type: "profile", photo: "profile.jpg" },
    { type: "intro", photo: "intro.jpg" },

    { type: "credits", title: "近期影視作品", background: "bg-screen.jpg", cardSide: "left", tone: "dark", roleLabel: "飾演",
      groups: [
        { label: "戲劇", ids: ["wave-makers-2", "presumed-2", "baiwei", "rent-life", "fame"] },
        { label: "電影", ids: ["beicheng", "liugongzun", "nanrong", "jingxi"] },
        { label: "學生製片", ids: ["float-girl"] },
        { label: "MV", ids: ["bare-mv"], plain: true },
        { label: "廣告", ids: ["dalongmen", "asahi", "pacific", "metro", "huntbyte"], plain: true }
      ] },
    { type: "gallery", title: "羅時豐《巴蕊》MV", subtitle: "飾 白目球場觀眾", layout: "feature",
      photos: [{ src: "bare-1.jpg" }, { src: "bare-2.jpg", pos: "60% 100%" }, { src: "bare-3.jpg" }] },
    { type: "gallery", title: "試鏡帶｜入選特約角色　記者", subtitle: "影集《成名在望》、影集《人生只租不賣》、電影《搜查瑠公圳》", layout: "even",
      photos: [{ src: "reporter-1.jpg" }, { src: "reporter-2.jpg", pos: "right center" }] },

    { type: "credits", title: "近期劇場作品", background: "bg-stage.jpg", photoShift: 200, roleLabel: "製作", showCompany: true,
      groups: [
        { label: "台語戲劇", ids: ["fuhui-2025", "woman-words-2025", "wall-flower-2024", "just-sing-2023"] },
        { label: "戲劇", ids: ["pride-2026", "dogcat-2026", "peter-wolf-2025", "baby-symphony-2025", "aiya-reading-2025", "taiwan-comedy-2025", "thursday-comedy-2024", "love-distance-2024"] },
        { label: "共融劇場", ids: ["sheng-cheng-2026", "sheng-yuyue-2025", "sheng-jiaoyi-2024"] },
        { label: "音樂劇", ids: ["dino", "little-sun-2023", "mouse-trap-2022"] }
      ] },
    { type: "gallery", title: "《赴會》", subtitle: "2025 臺北藝穗節 藝穗精選獎｜築粹劇場｜全台語演出", layout: "feature",
      photos: [
        { src: "fuhui-1.jpg", caption: "飾 知識份子、農民" },
        { src: "fuhui-2.jpg" },
        { src: "fuhui-award.jpg", fit: "contain" }
      ] },
    { type: "gallery", title: "《查某人的話》", subtitle: "2025｜有花製作｜台語演出", layout: "feature",
      photos: [
        { src: "woman-1.jpg", caption: "飾 市場老闆" },
        { src: "woman-2.jpg", caption: "飾 中風老人" },
        { src: "woman-3.jpg", caption: "飾 列車長" }
      ] },
    { type: "gallery", title: "金門戰地音樂劇《捕鼠記》", subtitle: "珩好工作室", layout: "feature",
      photos: [
        { src: "mouse-1.jpg", caption: "飾 軍官", pos: "92% center" },
        { src: "mouse-2.jpg" },
        { src: "mouse-3.jpg" }
      ] },
    { type: "gallery", title: "《愛呀～讀劇之夜》", subtitle: "2025｜PHi 表演工作室", layout: "feature",
      photos: [
        { src: "comedy-1.jpg", caption: "飾 小奶狗男友" },
        { src: "comedy-2.jpg" },
        { src: "comedy-3.jpg", pos: "right center" }
      ] },
    { type: "gallery", title: "音樂劇《恐龍復活了》", subtitle: "AM 創意｜操偶師、操偶指導、歌隊", layout: "feature",
      photos: [
        { src: "dino-1.jpg", caption: "暴龍操偶（側台）" },
        { src: "dino-puppet.jpg", video: "dino-puppet.mp4" }
      ] },

    { type: "gallery", title: "舞蹈經歷", creditIds: ["dingdang-2026", "dingdang-2025", "muse-2022", "hahow-2022"], layout: "feature",
      photos: [{ src: "dance-1.jpg" }, { src: "dance-2.jpg" }] },
    { type: "gallery", title: "模特經歷", creditIds: ["artistry-2024", "fujen-2025"], layout: "feature",
      photos: [{ src: "model-1.jpg" }, { src: "model-2.jpg" }] },

    { type: "gallery", title: "形象參考", layout: "stagger",
      photos: [{ src: "look1-1.jpg" }, { src: "look1-2.jpg", pos: "center top" }, { src: "look1-3.jpg" }, { src: "look1-4.jpg" }] },
    { type: "gallery", title: "形象參考", layout: "stagger",
      photos: [{ src: "look2-1.jpg", pos: "center top" }, { src: "look2-2.jpg" }, { src: "look2-3.jpg" }, { src: "look2-4.jpg", pos: "30% center" }] },
    { type: "gallery", title: "形象參考", layout: "even",
      photos: [{ src: "look3-1.jpg" }, { src: "look3-2.jpg" }, { src: "look3-3.jpg" }] },
    { type: "gallery", title: "形象參考", layout: "even",
      photos: [{ src: "look4-1.jpg" }, { src: "look4-2.jpg" }, { src: "look4-3.jpg" }] },
    { type: "gallery", title: "形象參考", layout: "feature",
      photos: [{ src: "look5-1.jpg" }, { src: "look5-2.jpg", pos: "center" }, { src: "look5-3.jpg" }, { src: "look5-4.jpg" }, { src: "look5-5.jpg" }] },
    { type: "gallery", title: "生活照", layout: "feature",
      photos: [{ src: "life-1.jpg" }, { src: "life-2.jpg" }, { src: "life-3.jpg" }, { src: "life-4.jpg" }, { src: "life-5.jpg" }] },

    { type: "contact", photo: "contact.jpg", qr: [{ src: "qr-line.jpg", label: "LINE" }, { src: "qr-ig.jpg", label: "Instagram" }] }
  ]
};

export default cvDeck;
