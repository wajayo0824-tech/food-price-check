const foods = [
  {
    "id": "cabbage",
    "name": "キャベツ",
    "category": "vegetable",
    "unit": "円/kg",
    "accent": "#2f7d57",
    "tint": "#e9f5ee",
    "reference": 233,
    "sourceDate": "令和8年5月25日の週",
    "comment": "公式最新値では平年比94%です。平年より安めで、買い時寄りです。直近は横ばいです。",
    "history": [
      186,
      210,
      221,
      233,
      225,
      223,
      219
    ]
  },
  {
    "id": "negi",
    "name": "ねぎ",
    "category": "vegetable",
    "unit": "円/kg",
    "accent": "#6d9b4f",
    "tint": "#eff6e8",
    "reference": 744,
    "sourceDate": "令和8年5月25日の週",
    "comment": "公式最新値では平年比102%です。ほぼ平年並みです。直近は値上がりしています。",
    "history": [
      671,
      640,
      659,
      662,
      711,
      720,
      759
    ]
  },
  {
    "id": "lettuce",
    "name": "レタス",
    "category": "vegetable",
    "unit": "円/kg",
    "accent": "#4f9d69",
    "tint": "#edf7ef",
    "reference": 402,
    "sourceDate": "令和8年5月25日の週",
    "comment": "公式最新値では平年比101%です。ほぼ平年並みです。直近は横ばいです。",
    "history": [
      416,
      424,
      422,
      435,
      445,
      406,
      406
    ]
  },
  {
    "id": "potato",
    "name": "ばれいしょ",
    "category": "vegetable",
    "unit": "円/kg",
    "accent": "#9a7a3a",
    "tint": "#f5efe3",
    "reference": 549,
    "sourceDate": "令和8年5月25日の週",
    "comment": "公式最新値では平年比107%です。平年よりやや高めです。直近は値下がりしています。",
    "history": [
      626,
      644,
      656,
      669,
      671,
      645,
      587
    ]
  },
  {
    "id": "onion",
    "name": "たまねぎ",
    "category": "vegetable",
    "unit": "円/kg",
    "accent": "#b48120",
    "tint": "#fbf3dd",
    "reference": 362,
    "sourceDate": "令和8年5月25日の週",
    "comment": "公式最新値では平年比116%です。高値圏のため、必要分だけの購入が無難です。直近は値下がりしています。",
    "history": [
      531,
      527,
      521,
      508,
      473,
      456,
      420
    ]
  },
  {
    "id": "cucumber",
    "name": "きゅうり",
    "category": "vegetable",
    "unit": "円/kg",
    "accent": "#2f8e72",
    "tint": "#e7f5f1",
    "reference": 564,
    "sourceDate": "令和8年5月25日の週",
    "comment": "公式最新値では平年比107%です。平年よりやや高めです。直近は値下がりしています。",
    "history": [
      668,
      651,
      649,
      644,
      652,
      634,
      604
    ]
  },
  {
    "id": "tomato",
    "name": "トマト",
    "category": "vegetable",
    "unit": "円/kg",
    "accent": "#bf4f43",
    "tint": "#faece8",
    "reference": 702,
    "sourceDate": "令和8年5月25日の週",
    "comment": "公式最新値では平年比103%です。ほぼ平年並みです。直近は横ばいです。",
    "history": [
      753,
      749,
      748,
      744,
      735,
      732,
      723
    ]
  },
  {
    "id": "carrot",
    "name": "にんじん",
    "category": "vegetable",
    "unit": "円/kg",
    "accent": "#c76b35",
    "tint": "#fbefe8",
    "reference": 482,
    "sourceDate": "令和8年5月25日の週",
    "comment": "公式最新値では平年比99%です。ほぼ平年並みです。直近は値下がりしています。",
    "history": [
      528,
      530,
      538,
      523,
      501,
      491,
      477
    ]
  },
  {
    "id": "beef-import",
    "name": "輸入牛肉",
    "category": "meat",
    "unit": "円/100g",
    "accent": "#8c493f",
    "tint": "#f5e9e6",
    "reference": 339,
    "sourceDate": "令和８年５月（５月11日～５月13日）",
    "comment": "公式最新値では平年比124%、前月比99%です。",
    "history": [
      400,
      405,
      403,
      398,
      412,
      410,
      424,
      420
    ]
  },
  {
    "id": "beef-domestic",
    "name": "国産牛肉",
    "category": "meat",
    "unit": "円/100g",
    "accent": "#7c3f36",
    "tint": "#f3e7e5",
    "reference": 830,
    "sourceDate": "令和８年５月（５月11日～５月13日）",
    "comment": "公式最新値では平年比102%、前月比102%です。",
    "history": [
      829,
      839,
      837,
      817,
      824,
      828,
      830,
      847
    ]
  },
  {
    "id": "pork",
    "name": "豚肉ロース",
    "category": "meat",
    "unit": "円/100g",
    "accent": "#3d6f95",
    "tint": "#e8f1f7",
    "reference": 264,
    "sourceDate": "令和８年５月（５月11日～５月13日）",
    "comment": "公式最新値では平年比108%、前月比101%です。",
    "history": [
      284,
      282,
      280,
      281,
      284,
      283,
      283,
      285
    ]
  },
  {
    "id": "chicken",
    "name": "鶏もも肉",
    "category": "meat",
    "unit": "円/100g",
    "accent": "#7c5b2f",
    "tint": "#f4eee4",
    "reference": 135,
    "sourceDate": "令和８年５月（５月11日～５月13日）",
    "comment": "公式最新値では平年比114%、前月比102%です。",
    "history": [
      149,
      149,
      152,
      152,
      153,
      151,
      151,
      154
    ]
  },
  {
    "id": "egg",
    "name": "鶏卵",
    "category": "meat",
    "unit": "円/10個",
    "accent": "#6b6f3f",
    "tint": "#f1f3df",
    "reference": 255,
    "sourceDate": "令和８年５月（５月11日～５月13日）",
    "comment": "公式最新値では平年比121%、前月比100%です。",
    "history": [
      303,
      304,
      308,
      306,
      308,
      309,
      308,
      309
    ]
  },
  {
    "id": "horse-mackerel",
    "name": "アジ",
    "category": "fish",
    "unit": "円/kg",
    "accent": "#287e91",
    "tint": "#e7f3f5",
    "reference": 599,
    "sourceDate": "2026年6月第1週",
    "comment": "豊洲市場の週間市況に掲載された卸売価格の中値です。スーパーなどの小売価格とは異なります。",
    "history": [
      594,
      583,
      675,
      572,
      551,
      583,
      637
    ]
  },
  {
    "id": "mackerel",
    "name": "サバ",
    "category": "fish",
    "unit": "円/kg",
    "accent": "#426c8c",
    "tint": "#e9f0f5",
    "reference": 549,
    "sourceDate": "2026年6月第1週",
    "comment": "豊洲市場の週間市況に掲載された卸売価格の中値です。スーパーなどの小売価格とは異なります。",
    "history": [
      486,
      626,
      581,
      562,
      497,
      518,
      572
    ]
  },
  {
    "id": "sardine",
    "name": "イワシ",
    "category": "fish",
    "unit": "円/kg",
    "accent": "#4e7897",
    "tint": "#eaf1f6",
    "reference": 395,
    "sourceDate": "2026年6月第1週",
    "comment": "豊洲市場の週間市況に掲載された卸売価格の中値です。スーパーなどの小売価格とは異なります。",
    "history": [
      378,
      389,
      392,
      421,
      400,
      378,
      410
    ]
  },
  {
    "id": "bonito",
    "name": "カツオ",
    "category": "fish",
    "unit": "円/kg",
    "accent": "#73556f",
    "tint": "#f2ebf1",
    "reference": 827,
    "sourceDate": "2026年6月第1週",
    "comment": "豊洲市場の週間市況に掲載された卸売価格の中値です。スーパーなどの小売価格とは異なります。",
    "history": [
      724,
      734,
      864,
      950,
      864
    ]
  },
  {
    "id": "squid",
    "name": "スルメイカ",
    "category": "fish",
    "unit": "円/kg",
    "accent": "#456d71",
    "tint": "#e8f0f0",
    "reference": 1369,
    "sourceDate": "2026年6月第1週",
    "comment": "豊洲市場の週間市況に掲載された卸売価格の中値です。スーパーなどの小売価格とは異なります。",
    "history": [
      1714,
      1427,
      1283,
      1224,
      1493,
      1253,
      1339,
      1220
    ]
  }
];

