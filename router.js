var express = require('express');
var app = express();
var dotenv = require('dotenv')
dotenv.config()
var port = process.env.PORT
var router1 = express.Router();
var router2 = express.Router();
var router3 = express.Router();
	
router1.get('/user', function (req, res, next) {
	console.log("User Router Working");
	res.end(`<h1>Hello</h1>`);
});

router2.get('/admin', function (req, res, next) {
	console.log("Admin Router Working");
	res.end(`<h1>I am admin</h1>`);
});

router2.get('/studentss', function (req, res, next) {
	console.log("Student Router Working");
	res.end(`<h1>I am student</h1>`);
});

app.use(router1);
app.use(router2);
app.use(router3);

app.listen(port, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT", port);
});
