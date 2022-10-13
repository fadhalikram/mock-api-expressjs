const express = require('express')
const app = express()
const port = 3000

const sample = require('./api/sample')
app.use('/sample', sample)

const sample2 = require('./api/sample2')
app.use('/sample2', sample2)

app.listen(port, () => {
    console.log(`App Listening on port ${port}`)
})