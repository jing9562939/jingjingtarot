/* =====================================================
   身心靈創作空間｜商品、課程與學員作品資料（product.html 使用）（日後只要改這個檔案）
   ─────────────────────────────────────────────────
   ・留空的欄位會自動顯示「待補充」，不會顯示假資料
   ・圖片放在 images/crystal/ 資料夾，填檔名即可，例如 image: "moon-01.jpg"
     沒有圖片或檔名填錯時，會顯示「照片待補充」的占位框，不會破圖
   ・按鈕連結（orderUrl / inquiryUrl / bookUrl / signupUrl）留空時，預設連到下方的 LINE
===================================================== */

const CR_LINE = "https://liff.line.me/1645278921-kWRPP32q/?accountId=531eukcu";
const CR_IG   = "https://www.instagram.com/jing9562939/";
const CR_IMG  = "images/crystal/";          // 圖片資料夾

/* ---------- 一、水晶設計：精選作品 ----------
   商品系列（建議分類，可自行增減）。如果還沒有商品，每個系列會先顯示一個占位卡片。 */
const CR_SERIES = ["月光系列", "溫柔系列", "自然系列", "個性系列"];

/* 新增商品：複製一組 { } 貼在 [ ] 裡，記得前一組結尾加逗號。範例（請取消註解並改成真實資料）：
const CR_WORKS = [
    {
        series: "月光系列",
        name: "商品名稱",
        image: "moon-01.jpg",
        material: "水晶種類與材質",
        concept: "設計理念",
        size: "商品尺寸",
        price: "NT$ 0000",
        orderUrl: ""          // 留空＝LINE 私訊訂購
    },
];
*/
const CR_WORKS = [];

/* ---------- 二、水晶 DIY 手作教室 ---------- */
const CR_COURSES = [
    {
        mode: "小班教學",
        name: "水晶手作體驗課",
        intro: "認識水晶與材料，從選珠、配色到手鍊製作，適合初學者的入門體驗。",
        learn: ["認識水晶與材料", "選珠及配色", "手鍊製作", "適合初學者"],
        image: "",                 // 課程照片，例如 "course-a.jpg"
        time: "", price: "", material: "", place: "", limit: "", signup: "",
        inquiryUrl: "", bookUrl: ""
    },
    {
        mode: "一對一預約教學",
        name: "一對一水晶設計教學",
        intro: "從個人喜好出發，選材、搭配並學習手作技法，完成專屬於你的作品。",
        learn: ["個人喜好討論", "水晶選材與搭配", "手作技法教學", "完成個人專屬作品"],
        image: "",
        time: "", price: "", material: "", place: "", limit: "", signup: "",
        inquiryUrl: "", bookUrl: ""
    },
    {
        mode: "團體包班",
        name: "團體包班／手作活動",
        intro: "適合好友、親子或企業團體，依人數與需求安排手作內容。",
        learn: ["好友及團體體驗", "親子手作活動", "企業或團體活動", "依人數及需求安排內容"],
        image: "",
        time: "", price: "", material: "", place: "", limit: "", signup: "",
        inquiryUrl: "", bookUrl: ""
    }
];

/* 學員作品與心得。新增範例： { image: "student-01.jpg", name: "學員暱稱", note: "學員心得" } */
const CR_STUDENT_WORKS = [];

/* ---------- 三、生命靈數教學 ----------
   syllabusConfirmed：確認課綱後改成 true，網頁上的「課綱待確認」標籤就會消失 */
const CR_NUMEROLOGY = {
    syllabusConfirmed: false,
    levels: [
        {
            name: "生命靈數初階班",
            target: "沒有生命靈數基礎、希望從頭開始學習的人。",
            syllabus: ["生命靈數基本概念", "生命靈數計算方式", "數字 1～9 的基本特質", "基礎命盤認識", "個人命盤計算與練習"],
            time: "", price: "", hours: "", material: "",
            signupLabel: "報名初階班", signupUrl: ""
        },
        {
            name: "生命靈數進階班",
            target: "已完成基礎學習，希望進一步學習命盤解析的人。",
            syllabus: ["進階命盤架構", "數字組合與關聯", "綜合數字解析", "實際案例練習", "命盤整合與應用"],
            time: "", price: "", hours: "", material: "",
            signupLabel: "報名進階班", signupUrl: ""
        }
    ],
    package: {
        name: "初階＋進階完整套裝",
        intro: "想完整學習的學員，可以選擇一次報名初階與進階課程。",
        includes: ["包含生命靈數初階班與進階班", "完整學習路徑：由基礎概念到命盤解析", "套裝課程內容：初階課程＋進階課程"],
        hours: "", price: "", time: "", material: "",
        signupLabel: "報名完整套裝", signupUrl: ""
    }
};
