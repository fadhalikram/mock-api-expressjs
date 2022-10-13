const port = 3000
const express = require('express')
const app = express()

app.use(express.json())

// Routing
const sample = require('./api/sample')
app.use('/sample', sample)

const sample2 = require('./api/sample2')
app.use('/sample2', sample2)

// Port Information
app.listen(port)
