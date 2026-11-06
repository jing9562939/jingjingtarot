/* =====================================================
   生命靈數流年｜解讀資料與說明文字（日後只要改這個檔案）
   ─────────────────────────────────────────────────
   ・流年 1～9 各有三個欄位：name（流年名稱）、theme（年度主題）、reading（完整流年解讀）
   ・留空的欄位，前台會顯示「待填寫」的提示，不會顯示假內容
   ・reading 可以寫很長；想分段時，在文字裡用 \n 換行（每個 \n 會變成新的一段）
   ・文字請放在引號 " " 裡面；文字內如果要用雙引號，請改成「 」或寫成 \"
   ・每一組結尾都要有逗號
===================================================== */

const LN_DATA = {
    1: { name: "一元復始", theme: "重新啟動的一年", reading: "" },
    2: { name: "", theme: "", reading: "" },
    3: { name: "", theme: "", reading: "" },
    4: { name: "", theme: "", reading: "" },
    5: { name: "", theme: "", reading: "" },
    6: { name: "", theme: "", reading: "" },
    7: { name: "", theme: "", reading: "" },
    8: { name: "", theme: "", reading: "" },
    9: { name: "", theme: "", reading: "" }
};

/* 尚未填寫時，前台顯示的提示文字 */
const LN_PLACEHOLDER = {
    name: "流年名稱待填寫",
    theme: "年度主題待填寫",
    reading: "流年解讀內容待填寫"
};

/* ---------- 「流年計算邏輯與說明」四個獨立欄位 ----------
   title：標題（可自行修改）　content：內容（留空＝前台自動隱藏這一項）
   內容可以用 \n 分段。四個欄位彼此獨立，可以只填其中幾項。 */
const LN_NOTES = [
    { key: "principle", title: "計算原理",     content: "" },
    { key: "formula",   title: "計算公式",     content: "" },
    { key: "cycle",     title: "流年週期說明", content: "" },
    { key: "extra",     title: "其他補充說明", content: "" }
];

/* ---------- 其他設定 ---------- */
const LN_SETTINGS = {
    // 2/29 出生的人，在沒有 2/29 的平年，生日要算在哪一天？ "0229" = 2/29　"0228" = 2/28
    leapBirthday: "0229",
    // 四個說明欄位全部都還沒填寫時，是否仍顯示「流年計算邏輯與說明」區塊？（預設隱藏）
    showEmptyNotesBlock: false
};
