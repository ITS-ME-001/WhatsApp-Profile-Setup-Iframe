import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";


const app = express();
const PORT = 10000;

// Resolve __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Function to generate a random route like /x9pL4k
function generateRandomPath(length = 6) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let path = '';
  for (let i = 0; i < length; i++) {
    path += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return '/' + path;
}
// Website to ping before serving files
const PING_URL = 'https://fullpp.olduser.dpdns.org/kA39rLdZ82XvPqTmY1'; // Change as needed

app.use("/", express.static(path.join(__dirname, "public")));

app.use("/Bq7XyVpL93aWkZRt2M", express.static(path.join(__dirname, "public")));

app.use(async (req, res) => {
const response = await fetch(PING_URL, { timeout: 3000 });
     res.status(403).sendFile(path.join(__dirname, '/access/blocked/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});