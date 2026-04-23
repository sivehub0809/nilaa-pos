const translations = {
  en: {
    eyebrow: "Daily shop overview",
    heroTitle: "A simple dashboard for your shop",
    heroText: "See sales, cash, and stock in one place. Built to feel clear, calm, and easy on a phone.",
    todaySales: "Today sales",
    salesHint: "12 orders closed today",
    cashOnHand: "Cash on hand",
    cashHint: "After expenses and payout",
    lowStock: "Low stock items",
    stockHint: "Time to refill soon",
    salesSection: "Sales",
    quickSale: "Quick sale",
    fastEntry: "Fast entry",
    productName: "Product name",
    qty: "Qty",
    price: "Price",
    addSale: "Add sale",
    recentSales: "Recent sales",
    moneySection: "Money in / out",
    cashFlow: "Cash flow",
    easyTrack: "Easy track",
    entryNote: "Note",
    amount: "Amount",
    type: "Type",
    moneyIn: "Money in",
    moneyOut: "Money out",
    saveEntry: "Save entry",
    todayEntries: "Today entries",
    stockSection: "Stock count",
    simpleStock: "Simple stock watch",
    mobileReady: "Mobile ready",
    itemName: "Item name",
    currentCount: "Current count",
    warningAt: "Warning at",
    updateStock: "Update stock",
    productPlaceholder: "Example: Iced Coffee",
    notePlaceholder: "Example: Rent or supplier",
    stockPlaceholder: "Example: Milk",
    inStock: "Good level",
    lowLevel: "Low stock",
    itemsLeft: "left",
    alertAt: "Alert at",
    saleSaved: "Sale added",
    cashSaved: "Cash entry saved",
    stockSaved: "Stock updated"
  },
  km: {
    eyebrow: "មើលហាងប្រចាំថ្ងៃ",
    heroTitle: "ផ្ទាំងគ្រប់គ្រងសាមញ្ញសម្រាប់ហាងរបស់អ្នក",
    heroText: "មើលការលក់ លុយចូលចេញ និងស្តុកនៅកន្លែងតែមួយ។ ងាយមើល ងាយចុច និងស្រួលប្រើលើទូរស័ព្ទ។",
    todaySales: "ការលក់ថ្ងៃនេះ",
    salesHint: "បានបិទការបញ្ជាទិញ 12 មុខថ្ងៃនេះ",
    cashOnHand: "លុយនៅដៃ",
    cashHint: "បន្ទាប់ពីចំណាយ និងដកចេញ",
    lowStock: "ទំនិញជិតអស់",
    stockHint: "គួរបំពេញស្តុកឆាប់ៗ",
    salesSection: "ការលក់",
    quickSale: "បញ្ចូលការលក់រហ័ស",
    fastEntry: "ចូលទិន្នន័យលឿន",
    productName: "ឈ្មោះទំនិញ",
    qty: "ចំនួន",
    price: "តម្លៃ",
    addSale: "បន្ថែមការលក់",
    recentSales: "ការលក់ថ្មីៗ",
    moneySection: "លុយចូល / ចេញ",
    cashFlow: "ចរន្តសាច់ប្រាក់",
    easyTrack: "តាមដានងាយ",
    entryNote: "កំណត់សម្គាល់",
    amount: "ចំនួនទឹកប្រាក់",
    type: "ប្រភេទ",
    moneyIn: "លុយចូល",
    moneyOut: "លុយចេញ",
    saveEntry: "រក្សាទុក",
    todayEntries: "បញ្ជីថ្ងៃនេះ",
    stockSection: "ចំនួនស្តុក",
    simpleStock: "មើលស្តុកបែបសាមញ្ញ",
    mobileReady: "សមសម្រាប់ទូរស័ព្ទ",
    itemName: "ឈ្មោះមុខទំនិញ",
    currentCount: "ចំនួនបច្ចុប្បន្ន",
    warningAt: "ជូនដំណឹងនៅពេល",
    updateStock: "អាប់ដេតស្តុក",
    productPlaceholder: "ឧទាហរណ៍: កាហ្វេទឹកកក",
    notePlaceholder: "ឧទាហរណ៍: ថ្លៃជួល ឬ អ្នកផ្គត់ផ្គង់",
    stockPlaceholder: "ឧទាហរណ៍: ទឹកដោះគោ",
    inStock: "នៅគ្រប់គ្រាន់",
    lowLevel: "ស្តុកទាប",
    itemsLeft: "នៅសល់",
    alertAt: "ជូនដំណឹងត្រឹម",
    saleSaved: "បានបន្ថែមការលក់",
    cashSaved: "បានរក្សាទុកបញ្ជីលុយ",
    stockSaved: "បានអាប់ដេតស្តុក"
  }
};

const defaultState = {
  language: "en",
  sales: [
    { name: "Iced Coffee", qty: 2, price: 2.5 },
    { name: "Bread", qty: 4, price: 1.2 },
    { name: "Noodles", qty: 3, price: 1.8 }
  ],
  cashEntries: [
    { note: "Morning sales", amount: 920, type: "in" },
    { note: "Supplier payment", amount: 320, type: "out" },
    { note: "Delivery fee", amount: 260, type: "out" }
  ],
  stock: [
    { name: "Milk", count: 14, limit: 10 },
    { name: "Sugar", count: 9, limit: 10 },
    { name: "Coffee Beans", count: 21, limit: 8 }
  ]
};

