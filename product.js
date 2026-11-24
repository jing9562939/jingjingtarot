/* =====================================================
   JingJing Tarot 身心靈產品頁｜商品、課程、學員作品資料（日後只要改這個檔案）
   ─────────────────────────────────────────────────
   ・留空的欄位會顯示「待補充」，不會出現假資料
   ・圖片放在 images/crystal/ 資料夾，這裡只填檔名，例如 image: "pink-01.jpg"
     沒有圖片或檔名填錯時，會顯示「照片待補充」的占位框，不會破圖
   ・按鈕連結（orderUrl / inquiryUrl / bookUrl / signupUrl）留空時，預設連到下方的 LINE
===================================================== */

const CR_LINE = "https://liff.line.me/1645278921-kWRPP32q/?accountId=531eukcu";
const CR_IG   = "https://www.instagram.com/jing9562939/";
const CR_IMG  = "images/crystal/";

/* 頁面主視覺與三個入口的圖片（檔名放在 images/crystal/） */
const CR_PAGE_IMAGES = { hero: "hero.jpg", shop: "entry-shop.jpg", diy: "entry-diy.jpg", course: "entry-course.jpg", diyMain: "diy-main.jpg" };

/* ---------- 一、水晶商品：五個分類、九種顏色 ---------- */
const CR_CATEGORIES = ["水晶素串", "水晶設計款", "水晶擺件", "水晶項鍊", "水晶戒指"];
const CR_COLORS = [
    ["粉色", "#F2C6D0"], ["紫色", "#B9A3D6"], ["綠色", "#A9C8A3"], ["藍色", "#9DBFE0"], ["黃色", "#F0DC8E"],
    ["茶棕色", "#A47B5C"], ["白色透明", "#F6F6F2"], ["黑色", "#3A3A3A"], ["紅橘色", "#E5744F"]
];

/* 商品狀態（status 欄位）：只能填下面三種之一，留空＝不顯示狀態標籤
   "現貨"   → 照片左上角顯示「現貨」，按鈕是「LINE 私訊訂購」
   "預購"   → 顯示「預購」，按鈕是「LINE 私訊預購」
   "已售出" → 顯示「已售出」，照片變淡並自動排到最後面，按鈕改成「詢問類似款式」
   篩選列「狀態」只有「全部、現貨、預購」三項；已售出的商品保留在頁面上，只在「全部」裡看得到。 */
const CR_STATUS = ["現貨", "預購", "已售出"];

/* ---------- 左側篩選欄（分類名稱與商品數量由商品資料自動計算，沒有商品的選項不會顯示） ----------
   商品類型：「水晶素串」→純粹素串、「水晶設計款」→設計款（由 category 自動對應）。
             其餘三項要在商品加上 tags，例如 tags: ["收藏級精品", "人氣熱銷"]（可不填、可多個）。
   配戴類型：「水晶項鍊」「水晶戒指」「水晶擺件」→桌上擺件（由 category 自動對應）；手鍊與手串不用填。 */
const CR_FILTER_TYPES = ["純粹素串", "設計款", "收藏級精品", "限量商品／孤品", "人氣熱銷"];
const CR_FILTER_WEAR = ["水晶項鍊", "水晶戒指", "桌上擺件"];
const CR_CATEGORY_MAP = {
    "水晶素串": { type: "純粹素串" },
    "水晶設計款": { type: "設計款" },
    "水晶項鍊": { wear: "水晶項鍊" },
    "水晶戒指": { wear: "水晶戒指" },
    "水晶擺件": { wear: "桌上擺件" }
};
/* 水晶 DIY 手作：點選後直接打開對應課程詳情（mode 要和下方 CR_COURSES 的 mode 完全相同） */
const CR_FILTER_DIY = [
    { label: "一對一", mode: "一對一預約教學" },
    { label: "小班", mode: "小班教學" },
    { label: "團體包班", mode: "團體包班" }
];

