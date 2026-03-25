const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to APEX Scanner', status: 'online' });
});
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
});
app.post('/api/scan', (req, res) => {
    res.json({ message: 'Scan ready' });
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server on ${port}`));
module.exports = app;