// const {req,res} = require('express');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({
    extended:true
}))

app.get('/', function(req, res){
    // res.send('<h1>Hello World</h1>');
    res.sendFile(__dirname + '/index.html')
})
app.post('/',function(req,res){
    // console.log(req.body)
var num1 = req.body.num1;
var num2 = req.body.num2;

var result = number(num1)+  number(num2);

res.send("Result is: " + result)
})

app.listen(3000,function(){
    console.log('Express server listening on port:3000')
})