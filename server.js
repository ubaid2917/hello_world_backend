const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');
require('dotenv').config();

const port = process.env.PORT || 3000;


app.listen(port, function(req,res){
    console.log(`listening on port ${port}`);
})








// // function test(a,b){
// //     return a + b;
// // }
// // var ad = test(10,50)
// // console.log(ad);


// // var add = function(a,b){
// //     return a+ b;
// // }



// // var add = (a,b) =>{return a+b}
// // console.log(add(450,20));


// // iife function 

// // ((a,b)=>{
// //     console.log(a+b);
// // })(40,50) 




// //* Call back function  

// function first(){
//     console.log("first function is calling");
// } 



// function second(a,b, first){
//     var add = a+b;
//     console.log(`res: ${add}`);
//     first();
// }

// second(10,20, first)


const fs = require('fs');
const os = require('os');
const notes = require('./notes');
var _ = require('lodash');
// const user = os.userInfo();
// console.log(user.username);


// console.log(notes.age);


// fs.appendFile('obi.txt', 'Hi ' + user.username + '\n', (err) => {
//     if (err) throw err;
//     console.log('file is created');
// });  

// const arr = [10,20,10,304,'person', 'name', 'age','person', 'name', 'age',];
// const data = _.uniq(arr);
 

// const name = "ubaid";
//  console.log(_.isString(name));
// console.log(data); 



// consvert string into object 

// const strtoObj = '{"firstName": "ubaid", "lastName": "naeem", "age": "20"}';
// const convert = JSON.parse(strtoObj);
// console.log(convert); 


// const objtoStr = {firstName: "ubaid", lastName: "naeem", age: "20"};
// const res = JSON.stringify(objtoStr);
// console.log(res); 
