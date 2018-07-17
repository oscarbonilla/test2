const express = require('express')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 3001

app.use(express.static(path.join(__dirname,'frontend','public')));
app.set('views', path.join(__dirname, 'frontend'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  //res.send('Hello World!')
  res.render('pages/index');
})

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
})