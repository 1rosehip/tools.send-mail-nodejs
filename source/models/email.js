(function(SendMail){
		
	/**
	* init transport
	* @param {Object} self - this object
	*/
	var initTransport = function(self){
		
		self.transport = SendMail.nodemailer.createTransport("SMTP", {
			service: 'Gmail',
			auth: {
				user: SendMail.pjson['_user']
				,pass: SendMail.pjson['_psw']
			}
		});
	};
	
	/**
	* send mail
	* @param {Object} self - this object
	* @param {string} from
	* @param {string} to
	* @param {string} subject
	* @param {string} html
	*/
	var send = function(self, from, to, subject, html){
		
		try{
			self.transport.sendMail({
				from: from //'myname <spicy.meatball@spaghetti.com>'
				,to: to
				,subject: subject
				,html: html
				,generateTextFromHTML: true
				//,text: 'asdasdasdasdasdasd'
			}, function(err, responseStatus){
				
				if(err) {
					console.log(err);
				} 
				else{
					console.log(responseStatus.message);
				}
			});
		}
		catch(err){
			console.log(err);
		}
	};
	
	/**
	* send mail with html template
	* @param {Object} self - this object
	* @param {Object} data - data object
	* @param {string} templateName - template name
	* @param {string} from
	* @param {string} to
	* @param {string} subject
	*/
	var sendWithTemplate = function(self, templateName, data, from, to, subject){
	
		var locals;
		
		SendMail.emailTemplates(self.templatesDir, function(err, template){
		
			if (err){
				console.log(err);
			} 
			else{
				template(templateName, data, function(err, html, text){
					if (err){
						console.log(err);
					} 
					else{
						send(self, from, to, subject, html);
					}
				});
			}
		});
	};
	
	/**
	* email class constructor
	* @constructor
	* @private
	* @return {Object}
	*/
	var init = function(){
	
		var self = {
			transport: null
			,templatesDir: SendMail.path.resolve(__dirname, '.', 'templates')
		};	
		
		//init transport
		initTransport(self);	
				
		return SendMail._.extend(this, self);
	};
	
	//API -------------------------------------
	
	/**
	* send mail with html template
	* @param {Object} data - data object
	* @param {string} templateName - template name
	* @param {string} from
	* @param {string} to
	* @param {string} subject
	* @public
	*/
	init.prototype.sendWithTemplate = function(templateName, data, from, to, subject){
		sendWithTemplate(this, templateName, data, from, to, subject);
	};	
	
	/**
	* send mail
	* @param {string} from
	* @param {string} to
	* @param {string} subject
	* @param {string} html
	* @public
	*/
	init.prototype.send = function(from, to, subject, html){
		send(this, from, to, subject, html);
	};	
	
	/** 
	* email class
	* @constructor 
	* @public
	*
	* @name email
    * @class email class
    * @memberOf SendMail
	* @return {Object}
	*/
	SendMail.email = function(){
	
		var self = {};
		
		self = new init();
		
		return self;
	};
	
})(SendMail);