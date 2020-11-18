import express from 'express';

const app = express();

const port = 3000;

let database: Array<string> = [];

for (let i = 0; i < 10; i += 1) {
  database.push(
    Math.random().toString(36).substring(2, 15)
      + Math.random().toString(36).substring(2, 15),
  );
}

console.log('\n\nEndpoint access: \n'
+ 'To say hello: /api/hello\n'
+ 'Get all data GET: /api/data-all\n'
+ 'Get specific GET: /api/data-get/:id\n'
+ 'Create new elements POST: /api/data-create\n'
+ 'Delete element POST: /api/data-delete\n'
+ 'Update element POST: /api/data-update\n\n');

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
