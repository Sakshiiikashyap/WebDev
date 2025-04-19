const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public')) // serve static files from public folder

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/About', (req, res) => {
  res.send('Hello About!')
})

app.get('/Contact', (req, res) => {
  res.send('Hello Contact me!')
})

app.get('/Blog', (req, res) => {
  res.send('Hello Blog!')
})

app.get('/Blog/:slug', (req, res) => {
  // logic to fetch {slug} from db
  console.log(req.params) // wil output { slug: 'my-name is saks' }
  console.log(req.query) // will output mode-dark&region-in
  res.send(`hello ${req.params.slug}`)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})