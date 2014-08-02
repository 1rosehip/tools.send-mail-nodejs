(function(SendMail){

	/**
	* index content
	* @param {Object} req - request
	* @param {Object} res - response
	*/
	var indexContent = function(req, res){
	
		var from = 'no81no@gmail.com' 
			,to = 'no81no@gmail.com' 
			,subject = 'Newsletter'
			,data;
		
		//init data
		data = {};
		
		//send mail
		SendMail.email.sendWithTemplate('newsletter', data, from, to, subject);		
		
		res.render('index', {});
	};
	
	/**
	* SendMail controllers
	* @type {Object}
	* @name controllers
	*
    * @class controllers
    * @memberOf SendMail
	*/
	SendMail.routers = {};
	
	/**
	* home page - GET
	* @param {Object} req - request
	* @param {Object} res - response
	*/
	SendMail.routers.index = function(req, res){		
		indexContent(req, res);	
	};
	
	
})(SendMail);