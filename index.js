var app = require('./server')


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(5616, () => console.log('Example app listening on port 5616!'))