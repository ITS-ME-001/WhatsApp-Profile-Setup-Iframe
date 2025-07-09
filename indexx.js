const express = require('express');
const path = require('path');
const fetch = require('node-fetch'); // npm install node-fetch

const app = express();
const PORT = process.env.PORT || 8080;

// Website to ping before serving files
const PING_URL = 'https://example.com'; // Change this to your desired site

// Middleware to ping before serving static files
app.use(async (req, res, next) => {
  try {
    const response = await fetch(PING_URL, { timeout: 3000 });

    if (!response.ok) {
      throw new Error('Site not reachable');
    }

    next(); // Proceed to serve static files
  } catch (err) {
    res.status(503).sendFile(path.join(__dirname, 'public/offline.html')); // Custom error page
  }
});

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});