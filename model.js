export const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const draft = {
  revenue: [55500, 63000, 69500, 80500, 68000, 73500, 60000, 91500, 113500, 124000, 103500, 87000],
  direct: [-4000, -5955, -6250, -6152.5, -4805, -8025, -1125, -4550, -13770, -8497.5, -10240, -3825],
  opex: [-24725, -24225, -24225, -25525, -23225, -22725, -21225, -22225, -24725, -25225, -24225, -22725],
};

export const priorYear = {
  revenue: [44500, 50500, 45500, 63500, 43000, 29000, 15000, 33000, 60500, 65500, 40000, 38500],
};

export const programRegister = [
  ["Jan", "Standard corporate", 2, 20, 5000, 2250, 2750], ["Jan", "Open", 1, 18, 3600, 1750, 1850],
  ["Feb", "Large corporate", 2, 60, 10200, 4860, 5340], ["Feb", "Standard corporate", 1, 18, 2500, 1095, 1405],
  ["Mar", "Standard corporate", 2, 20, 5000, 2550, 2450], ["Mar", "Open", 2, 20, 10000, 3700, 6300],
  ["Apr", "Standard corporate", 2, 20, 5000, 2500, 2500], ["Apr", "Large corporate", 1, 90, 7050, 3652.5, 3397.5],
  ["May", "Standard corporate", 1, 20, 2500, 1125, 1375], ["May", "Open", 2, 18, 10800, 3680, 7120],
  ["Jun", "Standard corporate", 2, 20, 5000, 2650, 2350], ["Jun", "Large corporate", 2, 70, 11500, 5375, 6125],
  ["Jul", "Standard corporate", 1, 20, 2500, 1125, 1375], ["Aug", "Standard corporate", 2, 20, 5000, 2750, 2250],
  ["Aug", "Open", 1, 20, 4000, 1800, 2200], ["Sep", "Large corporate", 2, 100, 15400, 7420, 7980],
  ["Sep", "Standard corporate", 2, 20, 5000, 2550, 2450], ["Sep", "Open", 2, 20, 12000, 3800, 8200],
  ["Oct", "Standard corporate", 2, 20, 5000, 2250, 2750], ["Oct", "Large corporate", 1, 50, 4450, 2547.5, 1902.5],
  ["Oct", "Open", 2, 20, 10000, 3700, 6300], ["Nov", "Standard corporate", 2, 20, 5000, 2500, 2500],
  ["Nov", "Large corporate", 2, 80, 12800, 5940, 6860], ["Nov", "Open", 1, 20, 4000, 1800, 2200],
  ["Dec", "Standard corporate", 1, 20, 2500, 1125, 1375], ["Dec", "Standard corporate", 2, 20, 5000, 2700, 2300],
];

export const sources = [
  { id: "brief", title: "00 Start Here Budget Review Assignment.docx", detail: "Part 1 and Part 2 rules; keep original evidence unchanged." },
  { id: "background", title: "01 Company Background and Management Targets.docx", detail: "Prices, delivery rules, open-program catalogue and board requirements." },
  { id: "workbook", title: "02 Historical Results and Draft P&L Budget.xlsx", detail: "Sheets 01–08 source budgets; Sheets 09–13 are the review model surfaces." },
  { id: "sales", title: "03 Sales Director Plan.docx", detail: "Sales cycle, revenue timing and sales-team claims." },
  { id: "marketing", title: "04 Marketing Director Plan.docx", detail: "Campaign calendar and untested conversion assumptions." },
  { id: "ops", title: "05 Operations and Trainer Plan.docx", detail: "Trainer, assistant, room and event-capacity constraints." },
  { id: "hr", title: "06 HR and Personnel Plan.docx", detail: "Employment dates, Ella's ramp-up and Anna's exit." },
  { id: "finance", title: "07 Finance and Administration Notes.docx", detail: "Supplier rate increase, fit-out depreciation and operating-cost rules." },
];

export const initialState = { part1: [
  { name: "Correct revenue to named programme register", owner: "Sales / Operations", category: "Revenue evidence", source: "05 Draft Sales Budget!D23:P23; 06 Draft Program Plan!J34", rationale: "The draft assigns €989,500 of delivery-month revenue, while named programmes support €170,800.", revenueDelta: [-46900, -50300, -54500, -68450, -54700, -57000, -57500, -82500, -81100, -104550, -81700, -79500], directDelta: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], opexDelta: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
  { name: "Apply external instructor rate increase", owner: "Finance / Operations", category: "Direct cost", source: "07 Finance and Administration Notes · Supplier rates; 06 Draft Program Plan!K7:M32", rationale: "The supplier rate rises 10% from 1 July; the register still uses €700 per day.", revenueDelta: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], directDelta: [0, 0, 0, 0, 0, 0, 0, 0, -525, -367.5, -420, -210], opexDelta: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
  { name: "Add training-studio depreciation", owner: "Finance", category: "Operating expense", source: "07 Finance and Administration Notes · Supplier rates and operating costs", rationale: "The €25,000 fit-out is ready 1 May and depreciates over five years.", revenueDelta: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], directDelta: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], opexDelta: [0, 0, 0, -0, -416.67, -416.67, -416.67, -416.67, -416.67, -416.67, -416.67, -416.67] },
  { name: "Correct sales payroll for Anna exit and Ella start", owner: "HR / Finance", category: "Timing", source: "06 HR and Personnel Plan · Person status; 07 Draft Operating Costs!D7:O10", rationale: "Anna leaves 28 February and Ella starts 1 May, so March and April have three active sales employees.", revenueDelta: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], directDelta: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], opexDelta: [0, 0, 2250, 2250, 0, 0, 0, 0, 0, 0, 0, 0] },
], decisions: [] };

