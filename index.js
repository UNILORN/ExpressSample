
'use strict'

var port = process.env.PORT || 3000

var express  = require('express');
var app = express();
var router = require('./router.js')

app.use(router)



app.listen(port,()=>{
	console.log('port:',port)
})
