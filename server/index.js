var express = require('express')
var bparser = require('body-parser')
var app = express()
var con = require('../contact')

app.use(bparser.json())

app.use('/contact',con)

module.exports = app