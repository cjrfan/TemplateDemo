/*var express = require('express');
var app = express();

// 路由：字符串类型
app.get('/book', function(req, res, next){
    res.send('This is a book!');
});

// 路由：字符串模式
app.get('/user/*man',function(req,res,next){
	res.send('The user is a man or a woman');// 比如： /user/man, /user/woman
});

// 路由：正则表达式
app.get(/animals?$/,function(req,res,next){
	res.send('animal');// 比如： /animal, /animals
});

// 路由：命名参数
app.get('/employee/:uid/:age',function(req,res,next){
	res.json(req.params);
});

app.listen(3000);*/

/*var express = require('express');
var app = express();
app.get('/user/list',function(req,res,next){
	res.send('/list');
});
app.get('/user/detail',function(req,res,next){
	res.send('/detail');
});
app.listen(3000);*/

/*var express = require('express');
var app = express();

var user = express.Router();
user.get('/list',function(req,res,next){
	res.send('/list');
});

user.get('/detail',function(req,res,next){
	res.send('/detail');
});

app.use('/user',user);// mini app，通常做应用拆分
app.listen(3000);*/

/*var express = require('express');
var app = express();

app.use(function(req,res,next){
	console.log('1');
	next();
});
app.use(function(req,res,next){
	console.log('2');
	next();
});
app.use(function(req,res,next){
	console.log('3');
	res.send('hello');
});
app.listen(3000);*/

var express = require('express');
var app = express();
var user = express.Router();

// 应用级
app.use(function(req,res,next){
	console.log('收到请求，地址为：'+req.url);
	next();
});

// 路由级
user.use('/list',function(req,res,next){
	res.send('/user/list');
});

// 路由级
user.get('/detail',function(req,res,next){
	res.send('/user/detail');
});

app.use('/user',user);
app.listen(3000);