const categoryLabel = {
  vegetable: "野菜",
  meat: "肉・卵",
  fish: "魚"
};

let activeFilter = "all";

const cards = document.querySelector("#cards");
const search = document.querySelector("#search");
const sort = document.querySelector("#sort");
const dialog = document.querySelector("#detailDialog");
const closeDialog = document.querySelector("#closeDialog");

const shopperUnits = {
  cabbage: { label: "円/kg（約1玉）", grams: 1000, decimals: 0 },
  lettuce: { label: "円/玉（目安）", grams: 400, decimals: 0 },
  negi: { label: "円/本（目安）", grams: 100, decimals: 0 },
  cucumber: { label: "円/本（目安）", grams: 100, decimals: 0 },
  onion: { label: "円/玉（目安）", grams: 200, decimals: 0 },
  tomato: { label: "円/個（目安）", grams: 150, decimals: 0 },
  carrot: { label: "円/本（目安）", grams: 150, decimals: 0 },
  potato: { label: "円/個（目安）", grams: 150, decimals: 0 }
};

function latest(food) {
  return food.history[food.history.length - 1];
}

function displayPrice(food, value = latest(food)) {
  const shopperUnit = shopperUnits[food.id];
  if (shopperUnit) {
    const price = value * (shopperUnit.grams / 1000);
    return shopperUnit.decimals === 0 ? Math.round(price).toLocaleString() : price.toFixed(shopperUnit.decimals);
  }
  return food.category === "vegetable" ? value.toLocaleString() : value.toLocaleString();
}

