import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

app.get('/api/hello', (req, res) => {
  res.send('Oh hi there :D');
});

app.get('/api/data-all', (req, res) => {
  res.send(database);
});

});

interface RequestData {
  data: Array<string>;
}

app.post('/api/data-create', (req, res) => {
  /*
    Request params:
    ---------------------
    JSON object:
      {
        data: Array<string>;
      }
  */

  const { data } = req.body as RequestData;

  data.map((el) => database.push(el));
  res.send('Success');
});

});

// app.get("/api", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
