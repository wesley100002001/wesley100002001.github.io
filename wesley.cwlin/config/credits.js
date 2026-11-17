// 演出經歷總表：所有 CV 版本都從這裡挑資料
// check: 有寫的代表資料還沒確認，內容是要確認的事
const credits = {
  awards: [
    { year: 2025, title: "臺北藝穗節 藝穗精選獎", work: "赴會", company: "築粹劇場" }
  ],

  // 劇場（含音樂劇、讀劇、兒童劇、喜劇）
  theater: [
    { id: "pride-2026", year: 2026, title: "The Pride（讀演版）", genre: "讀演", company: "李炯製作／臺藝大畢業製作", venue: "臺藝大八角廳", role: "Philip" },
    { id: "dogcat-2026", year: 2026, title: "犬貓男女（內部讀劇）", genre: "讀劇", company: "綠光劇團", role: "文傑" },
    { id: "sheng-cheng-2026", year: 2026, title: "生藝人計劃《鄭秋月》", genre: "共融劇場", company: "台北康復之友協會", role: "歌隊",
      note: "由劇場演員與精神康復者共演，協助精神疾病去污名化" },
    { id: "treasure-hill-2026", year: 2026, title: "寶藏巖光節 戲劇走讀", genre: "走讀演出", company: "寶藏巖國際藝術村", role: "演員",
      check: "角色名稱？主辦單位是否為寶藏巖國際藝術村？" },
    { id: "dino", year: "2018–2026", title: "恐龍復活了", genre: "音樂劇", company: "AM 創意", role: "操偶師、操偶指導、歌隊",
      note: "2018 首演起參與，含 2024、2025、2026 巡演",
      check: "參與過哪幾年的演出？操偶指導是哪一年開始？" },
    { id: "fuhui-2025", year: 2025, title: "赴會", genre: "台語戲劇", company: "築粹劇場", role: "知識份子、農民", language: "台語",
      award: "臺北藝穗節 藝穗精選獎" },
    { id: "woman-words-2025", year: 2025, title: "查某人的話", genre: "台語戲劇", company: "有花製作", role: "市場老闆、中風老人、列車長", language: "台語" },
    { id: "peter-wolf-2025", year: 2025, title: "彼得與狼", genre: "兒童古典音樂劇場", company: "Muzik Kids 兒童古典音樂節", role: "一人分飾六角（演員、操偶師）" },
    { id: "baby-symphony-2025", year: 2025, title: "寶寶的交響樂", genre: "兒童古典音樂劇場", company: "Muzik Kids 兒童古典音樂節", role: "演員",
      check: "角色或擔任的工作？" },
    { id: "aiya-reading-2025", year: 2025, title: "愛呀～讀劇之夜", genre: "讀劇", company: "PHi 表演工作室", role: "演員",
      check: "角色名稱？（舊 Keynote CV 的劇照圖說寫「小奶狗男友」）" },
    { id: "sheng-yuyue-2025", year: 2025, title: "生藝人計劃《預約真實》", genre: "共融劇場", company: "台北康復之友協會", role: "演員",
      note: "由劇場演員與精神康復者共演，協助精神疾病去污名化",
      check: "舊 Keynote CV 寫 2024，工作坊版本改為 2025" },
    { id: "taiwan-comedy-2025", year: 2025, title: "台式喜劇夜", genre: "喜劇", company: "PHi 表演工作室", role: "演員" },
    { id: "thursday-comedy-2024", year: 2024, title: "週四喜劇夜", genre: "喜劇", company: "PHi 表演工作室", role: "演員",
      check: "舊 Keynote CV 寫 2024 和 2025 都有，工作坊版本只寫 2024" },
    { id: "love-distance-2024", year: 2024, title: "我的愛情距離", genre: "戲劇", company: "PHi 表演工作室", role: "演員",
      check: "角色名稱？" },
    { id: "wall-flower-2024", year: 2024, title: "人權遊台灣《開在壁上的花》", genre: "台語戲劇", company: "海島演劇", role: "僧人、呂沙棠", language: "台語" },
    { id: "sheng-jiaoyi-2024", year: 2024, title: "生藝人計劃《交易時刻》", genre: "共融劇場", company: "台北康復之友協會", role: "演員",
      note: "由劇場演員與精神康復者共演，協助精神疾病去污名化" },
    { id: "just-sing-2023", year: 2023, title: "人權遊台灣《那就唱歌吧—蔡焜霖》", genre: "台語戲劇", company: "海島演劇", role: "多配角", language: "台語",
      director: "林志遠" },
    { id: "little-sun-2023", year: 2023, title: "小太陽", genre: "音樂劇", company: "AM 創意", role: "演員",
      check: "角色名稱？" },
    { id: "mouse-trap-2022", year: 2022, title: "金門戰地音樂劇《捕鼠記》", genre: "音樂劇", company: "珩好工作室", role: "軍官、村民李叔",
      note: "照片拍攝日期為 2022/10/14–15" },
    { year: null, title: "英雄的巡禮之年", genre: "音樂劇", company: "謎思星球劇團", role: "男配角", director: "陳仕弦",
      check: "年份？（2022 年的 CV 列在「近三年」，應為 2019–2022）" },
    { year: null, title: "花園王國", genre: "戲劇", company: "AM 創意", role: "多配角",
      check: "年份？" },
    { year: null, title: "Carousel", genre: "戲劇", company: "AM 創意", role: null,
      check: "年份與角色？" },
    { year: null, title: "衛斯理 × 張代欣 聯合 Showcase", genre: "音樂劇演唱會", company: "林家偉、張代欣", role: "主要表演者",
      check: "年份？" },
    { year: null, title: "無花果", genre: "音樂劇", company: "實踐大學畢業製作", role: "男配角", director: "徐鈺婷",
      check: "年份？" },
    { year: null, title: "遇上一九四一的女孩", genre: "音樂劇", company: "臺灣師大表演藝術研究所", role: "多配角", director: "林川",
      check: "年份？" },
    { year: null, title: "芝加哥 Chicago", genre: "音樂劇", company: "臺灣師大表演藝術研究所", role: "歌隊", director: "葉文豪",
      check: "年份？" },
    { year: null, title: "馬鞍藤的春天", genre: "歌仔戲", company: "臺灣歌仔戲班劇團", role: "男配角", director: "黃駿雄",
      check: "年份？" },
    { year: 2018, title: "李怡君", genre: "戲劇", company: "第 11 屆臺北藝穗節", role: "主角",
      check: "演出團隊名稱？" },
    { year: 2017, title: "你睡了嗎？我醒著", genre: "戲劇", company: "第 10 屆臺北藝穗節", role: "配角",
      check: "演出團隊名稱？" }
  ],

  opera: [
    { year: null, title: "憨第德 Candide", company: "衛武營國家藝術文化中心（開幕季）", role: "歌隊", director: "蔡佩芳",
      check: "年份？（衛武營開幕季為 2018）" },
    { year: null, title: "馬克白、浮士德、Der Hochzeitsbraten", company: "台北歌劇劇場", role: "合唱",
      check: "年份？" },
    { year: null, title: "A Vow to the Underworld Spring", company: "台北歌劇劇場", role: "合唱",
      check: "中文劇名與年份？" },
    { year: null, title: "費黛里奧 Fidelio", company: "臺北市立交響樂團", role: "合唱",
      check: "年份？" }
  ],

  concert: [
    { year: null, title: "Passport to Taiwan 戶外音樂會", company: "交通部觀光局駐紐約辦事處", role: "獨唱", director: "Christian Fletcher",
      check: "年份？" }
  ],

  dance: [
    { id: "dingdang-2026", year: 2026, title: "丁噹演唱會《夜遊》高雄巨蛋", role: "舞者" },
    { id: "dingdang-2025", year: 2025, title: "丁噹演唱會《夜遊》臺北小巨蛋", role: "舞者" },
    { id: "muse-2022", year: 2022, title: "MUSE 美聲音樂會（世紀風華影視金曲饗宴音樂會）", role: "舞者" },
    { id: "hahow-2022", year: 2022, title: "Hahow 商演《Le Jazz Hot》", role: "舞者",
      check: "舊 CV 一份寫尾牙、一份寫春酒，是哪一個？" },
    { year: null, title: "Climax Musical Gala Show", company: "C'Musical", role: "舞者",
      check: "年份？" }
  ],

  tv: [
    { id: "wave-makers-2", year: 2026, title: "人選之人2", role: "曾泉立委助理" },
    { id: "presumed-2", year: 2026, title: "無罪推定2", role: "檢察官" },
    { id: "baiwei", year: 2025, title: "百味人生", role: "胡律師", language: "台語", note: "EP56、EP70" },
    { id: "rent-life", year: 2025, title: "人生只租不賣", role: "記者" },
    { id: "fame", year: 2024, title: "成名在望", role: "記者" },
    { year: null, title: "HIStory3 圈套", company: "LINE TV", role: "小亞的未婚夫",
      check: "年份？" }
  ],

  film: [
    { id: "beicheng", year: 2026, title: "北城百畫帖", role: "坂本部下" },
    { id: "liugongzun", year: 2025, title: "搜查瑠公圳", role: "記者" },
    { id: "nanrong", year: 2025, title: "南榕", role: "記者",
      check: "上映了嗎？（舊 CV 寫待播）" },
    { id: "jingxi", year: 2025, title: "靜曦", role: "山友" },
    { id: "float-girl", year: 2024, title: "鬼才要做花車女郎", genre: "學生製片", role: "邱允爍" }
  ],

  mv: [
    { id: "bare-mv", year: 2024, title: "羅時豐《巴蕊》", role: "白目球場觀眾" }
  ],

  commercial: [
    { id: "dalongmen", year: 2025, title: "桃園大龍門鱻漫遊嘉年華", role: "年輕爸爸" },
    { id: "asahi", year: 2024, title: "Asahi 啤酒", role: "主角同事" },
    { id: "pacific", year: 2024, title: "太平洋房屋 形象廣告", role: "看房租客" },
    { id: "metro", year: 2024, title: "台北捷運 形象影片", role: "通勤民眾" },
    { year: 2024, title: "建案企業形象廣告", role: null,
      check: "品牌名稱與角色？（來自組圖檔名 20240523）" },
    { year: null, title: "Varon 男性臉部保養品", role: null,
      check: "年份與角色？（來自組圖檔名）" },
    { id: "huntbyte", year: 2023, title: "Huntbyte 形象廣告", role: "求職者" }
  ],

  online: [
    { year: null, title: "什麼是 Deepfake？", company: "行政院科技會報辦公室", role: "唐鳳（AI 變臉）",
      check: "年份？" },
    { year: null, title: "民防關我什麼 4", role: "主持人",
      check: "年份？" },
    { year: null, title: "日向映畫 攝影教學系列", role: "男友、面試者",
      check: "年份？" }
  ],

  model: [
    { id: "fujen-2025", year: 2025, title: "輔大畢業展", role: "公用模特" },
    { id: "artistry-2024", year: 2024, title: "Artistry 雅芝彩妝秀", role: "模特" }
  ],

  training: [
    { year: "2014–2017", title: "音樂劇夏日密集班", company: "AM 創意" },
    { year: "2016、2018", title: "音樂劇人才培訓計畫", company: "臺北表演藝術中心" },
    { year: "2017、2019", title: "Linklater 聲音與莎士比亞工作坊", company: null,
      check: "主辦單位？" }
  ],

  education: [
    { title: "國立臺灣大學 資訊管理研究所 碩士" }
  ],

  skills: {
    languages: [
      { level: "母語", items: ["華語", "台語"] },
      { level: "流利", items: ["英語"] },
      { level: "可對話", items: ["日語", "法語"] }
    ],
    voice: ["男高音", "音樂劇演唱", "合唱"],
    movement: ["當代舞", "踢踏（中級）", "爵士（中級）", "芭蕾（初級）", "大型偶操作"],
    instruments: ["鋼琴（初級）", "吉他（初級）"]
  }
};

export default credits;