function displayUnit(food) {
  return shopperUnits[food.id]?.label || food.unit;
}

function officialPriceText(food, value = latest(food)) {
  if (food.category === "vegetable") return `公式単価: ${value.toLocaleString()} 円/kg`;
  if (food.category === "fish") return `豊洲卸売中値: ${value.toLocaleString()} 円/kg`;
  return `公式単価: ${value.toLocaleString()} ${food.unit}`;
}

function pctChange(current, previous) {
  return ((current - previous) / previous) * 100;
}

function foodStats(food) {
  const current = latest(food);
  const previous = food.history[food.history.length - 2];
  const monthBaseIndex = food.category === "meat"
    ? food.history.length - 2
    : Math.max(0, food.history.length - 5);
  const monthBase = food.history[monthBaseIndex];
  const week = pctChange(current, previous);
  const month = pctChange(current, monthBase);
  const vsReference = pctChange(current, food.reference);
  const trend = food.history.slice(-4);
  const rising = trend[3] > trend[0] && week > 0;
  const decision = vsReference <= -4 ? "buy" : rising || vsReference >= 6 ? "wait" : "neutral";

  return { current, week, month, vsReference, decision };
}

function decisionText(decision) {
  if (decision === "buy") return "買い時";
  if (decision === "wait") return "様子見";
  return "通常";
}

function decisionReason(stats) {
  if (stats.decision === "buy") return `平年目安より ${Math.abs(stats.vsReference).toFixed(1)}% 安い`;
  if (stats.decision === "wait") return `平年目安比 ${signedPercent(stats.vsReference)}`;
  return "価格はおおむね平常圏";
}

