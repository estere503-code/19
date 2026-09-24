import { cpSync, mkdirSync } from "node:fs";
import { join } from "node:path";
const root = process.cwd();
const dist = join(root, "dist");
mkdirSync(dist, { recursive: true });
for (const file of ["app.js", "model.js", "styles.css"]) cpSync(join(root, "src", file), join(dist, file));
cpSync(join(root, "public", "favicon.svg"), join(dist, "favicon.svg"));
console.log(`Built static site to ${dist}`);
