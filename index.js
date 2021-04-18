const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000


express()
.use(express.static(path.join(__dirname, 'public')))
.use(express.static(path.join(__dirname + '/images')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .get('/blog', (req, res) => res.render('pages/blog'))
  .get('/contact', (req, res) => res.render('pages/contact'))
  .get('/projects', (req, res) => res.render('pages/projects'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


