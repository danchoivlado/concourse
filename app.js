const express = require('express');
const app = express();
const port = 3000;

// Create a basic endpoint
app.get('/', (req, res) => {
  console.log(`Hit`);
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
