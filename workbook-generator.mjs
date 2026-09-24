const MONTH_COLUMNS = ["D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"];

export const EXPORT_GENERATOR_VERSION = "2026-09-24-formula-fix";

export const EXPORT_CALCULATION_SETTINGS = {
  calcMode: "auto",
  fullCalcOnLoad: true,
  forceFullCalc: true,
};

export const CAPACITY_CACHE = {
  trainerDays: [3, 3, 4, 3, 3, 4, 1, 3, 6, 5, 5, 3, 43],
  openSeats: [18, 0, 20, 0, 18, 0, 0, 20, 20, 20, 20, 0, 136],
};

export function trainerDaysFormula(monthColumn) {
  return "=SUMIF('06 Draft Program Plan'!$B$7:$B$32," + monthColumn + "$4,'06 Draft Program Plan'!$F$7:$F$32)";
}

export function openSeatsFormula(monthColumn) {
  return "=SUMIFS('06 Draft Program Plan'!$G$7:$G$32,'06 Draft Program Plan'!$B$7:$B$32," + monthColumn + "$4,'06 Draft Program Plan'!$E$7:$E$32,\"Open\")";
}

export function buildExportFormulaPlan() {
  return {
    sheets: {
      "10 Corrected Budget": {
        trainerDays: MONTH_COLUMNS.map(trainerDaysFormula),
        openSeats: MONTH_COLUMNS.map(openSeatsFormula),
        trainerDaysFyTotal: "=SUM(D12:O12)",
        openSeatsFyTotal: "=SUM(D13:O13)",
      },
      "12 Management Budget": {
        trainerDays: MONTH_COLUMNS.map(trainerDaysFormula),
        openSeats: MONTH_COLUMNS.map(openSeatsFormula),
        trainerDaysFyTotal: "=SUM(D12:O12)",
        openSeatsFyTotal: "=SUM(D13:O13)",
      },
    },
    clearContents: ["09 Assumption Review!B25:B26"],
  };
}

export function validateExportGenerator() {
  const plan = buildExportFormulaPlan();
  for (const sheet of ["10 Corrected Budget", "12 Management Budget"]) {
    const formulas = plan.sheets[sheet];
    if (formulas.trainerDays[0] !== trainerDaysFormula("D") ||
        formulas.trainerDays[11] !== trainerDaysFormula("O") ||
        formulas.openSeats[0] !== openSeatsFormula("D") ||
        formulas.openSeats[11] !== openSeatsFormula("O") ||
        formulas.trainerDaysFyTotal !== "=SUM(D12:O12)" ||
        formulas.openSeatsFyTotal !== "=SUM(D13:O13)") {
      throw new Error("Invalid export formula plan for " + sheet);
    }
  }
  if (!plan.clearContents.includes("09 Assumption Review!B25:B26")) {
    throw new Error("Export generator must clear 09 Assumption Review!B25:B26");
  }
  if (EXPORT_CALCULATION_SETTINGS.calcMode !== "auto" ||
      EXPORT_CALCULATION_SETTINGS.fullCalcOnLoad !== true ||
      EXPORT_CALCULATION_SETTINGS.forceFullCalc !== true ||
      CAPACITY_CACHE.trainerDays.at(-1) !== 43 ||
      CAPACITY_CACHE.openSeats.at(-1) !== 136) {
    throw new Error("Export generator calculation metadata or capacity cache is invalid");
  }
  return plan;
}

