var express = require('express');
var router = express.Router();


var crypto = require('crypto'),
user = require('../models/user.js');
//put the js in user? what's the require function returns?

/* GET home page. */
//router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
//}); 
//login reg只能是未登录状态访问 post logout 只能是登录

module.exports = router;
module.exports = function(app){
	app.get('/',function(req,res){
		res.render('index', { title: 'homepage' });
	});
	app.get('/reg',function(req,res){
		res.render('reg', { title: 'register' });
	});
	app.post('/reg',function(req,res){
		//1 check the pass == pass_re 2 crypto the pass 3 check the username exited or not 4 insert into db
		//1get the name and pass from req.body2if to check and return res
		var name =req.body.name,
		pass =req.body.pass,
		pass_re = req.body['password-repeat'] ;//我使用的是pass so iamnot sure whether to use the pass-repeat
		if(pass_re !=pass)
		{
			req.flash('error','两次输入不一致')；//flash using the connect-flash
			return res.redirect('./reg');//redirect
		}
		//1generate the md52crypto and get the pass 3 new the User
		var md5 = crypto.creatHash('md5'),
		pass = md5.update(req.body.pass).digest('hex');
		var newUser = new User({name:req.body.name ,pass:pass, email:req.body.email});
		//use get and save written in the user.js to get the user and insert into db
		//save :将用户信息存入session后返回主页
		User.get(newUser.name,function(err,user){
			if(user){
				req.flash('error','用户已存在');
				return res.redirect('./reg');
			}
			newUser.save(function(err,user){
				if(err){
					req.flash('error',err);
					return res.redirect('./reg');
				}
				req.session.user = user;//careful
				req.flash('sucess','注册成功');
				res.redirect('./');
			});
			});
		});

	});
	app.get('/login',function(req,res){
		res.render('login', { title: 'login' });
	});
	app.post('/login',function(req,res){
	});
	app.get('/post',function(req,res){
		res.render('post', { title: 'post' });
	});
	app.post('/post',function(req,res){
	});
	app.get('/logout',function(req,res){
	});
};
//exports the router and the function(app)--you get the app and exports it
//so exports router and app for...

//for the get: ('route',function(req,res)) in the function(req,res)you use the render 
//for the post: also ,but no using render. the function just do nothing