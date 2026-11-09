import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, 'dist');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.txt': 'text/plain; charset=utf-8',
};

// Check if dist exists; if not, log helpful message
if (!fs.existsSync(DIST_DIR)) {
  console.warn(`[WARN] The build directory (${DIST_DIR}) does not exist. Please run 'npm run build' before starting the server.`);
}

const server = http.createServer((req, res) => {
  // Normalize URL to prevent directory traversal
  let safePath = path.normalize(new URL(req.url, `http://${req.headers.host}`).pathname).replace(/^(\.\.[\/\\])+/, '');
  if (safePath === '/' || safePath === '') {
    safePath = '/index.html';
  }

  let filePath = path.join(DIST_DIR, safePath);

  // Check if requested file exists in dist
  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';
      
      // Cache control: assets with hashes can be cached forever, index.html must not be cached
      if (safePath.includes('/assets/')) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      } else {
        res.setHeader('Cache-Control', 'no-cache');
      }

      // HTTP Range Request Support (Essential for iOS Safari & Mobile Video Streaming)
      if (req.headers.range && (ext === '.mp4' || ext === '.webm')) {
        const range = req.headers.range;
        const totalSize = stats.size;
        const parts = range.replace(/bytes=/, '').split('-');
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : totalSize - 1;

        if (start >= totalSize || end >= totalSize) {
          res.writeHead(416, { 'Content-Range': `bytes */${totalSize}` });
          return res.end();
        }

        const chunksize = end - start + 1;
        res.writeHead(206, {
          'Content-Range': `bytes ${start}-${end}/${totalSize}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize,
          'Content-Type': contentType,
        });

        fs.createReadStream(filePath, { start, end }).pipe(res);
        return;
      }

      res.setHeader('Accept-Ranges', 'bytes');
      res.writeHead(200, { 
        'Content-Type': contentType,
        'Content-Length': stats.size 
      });
      fs.createReadStream(filePath).pipe(res);
    } else {
      // Fallback to index.html for Single Page Application client-side routing
      const indexPath = path.join(DIST_DIR, 'index.html');
      fs.stat(indexPath, (indexErr, indexStats) => {
        if (!indexErr && indexStats.isFile()) {
          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-cache' });
          fs.createReadStream(indexPath).pipe(res);
        } else {
          res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
          res.end('404 Not Found - Masperr Web is compiling or index.html is missing. Please ensure "npm run build" has executed.');
        }
      });
    }
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Masperr Web Service successfully running on http://0.0.0.0:${PORT}`);
});
