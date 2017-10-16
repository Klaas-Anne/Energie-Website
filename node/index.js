const express = require('express')
const app = express()
const port = 4000;

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', (request, response) => {
    response.send('Hello from Express!')
});


app.get('/register', require('./routes').index);

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
})