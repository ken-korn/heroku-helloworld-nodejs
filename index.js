const app = require('express')();

app.set('views', './views');
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Hello world',
        message: 'This is my site!'
    })
})

app.listen('3000');