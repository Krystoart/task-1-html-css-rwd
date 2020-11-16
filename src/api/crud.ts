import express from 'express';

const app = express();

const port = 3000;

// app.get('/api/')

app.get('/api/data', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/data-all', (req, res) => {
  res.send('Hello World!');
});

app.post('/api/data/{:id}', (req, res) => {
  // res.send("Hello World!");
});

// app.get("/api", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
