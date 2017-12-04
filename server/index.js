var express = require('express')
var app = express()
var con = require('../contact')
app.use('/contact',con)

module.exports = app