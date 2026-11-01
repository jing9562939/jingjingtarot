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

/* 新增商品：複製一組 { } 貼進下面的 [ ]，記得前一組結尾加逗號。範例（請取消註解並改成真實資料）：
   category 要和上面五個分類之一完全相同；colors 可以填多個顏色（名稱要和上面九種顏色相同）
const CR_WORKS = [
    {
        category: "水晶設計款",
        colors: ["粉色", "白色透明"],
        name: "商品名稱",
        price: "NT$ 0000",
        info: "一句簡短資訊，例如：草莓晶・手鍊",
        image: "pink-01.jpg",
        material: "水晶種類與材質",      // 以下三項只會出現在點開商品後的視窗
        concept: "設計理念",
        size: "商品尺寸",
        orderUrl: ""                    // 留空＝LINE 私訊訂購
    },
];
*/
const CR_WORKS = [];

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