/* 新增商品：複製一組 { } 貼進下面的 [ ]，記得前一組結尾加逗號。範例（請取消註解並改成真實資料）：
   category 要和上面五個分類之一完全相同；colors 可以填多個顏色（名稱要和上面九種顏色相同）
const CR_WORKS = [
    {
        category: "水晶設計款",
        colors: ["粉色", "白色透明"],
        name: "商品名稱",
        price: "NT$ 0000",
        status: "現貨",                  // 現貨／預購／已售出（可留空）
        info: "一句簡短資訊，例如：草莓晶・手鍊",
        image: "pink-01.jpg",
        material: "水晶種類與材質",      // 以下三項只會出現在點開商品後的視窗
        concept: "設計理念",
        size: "商品尺寸",
        orderUrl: ""                    // 留空＝LINE 私訊訂購
    },
];
*/
const CR_WORKS = [
    {
        category: "水晶素串",
        colors: ["紅橘色"],
        name: "精品紅幽靈",
        price: "NT$ 7,900",
        status: "現貨",
        info: "紅幽靈",
        image: "red-01.jpg",
        material: "紅幽靈",
        concept: "內在沉澱與外在行動力的平衡",
        size: "手圍 16cm",
        tags: ["收藏級精品"],
        orderUrl: ""
    },
    {
        category: "水晶設計款",
        colors: ["粉色", "綠色", "白色透明"],
        name: "春日溫柔",
        price: "NT$ 1,680",
        status: "現貨",
        info: "紫馬粉、葡萄石・手鍊",
        image: "pink-01.jpg",
        material: "白水晶兔、紫馬粉、葡萄石",
        concept: "",
        size: "手圍 15cm",
        orderUrl: ""
    },
    {
        category: "水晶設計款",
        colors: ["粉色", "紅橘色"],
        name: "熾愛與守護",
        price: "NT$ 2,490",
        status: "現貨",
        info: "朱砂、紫馬粉・手鍊",
        image: "pink-02.jpg",
        material: "朱砂、紫馬粉、金飾配件",
        concept: "極致的深紅，遇到溫柔的冰粉",
        size: "手圍 15cm",
        tags: ["限量商品／孤品"],
        orderUrl: ""
    },
    {
        category: "水晶設計款",
        colors: ["綠色", "粉色"],
        name: "春日微光",
        price: "NT$ 1,190",
        status: "現貨",
        info: "葡萄石、紫馬粉・手鍊",
        image: "green-01.jpg",
        material: "葡萄石、紫馬粉、黃塔晶",
        concept: "願你在每個日常裡被溫柔以待",
        size: "手圍 15cm",
        orderUrl: ""
    }
];

/* ---------- 購買須知（顯示在商品區下方，可展開收合） ----------
   CR_NOTICE_HEAD：最上方的標題與開場白（thanks／intro 留空就不顯示）
   CR_NOTICE：每一項須知
     no：編號（例如 "01"）　title：標題
     groups：分組，每組有 label（小標，例如「現貨」，不需要小標就留空 ""）與 items（條列內容，一行一條）
   要新增或修改，直接改下面的文字就好，記得每一行結尾的逗號與引號不要刪掉。 */
const CR_NOTICE_HEAD = {
    en: "PLEASE READ BEFORE ORDERING",
    thanks: "感謝您的支持與喜愛 ♡",
    intro: "下單前請先詳閱以下購買須知，完成訂購即表示同意相關規範。"
};
const CR_NOTICE = [
    { no: "01", title: "現貨與預購", groups: [
        { label: "現貨", items: ["現貨商品依訂單順序安排出貨。", "商品數量有限，售完為止。"] },
        { label: "預購", items: ["預購商品需等待追加或製作。", "到貨時間依商品頁面公告為主。"] }
    ] },
    { no: "02", title: "付款方式", groups: [
        { label: "", items: ["付款方式：轉帳或LinePay。", "請於指定時間內完成付款。", "逾期未付款，訂單將視情況取消。"] }
    ] },
    { no: "03", title: "出貨與取貨", groups: [
        { label: "", items: ["出貨方式：7-11、蝦皮店到店。", "配送時間依物流作業為準。", "商品寄出後請留意物流配送資訊。"] }
    ] },
    { no: "04", title: "客製製作時間", groups: [
        { label: "", items: ["客製商品皆依訂單順序安排製作。", "製作時間：工作天3~5天 (不含假日)。", "客製商品無法臨時更改或取消，請確認需求後再下單。"] }
    ] },
    { no: "05", title: "退換貨說明", groups: [
        { label: "", items: ["客製化商品因依個人需求製作，恕不接受退換貨。", "如收到商品有瑕疵或寄錯，請儘速與我們聯繫。", "其他退換貨事宜，依相關法令規定辦理。"] }
    ] }
];

