import { Component, OnInit } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'app-nodejsapi',
  templateUrl: './nodejsapi.component.html',
  styleUrls: ['./nodejsapi.component.css']
})
export class NodejsapiComponent implements OnInit {
  response: HighlightResult;

  nodejs = `
  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
`;
nodejsruninstall = 'nvm install node';
nodejsrunuse = `nvm use node
node -v
npm -v
`;
npminit = 'npm init';
packagejson = `{
  "name": "api",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "start": "nodemon app.js"
  },
  "author": "Pradeep Bhosle",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.18.3",
    "express": "^4.16.4",
    "multer": "^1.4.1",
    "mysql": "^2.16.0"
  },
  "devDependencies": {
    "cors": "^2.8.5",
    "nodemon": "^1.18.7"
  }
}
`;
dependencies = `
npm install express --save-dev
npm install body-parder --save-dev
npm install mysql --save-dev
npm install multer --save-dev
npm install cors --save-dev
npm install nodemon --save  // running server with changes
`;
requireddepen = `
const express = require('express');
const mysql = require('mysql');
const bodyparser = require('body-parser');
var cors = require('cors'); //crose breowser origin
const multer = require('multer'); // file, img etc upload
`;
appjsfileall = `
const express = require('express');
const mysql = require('mysql');
const bodyparser = require('body-parser');
var cors = require('cors'); //crose breowser origin
const multer = require('multer'); // file upload

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../portfolio/src/assets/portfolio_img/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

var upload = multer({ storage: storage });


var app = express();
app.use(cors());

//setting
app.set('port', process.env.PORT || 3000);

//middleware
app.use(bodyparser.json()); //this is also acess json data or formate
/*app.use(express.json()); // data display on json formate*/

app.use(function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

//mysql Connection
var mysqlConnection =mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'info071011'
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


//  get admin data
app.get('/api', function(req, res){

	mysqlConnection.query('SELECT * FROM admin_mst', function(err, rows, fields){

		if(!err)
			 {
				res.send(rows);
			 }

		else {
				console.log(err);
			 }
	})

});

// get admin data using id
app.get('/api/:admin_id', function(req, res){

	mysqlConnection.query('SELECT * FROM admin_mst WHERE admin_id= ?',[req.params.admin_id] , function(err, rows, fields){

		if(!err)
			 {
				res.send(rows);
			 }

		else {
				console.log(err);
			 }
	})

});

// Delete Admin data
app.delete('/api/:admin_id', function(req, res){

	mysqlConnection.query('DELETE FROM admin_mst WHERE admin_id= ?',[req.params.admin_id] , function(err, rows, fields){

		if(!err)
			 {
				res.send('Deleted SucessFully !');
			 }

		else {
				console.log(err);
			 }
	})

});

// post Or Insert Admin data
app.post('/app/insert', function(req, res){
mysqlConnection.query('INSERT INTO admin_mst( full_name, email_id, mobile_no, date, admin_img, username, password, gender ) VALUES(?,?,?,?,?,?,?,?)',
[ req.body.full_name, req.body.email_id, req.body.mobile_no, req.body.date,req.body.admin_img, req.body.username, req.body.password, req.body.gender], function(err, rows, fields){

		if(!err)
			 {

				res.send('Insert Admin SucessFully');
			 }

		else {
				console.log(err);
			 }
	})

});

// Edit Or put Admin data
app.put('/app/insert', function(req, res){
mysqlConnection.query(' UPDATE admin_mst SET full_name=?, email_id=?, mobile_no=?, date= ?, admin_img=?, username=?, password=?, gender=?  WHERE admin_id =? ',
[ req.body.full_name, req.body.email_id, req.body.mobile_no, req.body.date,req.body.admin_img, req.body.username, req.body.password, req.body.gender, req.body.admin_id], function(err, rows, fields){

		if(!err)
			 {

				res.send('Update Admin SucessFully');
			 }

		else {
				console.log(err);
			 }
	})

});




app.post('/logapi', function(req, res){
mysqlConnection.query(' SELECT username, password FROM admin_mst WHERE username = ? and password = ? ', 
		[req.body.username, req.body.password ], function(error, rows){

		if(rows != null && rows.length > 0 )
			 {

				res.write('true');

			 }

		else {

				res.write('false');

			 }
			 res.end();
	})

});



app.get('/pages', function(req, res){

	mysqlConnection.query('SELECT * FROM pages_mst ', function(err, rows, fields){

		if(!err)
			 {
	res.send(rows);
			// res.write('true');
			 }

		else {
				console.log(err);
				// res.write('false');
			 }

	}
)
});


//get one page from page id
app.get('/pages/:page_id', function(req, res){

	mysqlConnection.query('SELECT * FROM pages_mst WHERE page_id = ?',[req.params.page_id], function(err, rows, fields){

		if(!err)
			 {
				// console.log(rows);
				res.send(rows);
			 }

		else {
				console.log(err);
			 }
	})

});

//Insert pages database page
app.post('/pages/add', function(req, res){

	mysqlConnection.query('INSERT INTO pages_mst( page_title, page_content, date ) VALUES(?,?,?)',
		[ req.body.page_title, req.body.page_content, req.body.date], function(err, rows, fields){

		if(!err)
			 {
    res.send(rows);
			 }

		else {
				console.log(err);
			 }
	})

});

//Update pages database page
app.put('/pages/update/', function(req, res){

	mysqlConnection.query('UPDATE pages_mst SET page_title=?, page_content=?, date=? WHERE page_id =?',
		[ req.body.page_title, req.body.page_content, req.body.date, req.body.page_id], function(err, rows, fields){

		if(!err)
			 {
				res.send(rows);
			 }

		else {
				console.log(err);
			 }
	})

});

//Delete pages database page
app.delete('/pages/delete/:page_id', function(req, res){

	mysqlConnection.query('DELETE FROM pages_mst WHERE page_id = ?',[req.params.page_id], function(err, rows, fields){

		if(!err)
			 {
				res.send('Deleted SucessFully');
			 }

		else {
				console.log(err);
			 }
	})

});

//get all category
app.get('/category', function(req, res){

	mysqlConnection.query('SELECT * from category_mst', function(err, rows, fields){

		if(!err)
			 {
			res.send(rows);
			// res.write('true');
			 }

		else {
				console.log(err);
				// res.write('false');
			 }
	} )
});



// portfolio section

//get all portfolio 
app.get('/portfolio', function(req, res){
mysqlConnection.query('SELECT * from portfolio_mst RIGHT JOIN category_mst ON portfolio_mst.cat_id = category_mst.cat_id', function(err, rows, fields){

		if(!err)
			 {
			res.send(rows);
			// res.write('true');
			 }

		else {
				console.log(err);
				// res.write('false');
			 }
	} )
});

// get id portfolio
app.get('/portfolio/:port_id', function(req, res){
mysqlConnection.query('SELECT * from portfolio_mst RIGHT JOIN category_mst ON portfolio_mst.cat_id = category_mst.cat_id WHERE port_id = ?',[req.params.port_id], function(err, rows, fields){

		if(!err)
			 {
				// console.log(rows);
				res.send(rows);
			 }

		else {
				console.log(err);
			 }
	})

});



//Update portfolio
app.put('/portfolio_mst/update/', upload.single('url'), function(req, res){
mysqlConnection.query('UPDATE portfolio_mst SET cat_id=?, caption=?, url=?, client=?, date=?, description=?    WHERE port_id =?',
[ req.body.cat_id, req.body.caption, req.file.originalname, req.body.client, req.body.date, req.body.description, req.body.port_id], function(err, rows, fields){

		if(!err)
			 {
				res.send(rows);
			 }

		else {
				console.log(err);
			 }
	})

});

//Insert pages database page
app.post('/add/portfolio_mst', upload.single('url'),  function(req, res){
mysqlConnection.query('INSERT INTO portfolio_mst( cat_id, caption, url, client, date, skill, description, visit_website ) VALUES(?,?,?,?,?,?,?,?)',
		[ req.body.cat_id, req.body.caption, req.file.originalname, req.body.client, 
		req.body.date, req.body.skill, req.body.description, req.body.visit_website], function(err, rows, fields){

		if(!err)
			 {
				console.log(res);
				res.send(rows);
				console.log('insert SucessFully');
			 }

		else {
				console.log(err);
			 }
	})

});




//starting server
app.listen(app.get('port'),()=>{

	console.log('Serve On Port', app.get('port'));
})
`;
  constructor() { }

  ngOnInit() {
  }

}
