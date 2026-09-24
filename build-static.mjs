import { cpSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { validateExportGenerator } from "./workbook-generator.mjs";

const root = process.cwd();
const dist = join(root, "dist");
mkdirSync(dist, { recursive: true });
validateExportGenerator();
for (const file of ["app.js", "model.js", "styles.css", "index.html", "favicon.svg", "completed_budget_review.xlsx"]) cpSync(join(root, file), join(dist, file));
console.log(`Built static site to ${dist}`);
