/* =====================================================
   行程資料｜首頁「最新公告」與「課程訊息」共用（只要改這個檔案）
   ─────────────────────────────────────────────────
   type（類別，共四種）：
     "market" = 擺攤　"study" = 進修　"teach" = 教學　"trip" = 員工旅遊
   start ：開始日期，格式 "YYYY-MM-DD"
   end   ：結束日期（單日可省略）
   title ：標題（寫成和類別同名也可以，例如 "擺攤"）
   time  ：時間（選填）　place：地點（選填）
   note  ：備註（選填）　link ：詳情或預約連結（選填）
   ※ 新增一筆：複製一組 { } 貼在後面，並在前一組結尾加逗號。
   ※ 沒有列出的日期，就是可以線上預約的日子。
===================================================== */

const START_MONTH = "2026-11";     // 課程訊息頁一次顯示兩個月，從這個月份開始（"YYYY-MM"）

const TYPE_NAME = { market: "擺攤", study: "進修", teach: "教學", trip: "員工旅遊" };

const EVENTS = [
    {
        start: "2026-11-07", end: "2026-11-08", type: "study",
        title: "進修",
        time: "10:00–18:00", place: "文化大學推廣教育",
        note: "歡迎來找靖靖聊聊，透過塔羅與水晶，陪你看看最近的自己。",
        link: ""
    },
    {
        start: "2026-11-21", end: "2026-11-22", type: "market",
        title: "擺攤",
        time: "12:00–18:00", place: "美麗島捷運站",
        note: "歡迎線上預約。",
        link: "https://cal.com/jing9562939/15min?user=jing9562939"
    },
    {
        start: "2026-11-28", end: "2026-11-29", type: "study",
        title: "進修",
        time: "10:00–18:00", place: "文化大學推廣教育",
        note: "歡迎線上預約。",
        link: "https://cal.com/jing9562939/15min?user=jing9562939"
    },
    {
        start: "2026-12-19", end: "2026-12-20", type: "market",
        title: "擺攤",
        time: "12:00–18:00", place: "美麗島捷運站",
        note: "水晶DIY體驗 Part II。",
        link: "https://cal.com/jing9562939/15min?user=jing9562939"
    },
    {
        start: "2026-12-21", end: "2026-12-27", type: "trip",
        title: "員工旅遊",
        time: "08:00–00:00", place: "員工旅遊",
        note: "歡迎線上預約。",
        link: "https://cal.com/jing9562939/15min?user=jing9562939"
    },
];


/* ---------- 以下為共用小工具，不需要修改 ---------- */
const WEEK = ["日", "一", "二", "三", "四", "五", "六"];
const pad2 = n => String(n).padStart(2, "0");
const keyOf = (y, m, d) => y + "-" + pad2(m + 1) + "-" + pad2(d);
const parseDate = str => { const [y, m, d] = str.split("-").map(Number); return new Date(y, m - 1, d); };
const esc = t => String(t == null ? "" : t).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const todayKey = (() => { const t = new Date(); return keyOf(t.getFullYear(), t.getMonth(), t.getDate()); })();

function fmtRange(ev) {
    const s = parseDate(ev.start), e = parseDate(ev.end || ev.start);
    const f = d => (d.getMonth() + 1) + "/" + d.getDate() + "（" + WEEK[d.getDay()] + "）";
    return ev.end && ev.end !== ev.start ? f(s) + " – " + f(e) : f(s);
}
// 標題與類別同名時（例如「擺攤」），改用地點當標題，避免重複
function headline(ev) {
    return ev.title === TYPE_NAME[ev.type] ? (ev.place || ev.title) : ev.title;
}
// 尚未結束的行程，依日期排序
function upcomingEvents(limit) {
    return EVENTS.filter(ev => (ev.end || ev.start) >= todayKey)
                 .sort((a, b) => a.start.localeCompare(b.start))
                 .slice(0, limit || 99);
}