export function sum(values) { return values.reduce((total, value) => total + (Number.isFinite(value) ? value : 0), 0); }
export function addSeries(...series) { return MONTHS.map((_, i) => series.reduce((total, values) => total + (Number(values?.[i]) || 0), 0)); }
export function monthIndex(month) { return MONTHS.indexOf(month); }
export function blankSeries() { return MONTHS.map(() => null); }

export function calculatePnl({ revenue = blankSeries(), direct = blankSeries(), opex = blankSeries() }) {
  const complete = revenue.every(Number.isFinite) && direct.every(Number.isFinite) && opex.every(Number.isFinite);
  const contribution = addSeries(revenue, direct);
  const operatingProfit = addSeries(contribution, opex);
  return { revenue, direct, contribution, opex, operatingProfit, complete, totals: {
    revenue: sum(revenue), direct: sum(direct), contribution: sum(contribution), opex: sum(opex), operatingProfit: sum(operatingProfit),
  }};
}

export function buildFromDraft(corrections = [], approvedDecisions = []) {
  const p1 = calculatePnl({
    revenue: addSeries(draft.revenue, corrections.map((item) => item.revenueDelta || blankSeries())),
    direct: addSeries(draft.direct, corrections.map((item) => item.directDelta || blankSeries())),
    opex: addSeries(draft.opex, corrections.map((item) => item.opexDelta || blankSeries())),
  });
  const p2 = calculatePnl({
    revenue: addSeries(p1.revenue, approvedDecisions.map((item) => item.revenueDelta || blankSeries())),
    direct: addSeries(p1.direct, approvedDecisions.map((item) => item.directDelta || blankSeries())),
    opex: addSeries(p1.opex, approvedDecisions.map((item) => item.opexDelta || blankSeries())),
  });
  return { p1, p2 };
}

export function priceProgram(type, days, participants, seatPrice = 0) {
  if (type === "Open") return participants * seatPrice;
  if (type === "Large corporate") return (2500 + Math.ceil(Math.max(0, participants - 20) / 10) * 650) * days;
  return 2500 * days;
}

export function directCost({ type, days, participants, month, travel = 0, seatPrice = 0 }) {
  const rate = monthIndex(month) >= 6 ? 770 : 700;
  const assistants = type === "Large corporate" ? Math.max(0, Math.ceil(participants / 30) - 1) : 0;
  const revenue = priceProgram(type, days, participants, seatPrice);
  return { instructor: days * rate, assistants: assistants * days * rate * 0.25, venue: type === "Open" ? days * 600 : 0, materials: days * participants * 15, commission: revenue * 0.05, travel, total: days * rate + assistants * days * rate * 0.25 + (type === "Open" ? days * 600 : 0) + days * participants * 15 + revenue * 0.05 + travel };
}

export function capacityChecks(events = programRegister) {
  const senior = { Jan: 12, Feb: 12, Mar: 12, Apr: 12, May: 12, Jun: 12, Jul: 6, Aug: 8, Sep: 14, Oct: 14, Nov: 12, Dec: 12 };
  const days = Object.fromEntries(MONTHS.map((month) => [month, 0]));
  const assistants = Object.fromEntries(MONTHS.map((month) => [month, 0]));
  const openSeats = Object.fromEntries(MONTHS.map((month) => [month, 0]));
  events.forEach(([month, type, deliveryDays, participants]) => {
    days[month] += deliveryDays;
    assistants[month] += type === "Large corporate" ? deliveryDays * Math.max(0, Math.ceil(participants / 30) - 1) : 0;
    openSeats[month] += type === "Open" ? participants : 0;
  });
  return MONTHS.map((month) => ({ month, days: days[month], capacity: senior[month], trainerOver: days[month] > senior[month], assistantDays: assistants[month], assistantOver: assistants[month] > 4, openSeats: openSeats[month], openOver: openSeats[month] > 20 }));
}

export function validateDecision(item) {
  const required = ["action", "startMonth", "cost", "effect", "evidence", "revenueDelta", "directDelta", "opexDelta"];
  const missing = required.filter((key) => item[key] === undefined || item[key] === null || item[key] === "");
  return { valid: missing.length === 0, missing };
}
