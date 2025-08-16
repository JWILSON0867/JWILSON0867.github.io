const express = require("express")
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})


const chapterRouter = require('./routes/chapter')
app.use('/chapter', chapterRouter)

app.listen(3000)