var mongodb = require('./db');//models is the part for the access of data

//save the usrname and pass

//1function--user 2 exports 3 save 4get
function User(user){
	this.name=user.name;
	this.pass=user.pass;
	this.email=usr.email;
};

module.exports =User;
//export for other parts can use the info in the user

//what's this?   }); 
//for the save--1 var 2open
user.prototype.save = function  (callback) {

	// body...
	//need a var to put the input by the user,different styles
	var user ={
		name:this.name,
		pass:this.pass,
		email:this.email
	};//what 'this' points to ?--gloabal var
	//open the db:1err2collection
	//for the collection 1err2insert
	//for the insert thing 1err 2callback adn return the user[0]

	//so three steps for the open function
	//1 open 2 read the collections in the db 3 inser the user.info
	//err: callback(err); or db.close();
	//db.collection('name',function(err,collection)--either get error or get the collection)
	//collection.insert(object,{},function)
	mongodb.open(
		function(err,db){
			if(err){return callback(err);}
			db.collection('users',function(err,collection){
				if(err){mongodb.close();reutrn callback(err);}
				collection.insert(user,{safe:true},function(err,user){
					if(err){return callback(err);}
				    callback(null,user[0]);
				});
			});
		});
};

//get the name --get what's in the callback
//you can have a clear structure and procedures. in this get--
//1 open(err/collection) 2 collection(err/collection) 3 findOne(err/user)
//specially,the findOne function arguments({name:name},function(err,user))
user.get = function(callback){
	mongodb.open(function(err,db){
		if(err){return callback(err);}
		db.collection('users',function(err,collection){
				if(err){mongodb.close();reutrn callback(err);}
				collection.findOne({name:name},function(err,user){
					mongodb.close();
					if (err) {reutrn callback(err);}
					callback(null,user);
				});
			
			});
	});

};