/* ---------- 二、水晶 DIY 手作教室 ---------- */
const CR_DIY = {
    forms: ["一對一", "小班", "團體包班"],
    intro: "不只是欣賞水晶，更親手創造屬於自己的美好。",
    inquiryUrl: "", bookUrl: ""
};
/* 課程詳情（點「查看課程詳情」後顯示） */
const CR_COURSES = [
    {
        mode: "小班教學", name: "水晶手作體驗課",
        intro: "認識水晶與材料，從選珠、配色到手鍊製作，適合初學者的入門體驗。",
        learn: ["認識水晶與材料", "選珠及配色", "手鍊製作", "適合初學者"],
        time: "", price: "", material: "", place: "", limit: "", signup: ""
    },
    {
        mode: "一對一預約教學", name: "一對一水晶設計教學",
        intro: "從個人喜好出發，選材、搭配並學習手作技法，完成專屬於你的作品。",
        learn: ["個人喜好討論", "水晶選材與搭配", "手作技法教學", "完成個人專屬作品"],
        time: "", price: "", material: "", place: "", limit: "", signup: ""
    },
    {
        mode: "團體包班", name: "團體包班／手作活動",
        intro: "適合好友、親子或企業團體，依人數與需求安排手作內容。",
        learn: ["好友及團體體驗", "親子手作活動", "企業或團體活動", "依人數及需求安排內容"],
        time: "", price: "", material: "", place: "", limit: "", signup: ""
    }
];
/* 學員作品與心得。新增範例： { image: "student-01.jpg", name: "學員暱稱", note: "學員心得" } */
const CR_STUDENT_WORKS = [];

/* ---------- 三、其他課程：生命靈數 ----------
   syllabusConfirmed：確認課綱後改成 true，網頁上的「課綱待確認」標籤就會消失 */
const CR_NUMEROLOGY = {
    intro: "從數字開始，探索自己，認識生命的不同面向。",
    syllabusConfirmed: false,
    courses: [
        {
            key: "basic", name: "初階課程", short: "沒有基礎，也能從頭開始學習",
            target: "沒有生命靈數基礎、希望從頭開始學習的人。",
            syllabus: ["生命靈數基本概念", "生命靈數計算方式", "數字 1～9 的基本特質", "基礎命盤認識", "個人命盤計算與練習"],
            time: "", price: "", hours: "", material: "",
            signupLabel: "報名初階課程", signupUrl: ""
        },
        {
            key: "advanced", name: "進階課程", short: "已有基礎，進一步學習命盤解析",
            target: "已完成基礎學習，希望進一步學習命盤解析的人。",
            syllabus: ["進階命盤架構", "數字組合與關聯", "綜合數字解析", "實際案例練習", "命盤整合與應用"],
            time: "", price: "", hours: "", material: "",
            signupLabel: "報名進階課程", signupUrl: ""
        },
        {
            key: "package", name: "初階＋進階完整課程", short: "一次完成初階與進階，完整學習路徑",
            target: "想完整學習的學員，可以選擇一次報名初階與進階課程。",
            syllabus: ["包含生命靈數初階課程與進階課程", "完整學習路徑：由基礎概念到命盤解析", "套裝課程內容：初階課程＋進階課程"],
            time: "", price: "", hours: "", material: "",
            signupLabel: "報名完整課程", signupUrl: ""
        }
    ]
};
