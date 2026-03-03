const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/status', (req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
});

// Serve the static site (index.html, css, js, image/, music/)
app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
