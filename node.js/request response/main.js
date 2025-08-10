const express = require('express')
const blog = require('./routes/blog')

const app = express()
const port = 3000

app.use(express.static("public"))  //use of middleware (express.static()) to serve static files
app.use('/blog', blog)

app.get('/', (req, res) => {
  console.log("Hey its a get request")
  res.send('Hii sakshi!')
}).post('/', (req, res) => {
  console.log("Hey its a post request")
  res.send('Hii sakshi post!')
}).put('/', (req, res) => {
  console.log("Hey its a put request")
  res.send('Hii sakshi put!')
})

app.get("/index", (req, res) => {
  console.log("Hey its index")
  res.sendFile('templates/index.html', { root: __dirname })
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

