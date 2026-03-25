const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the APEX Scanner backend!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
