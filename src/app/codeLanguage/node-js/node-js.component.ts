import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-node-js',
  templateUrl: './node-js.component.html',
  styleUrls: ['./node-js.component.css']
})
export class NodeJSComponent implements OnInit {

  Nodejs= `
step 1 > folder > npm init > package.json file create
{
  "name": "api",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Pradeep Bhosle",
  "license": "ISC"
}
  `;

  NodejsA= `
  step 2 > Intall all pakages express, mysql, body-parser
  npm install --save express mysql body-parser
  Intall packages 
  package.json file <br>
  {
    "name": "api",
    "version": "1.0.0",
    "description": "",
    "main": "app.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "Pradeep Bhosle",
    "license": "ISC",
    "dependencies": {
      "body-parser": "^1.18.3",
      "express": "^4.16.3",
      "mysql": "^2.16.0"
    }
  then create mysql database
  create a file app.js
const express = require('express');
const mysql = require('mysql');
const bodyparser = require('body-parser');


var app = express();

//setting 
app.set('port', process.env.PORT || 3000);

//middleware
app.use(bodyparser.json());Or //this is also acess json data or formate 
app.use(express.json()); // data display on json formate

app.use(function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
})

//mysql Connection 
code here


//get all database data
Code here

//get id one data database data
Code here

//Delete data database data
Code here

//Insert data database data
Code here

//Update data database data
Code Here

//starting server
app.listen(app.get('port'),()=>{

	console.log('Serve On Port', app.get('port'));
})

console display: Server on Port 3000 

  `; 
  
NodejsB = `
//mysql Connection
var mysqlConnection =mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'nodeapi'
});

//mysql connection is connected or error check
mysqlConnection.connect((err)=>{
	if(!err)
		{
			console.log("Database connection sucessfully");
		}

	else{
			console.log('Database Connection failed:' +JSON.stringify(err, undefined, 2))	
		}	
})

then npm install -g nodemon
nodemon is a tool that helps develop node.js based applications 
by automatically restarting the node application when file changes in the directory are detected.
 
package.json file
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
},
 replace 
 "scripts": {
  "start": "nodemon app.js"
 },

 cammand npm start
`;

NodejsC =`
//get all database data
Note: function (res, req) : res.send(rows) error not a function 
correct is first req then res function (req, res)
app.get('/', function(req, res){

	mysqlConnection.query('SELECT * FROM employee', function(err, rows, fields){

		if(!err)
			 {
				console.log(rows);
        res.send(rows); or
        res.json(rows)
			 }

		else {
				console.log(err);
			 }		
	})

});
`;

NodejsD =`
//get id one data database data
app.get('/:emp_id', function(req, res){

	mysqlConnection.query('SELECT * FROM employee WHERE emp_id = ?',[req.params.emp_id], function(err, rows, fields){

		if(!err)
			 {
				console.log(rows);
				res.send(rows);
			 }

		else {
				console.log(err);
			 }		
	})

});
`;
NodejsE =`
//Delete data database data
app.delete('/:emp_id', function(req, res){

	mysqlConnection.query('DELETE FROM employee WHERE emp_id = ?',[req.params.emp_id], function(err, rows, fields){

		if(!err)
			 {
				
				res.send('Deleted SucessFully');
			 }

		else {
				console.log(err);
			 }		
	})

});
`;

NodejsF =`
//Insert data database data
app.post('/add', function(req, res){

	mysqlConnection.query('INSERT INTO employee( emp_name, role_id, dep_id, doj ) VALUES(?,?,?,?)',
		[ req.body.emp_name, req.body.role_id, req.body.dep_id, req.body.doj], function(err, rows, fields){

		if(!err)
			 {
				
				res.send(rows);
			 }

		else {
				console.log(err);
			 }		
	})

});

postman
Content-Type:application/json
body > row > JSON (application/json) 
`;

NodejsG =`
//Update data database data
app.put('/add', function(req, res){

	mysqlConnection.query('UPDATE employee SET emp_name=?, role_id=?, dep_id=?, doj=? WHERE emp_id =?',
		[ req.body.emp_name, req.body.role_id, req.body.dep_id, req.body.doj, req.body.emp_id], function(err, rows, fields){

		if(!err)
			 {
				
				res.send(rows);
			 }

		else {
				console.log(err);
			 }		
	})

});
`;



  constructor() { }

  ngOnInit() {
  }

}