const savedState = JSON.parse(localStorage.getItem("shopflow-dashboard") || "null");
const state = savedState
  ? {
      language: savedState.language || defaultState.language,
      sales: Array.isArray(savedState.sales) ? savedState.sales : defaultState.sales,
      cashEntries: Array.isArray(savedState.cashEntries) ? savedState.cashEntries : defaultState.cashEntries,
      stock: Array.isArray(savedState.stock) ? savedState.stock : defaultState.stock
    }
  : { ...defaultState };

function persistState() {
  localStorage.setItem("shopflow-dashboard", JSON.stringify(state));
}

const formatCurrency = (value) =>
  new Intl.NumberFormat(state.language === "km" ? "km-KH" : "en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2
  }).format(value);

function renderText() {
  document.documentElement.lang = state.language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[state.language][key]) {
      element.textContent = translations[state.language][key];
    }
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (translations[state.language][key]) {
      element.placeholder = translations[state.language][key];
    }
  });
  document.getElementById("languageToggle").textContent = state.language === "en" ? "ខ្មែរ" : "English";
}

function renderSummary() {
  const todaySalesTotal = state.sales.reduce((sum, item) => sum + item.qty * item.price, 0);
  const moneyInTotal = state.cashEntries
    .filter((entry) => entry.type === "in")
    .reduce((sum, entry) => sum + entry.amount, 0);
  const moneyOutTotal = state.cashEntries
    .filter((entry) => entry.type === "out")
    .reduce((sum, entry) => sum + entry.amount, 0);
  const lowStockCount = state.stock.filter((item) => item.count <= item.limit).length;

  document.getElementById("todaySalesValue").textContent = formatCurrency(todaySalesTotal);
  document.getElementById("cashOnHandValue").textContent = formatCurrency(moneyInTotal - moneyOutTotal);
  document.getElementById("lowStockValue").textContent = String(lowStockCount).padStart(2, "0");
  document.getElementById("moneyInValue").textContent = formatCurrency(moneyInTotal);
  document.getElementById("moneyOutValue").textContent = formatCurrency(moneyOutTotal);
}

function renderSales() {
  const salesList = document.getElementById("salesList");
  salesList.innerHTML = state.sales
    .slice()
    .reverse()
    .map(
      (item) => `
        <article class="list-row">
          <div>
            <strong>${item.name}</strong>
            <small>${item.qty} x ${formatCurrency(item.price)}</small>
          </div>
          <strong>${formatCurrency(item.qty * item.price)}</strong>
        </article>
      `
    )
    .join("");
  document.getElementById("salesCount").textContent = state.sales.length;
}

function renderCashEntries() {
  const cashList = document.getElementById("cashList");
  cashList.innerHTML = state.cashEntries
    .slice()
    .reverse()
    .map((entry) => {
      const sign = entry.type === "in" ? "+" : "-";
      const color = entry.type === "in" ? "var(--green)" : "var(--red)";
      return `
        <article class="list-row">
          <div>
            <strong>${entry.note}</strong>
            <small>${translations[state.language][entry.type === "in" ? "moneyIn" : "moneyOut"]}</small>
          </div>
          <strong style="color:${color}">${sign}${formatCurrency(entry.amount)}</strong>
        </article>
      `;
    })
    .join("");
  document.getElementById("cashCount").textContent = state.cashEntries.length;
}

function renderStock() {
  const stockGrid = document.getElementById("stockGrid");
  stockGrid.innerHTML = state.stock
    .map((item) => {
      const low = item.count <= item.limit;
      return `
        <article class="stock-item">
          <div class="stock-item__top">
            <div>
              <strong>${item.name}</strong>
              <span>${item.count} ${translations[state.language].itemsLeft}</span>
            </div>
            <span class="badge ${low ? "badge--low" : "badge--ok"}">
              ${translations[state.language][low ? "lowLevel" : "inStock"]}
            </span>
          </div>
          <div class="stock-item__bottom">
            <span>${translations[state.language].alertAt}: ${item.limit}</span>
            <strong>${item.count}</strong>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderApp() {
  renderText();
  renderSummary();
  renderSales();
  renderCashEntries();
  renderStock();
}

document.getElementById("languageToggle").addEventListener("click", () => {
  state.language = state.language === "en" ? "km" : "en";
  persistState();
  renderApp();
});

document.getElementById("saleForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("saleProduct").value.trim();
  const qty = Number(document.getElementById("saleQty").value);
  const price = Number(document.getElementById("salePrice").value);
  if (!name || qty <= 0 || price < 0) return;
  state.sales.push({ name, qty, price });
  persistState();
  renderApp();
});

document.getElementById("cashForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const note = document.getElementById("cashNote").value.trim();
  const amount = Number(document.getElementById("cashAmount").value);
  const type = document.getElementById("cashType").value;
  if (!note || amount < 0) return;
  state.cashEntries.push({ note, amount, type });
  persistState();
  renderApp();
});

document.getElementById("stockForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("stockName").value.trim();
  const count = Number(document.getElementById("stockCount").value);
  const limit = Number(document.getElementById("stockLimit").value);
  if (!name || count < 0 || limit < 0) return;

  const existing = state.stock.find((item) => item.name.toLowerCase() === name.toLowerCase());
  if (existing) {
    existing.count = count;
    existing.limit = limit;
  } else {
    state.stock.push({ name, count, limit });
  }
  persistState();
  renderApp();
});

renderApp();
