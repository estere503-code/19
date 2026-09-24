import http from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join } from "node:path";
const root = join(process.cwd(), "dist");
const types = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml" };
http.createServer(async (request, response) => {
  const name = request.url === "/" ? "index.html" : request.url.slice(1);
  try { const data = await readFile(join(root, name)); response.writeHead(200, { "content-type": types[extname(name)] || "application/octet-stream" }); response.end(data); }
  catch { response.writeHead(404); response.end("Not found"); }
}).listen(4173, "127.0.0.1", () => console.log("Bad Boss budget review running at http://127.0.0.1:4173"));