function referenceLabel(food) {
  return food.category === "fish" ? "直近平均" : "平年目安";
}

function decisionReasonForFood(food, stats) {
  const label = referenceLabel(food);
  if (stats.decision === "buy") return `${label}より ${Math.abs(stats.vsReference).toFixed(1)}% 安い`;
  if (stats.decision === "wait") return `${label}比 ${signedPercent(stats.vsReference)}`;
  return food.category === "fish" ? "直近の価格帯とおおむね同じ" : "価格はおおむね平常圏";
}

function marketLabel(food) {
  return food.category === "fish" ? "豊洲市場・卸売" : "全国平均";
}

function signedPercent(value) {
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(1)}%`;
}

function renderCards() {
  const searchTerm = search.value.trim();
  const isSorted = sort.value !== "default";
  const filtered = foods.filter((food) => {
    const matchesCategory = activeFilter === "all" || food.category === activeFilter;
    const matchesSearch = food.name.includes(searchTerm);
    return matchesCategory && matchesSearch;
  }).sort(sortFoods);

  cards.innerHTML = filtered.map((food) => {
    const stats = foodStats(food);
    return `
      <article class="card" style="--accent:${food.accent}; --tint:${food.tint}">
        <div class="card-top">
          <div>
            <h3>${food.name}</h3>
            <p class="card-meta">${categoryLabel[food.category]} / ${marketLabel(food)}・${food.sourceDate}</p>
          </div>
        </div>
        <div class="price">${displayPrice(food, stats.current)}<small>${displayUnit(food)}</small></div>
        <p class="official-unit">${officialPriceText(food, stats.current)}</p>
        <div class="decision-card ${stats.decision}">
          <span>${decisionText(stats.decision)}</span>
          <small>${decisionReasonForFood(food, stats)}</small>
        </div>
        <div class="badges">
          <span class="badge">${comparisonLabel(food)} ${signedPercent(stats.week)}</span>
          <span class="badge">${secondaryComparisonLabel(food)} ${signedPercent(secondaryComparisonValue(food, stats))}</span>
        </div>
        <canvas class="spark" width="320" height="70" data-spark="${food.id}" aria-hidden="true"></canvas>
        <button class="detail-button" type="button" data-detail="${food.id}">詳細を見る</button>
      </article>
    `;
  }).join("");

  cards.querySelectorAll("[data-detail]").forEach((button) => {
    button.addEventListener("click", () => openDetail(button.dataset.detail));
  });

  drawSparks();
  document.querySelector(".top-picks").hidden = isSorted;
  if (!isSorted) renderTopPicks();
}

function comparisonLabel(food) {
  return food.category === "meat" ? "前月" : "前週";
}

function secondaryComparisonLabel(food) {
  if (food.category === "meat") return "平年";
  if (food.category === "fish") return "直近平均";
  return "前月";
}

function secondaryComparisonValue(food, stats) {
  return food.category === "meat" || food.category === "fish" ? stats.vsReference : stats.month;
}

function sortFoods(a, b) {
  const aStats = foodStats(a);
  const bStats = foodStats(b);

  if (sort.value === "buy") {
    const rank = { buy: 0, neutral: 1, wait: 2 };
    return rank[aStats.decision] - rank[bStats.decision]
      || aStats.vsReference - bStats.vsReference
      || a.name.localeCompare(b.name, "ja");
  }

  if (sort.value === "rise") {
    return bStats.week - aStats.week
      || bStats.month - aStats.month
      || a.name.localeCompare(b.name, "ja");
  }

  return foods.indexOf(a) - foods.indexOf(b);
}

function renderTopPicks() {
  const topPicks = foods
    .filter((food) => food.category !== "fish")
    .map((food) => ({ food, stats: foodStats(food) }))
    .sort((a, b) => a.stats.vsReference - b.stats.vsReference)
    .slice(0, 3);

  document.querySelector("#topPicks").innerHTML = topPicks.map((item, index) => `
    <article class="top-pick" style="--accent:${item.food.accent}; --tint:${item.food.tint}">
      <span class="rank">No.${index + 1}</span>
      <h3>${item.food.name}</h3>
      <strong>${displayPrice(item.food, item.stats.current)}<small>${displayUnit(item.food)}</small></strong>
      <em>${officialPriceText(item.food, item.stats.current)}</em>
      <p>${decisionReasonForFood(item.food, item.stats)}</p>
      <button class="text-button" type="button" data-detail="${item.food.id}">詳細を見る</button>
    </article>
  `).join("");

  document.querySelectorAll("#topPicks [data-detail]").forEach((button) => {
    button.addEventListener("click", () => openDetail(button.dataset.detail));
  });
}

function chartValues(food) {
  const shopperUnit = shopperUnits[food.id];
  if (shopperUnit) return food.history.map((value) => value * (shopperUnit.grams / 1000));
  return food.history;
}

function drawLine(canvas, values, color, compact = false, unit = "円") {
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const pad = compact ? 8 : 42;
  const min = Math.min(...values) * 0.96;
  const max = Math.max(...values) * 1.04;
  const range = max - min || 1;
  const points = values.map((value, index) => {
    const x = pad + (index / (values.length - 1)) * (width - pad * 2);
    const y = height - pad - ((value - min) / range) * (height - pad * 2);
    return { x, y };
  });

  ctx.clearRect(0, 0, width, height);

  if (!compact) {
    ctx.strokeStyle = "#d8e1dd";
    ctx.lineWidth = 1;
    for (let i = 0; i < 4; i += 1) {
      const y = pad + i * ((height - pad * 2) / 3);
      ctx.beginPath();
      ctx.moveTo(pad, y);
      ctx.lineTo(width - pad, y);
      ctx.stroke();
    }
    ctx.fillStyle = "#657276";
    ctx.font = "22px sans-serif";
    const formatAxis = (value) => value < 10 ? value.toFixed(1) : Math.round(value);
    ctx.fillText(`${formatAxis(max)}${unit}`, 8, pad);
    ctx.fillText(`${formatAxis(min)}${unit}`, 8, height - pad + 8);
  }

  ctx.strokeStyle = color;
  ctx.lineWidth = compact ? 4 : 5;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.beginPath();
  points.forEach((point, index) => {
    if (index === 0) ctx.moveTo(point.x, point.y);
    else ctx.lineTo(point.x, point.y);
  });
  ctx.stroke();

  if (!compact) {
    points.forEach((point) => {
      ctx.beginPath();
      ctx.arc(point.x, point.y, 5, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();
      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      ctx.stroke();
    });
    ctx.fillStyle = "#657276";
    ctx.font = "20px sans-serif";
    ["8週前", "6週前", "4週前", "2週前", "直近"].forEach((label, index) => {
      const x = pad + (index / 4) * (width - pad * 2);
      ctx.fillText(label, x - 22, height - 10);
    });
  }
}

function drawSparks() {
  document.querySelectorAll("[data-spark]").forEach((canvas) => {
    const food = foods.find((item) => item.id === canvas.dataset.spark);
    drawLine(canvas, chartValues(food), food.accent, true);
  });
}

function openDetail(id) {
  const food = foods.find((item) => item.id === id);
  const stats = foodStats(food);
  document.querySelector("#detailCategory").textContent = categoryLabel[food.category];
  document.querySelector("#detailName").textContent = food.name;
  document.querySelector("#detailDecision").textContent = `${decisionText(stats.decision)}: ${referenceLabel(food)}比 ${signedPercent(stats.vsReference)}`;
  document.querySelector("#detailPrice").textContent = `${displayPrice(food, stats.current)} ${displayUnit(food)}`;
  document.querySelector("#detailWeek").previousElementSibling.textContent = comparisonLabel(food);
  document.querySelector("#detailWeek").textContent = signedPercent(stats.week);
  document.querySelector("#detailMonth").previousElementSibling.textContent = secondaryComparisonLabel(food);
  document.querySelector("#detailMonth").textContent = signedPercent(secondaryComparisonValue(food, stats));
  document.querySelector("#detailComment").textContent = `${food.sourceDate}の公表値。${officialPriceText(food, stats.current)}。${food.comment}`;
  document.querySelector("#detailDecision").style.background = stats.decision === "wait" ? "#faece8" : stats.decision === "neutral" ? "#fbf3dd" : "#e9f5ee";
  document.querySelector("#detailDecision").style.color = stats.decision === "wait" ? "#bf4f43" : stats.decision === "neutral" ? "#b48120" : "#2f7d57";

  dialog.showModal();
  drawLine(document.querySelector("#priceChart"), chartValues(food), food.accent, false, displayUnit(food).replace("円/", "円/"));
}

document.querySelectorAll(".segment").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".segment").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    renderCards();
  });
});

search.addEventListener("input", (event) => {
  renderCards();
});

sort.addEventListener("change", renderCards);

closeDialog.addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

function formatUpdateDate(value) {
  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Tokyo"
  }).format(new Date(value));
}

async function checkUpdateStatus() {
  const alert = document.querySelector("#updateAlert");
  const title = document.querySelector("#updateAlertTitle");
  const message = document.querySelector("#updateAlertMessage");
  try {
    const response = await fetch(`data-status.json?t=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error("status unavailable");
    const status = await response.json();
    const lastSuccess = status.lastSuccess ? new Date(status.lastSuccess) : null;
    const ageDays = lastSuccess
      ? (Date.now() - lastSuccess.getTime()) / (1000 * 60 * 60 * 24)
      : Infinity;

    if (status.status === "failed") {
      title.textContent = "価格データの自動更新に失敗しました";
      message.textContent = lastSuccess
        ? `現在は、${formatUpdateDate(status.lastSuccess)}に取得できた価格を表示しています。`
        : "現在の価格が最新でない可能性があります。";
      alert.hidden = false;
      return;
    }

    if (!lastSuccess) {
      title.textContent = "価格データの更新日時を確認できません";
      message.textContent = "価格の公表日を各カードで確認してからご利用ください。";
      alert.hidden = false;
      return;
    }

    if (ageDays > 10) {
      title.textContent = "価格データの更新が遅れています";
      message.textContent = `現在は、${formatUpdateDate(status.lastSuccess)}に取得できた価格を表示しています。`;
      alert.hidden = false;
      return;
    }

    document.querySelector(".update-note").textContent =
      `最終自動更新: ${formatUpdateDate(status.lastSuccess)} / 各機関の最新公表値`;
  } catch (error) {
    title.textContent = "更新状況を確認できませんでした";
    message.textContent = "価格の公表日を各カードで確認してからご利用ください。";
    alert.hidden = false;
  }
}

document.querySelector("#feedbackForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const rating = form.get("rating");
  const type = form.get("type");
  const comment = String(form.get("comment") || "").trim() || "コメントなし";
  const title = `[ご意見] ${type}`;
  const body = [
    "## サイトの評価",
    rating,
    "",
    "## ご意見の種類",
    type,
    "",
    "## コメント",
    comment,
    "",
    `閲覧ページ: ${window.location.href}`
  ].join("\n");
  const issueUrl = new URL("https://github.com/wajayo0824-tech/food-price-check/issues/new");
  issueUrl.searchParams.set("title", title);
  issueUrl.searchParams.set("body", body);
  window.open(issueUrl.toString(), "_blank", "noopener,noreferrer");
});

renderCards();
checkUpdateStatus();
