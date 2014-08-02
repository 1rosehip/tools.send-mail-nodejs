(function(SendMail){
		
	/**
	* configure app routes
	* @param {Object} self - this object
	*/
	var initRoutes = function(self){
	
		//home page
		self.app.get('/', SendMail.routers.index);
		self.app.get('/index', SendMail.routers.index);
	};
	
	/**
	* configure template engine
	* @param {Object} self - this object
	*/
	var initTemplateEngine = function(self){
	
		var bliss = new SendMail.bliss();
		
		self.app.engine('.html', function(path, options, fn){
			fn(null, bliss.render(path, options));
		});		
	};
	
	/**
	* configure app settings
	* @param {Object} self - this object
	*/
	var configure = function(self){ 
	
		self.app.configure(function(){
			self.app.set('port', process.env.PORT || 8088);
			self.app.set('views', __dirname + '/content/views');
			self.app.set('view engine', 'html');
			
			//stylus css engine
			self.app.use(require('stylus').middleware({
				src: __dirname + '/content'
				,compress: true
			}));
			
			self.app.use(SendMail.express.favicon());
			self.app.use(SendMail.express.logger('dev'));
			self.app.use(SendMail.express.bodyParser());
			self.app.use(SendMail.express.methodOverride());
			self.app.use(self.app.router);
			self.app.use(SendMail.express['static'](__dirname + '/content'));				
		});
		
		//configure template engine
		initTemplateEngine(self);
		
		self.app.configure('development', function(){
		  self.app.use(SendMail.express.errorHandler());
		});
		
	};
	
	/**
	* index content
	*/
	var sendNewsLetter = function(){
	
		var from = SendMail.pjson['_to'] 
			,to = SendMail.pjson['_to'] 
			,subject = 'Newsletter'
			,data;
		
		//init data
		data = {};
		
		//send mail
		SendMail.email.sendWithTemplate('newsletter', data, from, to, subject);	
	};
		
	/**
	* SendMail constructor
	*/
	var init = (function(){
		
		var self = {
			app: SendMail.express()
		};
				
		//init global classes
		SendMail.email = new SendMail.email();		
		
		//configure app settings
		configure(self);
		
		//configure app routes
		initRoutes(self);
		
		//start server
		SendMail.http.createServer(self.app).listen(self.app.get('port'), function(){
			console.log("Express server listening on port " + self.app.get('port'));
			
			//send
			sendNewsLetter();
		});
		
	})();

})(SendMail);