var cors = require('cors')

const express = require('express')
const app = express()
app.use(cors())
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello helo World!')
})

app.get('/newEndpoint', (req, res) => {
    res.send('this is my new end point!')
  })

  app.get('/booklist', (req, res) => {
    res.json([{
        "id": 1,
        "bookname": "spiderman",
        "author": "sudalai",
        "category": "Adventure",
        "status" : "1",
        "duedate": "15-08-2021"
        },
        {
        "id": 2,
        "bookname": "superman",
        "author": "Ramesh",
        "category": "comics",
        "status" : "1",
        "duedate": "15-08-2021"
      }, {
        "id": 3,
        "bookname": "batman",
        "author": "sudalai",
        "category": "mystery",
        "status" : "2",
        "duedate": "15-08-2021"
        }, {
          "id": 4,
        "bookname": "ironman",
        "author": "Rajesh",
        "category": "comics",
        "status" : "2",
        "duedate": "15-08-2021"

        }
      ]);
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})