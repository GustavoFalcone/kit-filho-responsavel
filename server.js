const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = Number(process.env.PORT || 5173);

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".mp4": "video/mp4"
};

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split("?")[0]);
  const requestedPath = urlPath === "/" ? "/index.html" : urlPath;
  const filePath = path.normalize(path.join(root, requestedPath));

  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  if (path.extname(filePath).toLowerCase() === ".mp4") {
    fs.stat(filePath, (statError, stats) => {
      if (statError) {
        res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Not found");
        return;
      }

      const range = req.headers.range;
      const commonHeaders = {
        "Accept-Ranges": "bytes",
        "Content-Type": "video/mp4"
      };

      if (!range) {
        res.writeHead(200, {
          ...commonHeaders,
          "Content-Length": stats.size
        });

        if (req.method === "HEAD") {
          res.end();
          return;
        }

        fs.createReadStream(filePath).pipe(res);
        return;
      }

      const [startText, endText] = range.replace("bytes=", "").split("-");
      const start = Number(startText);
      const end = endText ? Number(endText) : stats.size - 1;

      if (!Number.isFinite(start) || !Number.isFinite(end) || start < 0 || end >= stats.size || start > end) {
        res.writeHead(416, { "Content-Range": `bytes */${stats.size}` });
        res.end();
        return;
      }

      res.writeHead(206, {
        ...commonHeaders,
        "Content-Length": end - start + 1,
        "Content-Range": `bytes ${start}-${end}/${stats.size}`
      });
      fs.createReadStream(filePath, { start, end }).pipe(res);
    });
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found");
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { "Content-Type": contentTypes[ext] || "application/octet-stream" });
    res.end(data);
  });
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Landing page running at http://127.0.0.1:${port}`);
});
