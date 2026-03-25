const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample route handling
app.get('/', (req, res) => {
    res.send('Welcome to the Express server!');
});

app.get('/api/example', (req, res) => {
    res.json({ message: 'This is an example route!' });
});

app.post('/api/example', (req, res) => {
    const data = req.body;
    res.json({ message: 'Data received!', data });
});

// 404 handling
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});