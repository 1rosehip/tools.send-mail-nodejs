
/* NODE JS ----------------------------------------------------------------*/

//EVENTS ------------------------------------------------------------------------- 

/**
 * This class emits the following events:
 * <ul>
 *   <li>'newListener'
 * </ul>
 * @constructor
 */
var EventEmitter = function() {};

/**
 * @param {string} eventType
 * @param {Function} listener
 * @return {EventEmitter} this EventEmitter
 */
EventEmitter.prototype.addListener = function(eventType, listener) {};

/**
 * @param {string} eventType
 * @param {Function} listener
 * @return {EventEmitter} this EventEmitter
 */
EventEmitter.prototype.on = function(eventType, listener) {};

/**
 * @param {string} eventType
 * @param {Function} listener
 * @return {EventEmitter} this EventEmitter
 */
EventEmitter.prototype.once = function(eventType, listener) {};

/**
 * @param {string} eventType
 * @param {Function} listener
 * @return {EventEmitter} this EventEmitter
 */
EventEmitter.prototype.removeListener = function(eventType, listener) {};

/**
 * @param {string=} eventType If omitted, all listeners are removed.
 * @return {EventEmitter} this EventEmitter
 */
EventEmitter.prototype.removeAllListeners = function(eventType) {};

/**
 * @param {number} n
 */
EventEmitter.prototype.setMaxListeners = function(n) {};

/**
 * @param {string} eventType
 * @return {Array.<Function>}
 */
EventEmitter.prototype.listeners = function(eventType) {};

/**
 * @param {string} eventType
 * @param {...*} var_args
 * @return {boolean} true if there was at least one handler for the event;
 *     otherwise, returns false
 */
EventEmitter.prototype.emit = function(eventType, var_args) {};


// HTTP -----------------------------------------------------

var http = {};

/**
 * This should be added for 'request' events.
 * @typedef {function(http.ServerRequest, http.ServerResponse)}
 */
http.requestListener;

/**
 * @param {http.requestListener=} listener
 * @return {http.Server}
 */
http.createServer = function(listener) {};

/**
 * This class emits the following events:
 * <ul>
 *   <li>'request'
 *   <li>'connection'
 *   <li>'close'
 *   <li>'checkContinue'
 *   <li>'upgrade'
 *   <li>'clientError'
 * </ul>
 * // TODO(bolinfest): This actually extends net.Server
 * @param {http.requestListener=} listener  
 * @constructor
 * @extends {EventEmitter}
 */
http.Server = function(listener) {};

/**
 * This method is meant to be called as either:
 * <pre>
 * listen(port [,hostname] [,callback)
 * listen(path [,callback]) 
 * </pre>
 * If callback is specified, it is registered with the 'listening' event,
 * which is dispatched by the superclass net.Server, though this appears to be
 * undocumented.
 * 
 * @param {(number|string)} portOrPath port if it's a number; path if it's a
 *     string
 * @param {(string|Function)=} hostnameOrCallback hostname if it's a string;
 *     callback if it's a Function
 * @param {Function=} callback
 */
http.Server.prototype.listen = function(
    portOrPath, hostnameOrCallback, callback) {};

/**
 * Closes the server.
 */
http.Server.prototype.close = function() {};

/**
 * This object is created internally by an http.Server.
 * This class emits the following events:
 * <ul>
 *   <li>'data'
 *   <li>'end'
 *   <li>'close'
 * </ul>
 * // TODO(bolinfest): This actually extends stream.Stream.
 * @constructor
 * @extends {EventEmitter}
 * @private
 */
http.ServerRequest = function() {};

/** @type {string} */
http.ServerRequest.prototype.method;

/**
 * Only the URL that is present in the actual HTTP request. For example, it
 * would be: '/status?name=ryan' rather than
 * 'http://example.com/status?name=ryan'.
 * @type {string}
 */
http.ServerRequest.prototype.url;

/** @type {Object} */
http.ServerRequest.prototype.headers;

/** @type {Object} */
http.ServerRequest.prototype.trailers;

/**
 * Likely '1.1' or '1.0'.
 * @type {string}
 */
http.ServerRequest.prototype.httpVersion;

/**
 * Likely '1'.
 * @type {string}
 */
http.ServerRequest.prototype.httpVersionMajor;

/**
 * Likely '1' or '0'.
 * @type {string}
 */
http.ServerRequest.prototype.httpVersionMinor;

/**
 * @param {?string} encoding either 'utf8' or 'binary'. If null (the default),
 *     the 'data' event will emit a Buffer object.
 */
http.ServerRequest.prototype.setEncoding = function(encoding) {};

http.ServerRequest.prototype.pause = function() {};

http.ServerRequest.prototype.resume = function() {};

/**
 * This is a stream.Stream, but that is not defined in these externs yet.
 * @type {*}
 */
http.ServerRequest.prototype.connection;

/**
 * This object is created internally by an http.Server. It is a Writable Stream.
 * // TODO(bolinfest): This actually extends stream.Stream.
 * @constructor
 * @extends {EventEmitter}
 * @private
 */
http.ServerResponse = function() {};

http.ServerResponse.prototype.writeContinue = function() {};

/**
 * This API is confusing because the number of arguments determines the position
 * of the "headers" argument:
 * <ul>
 *   <li>If there are two arguments, then headers is the third argument.
 *   <li>If there are three arguments, then headers is the second argument.
 * </ul>
 * @param {number} statusCode
 * @param {*=} reasonPhrase (string, if specified)
 * @param {*=} headers (Object.<string>, if specified)
 */
http.ServerResponse.prototype.writeHead = function(
    statusCode, reasonPhrase, headers) {};

/**
 * Status code, such as 404.
 * @type {number}
 */
http.ServerResponse.prototype.statusCode;

/**
 * @param {string} name
 * @param {string} value
 */
http.ServerResponse.prototype.setHeader = function(name, value) {};

/**
 * @param {string} name
 * @return {string|undefined} value
 */
http.ServerResponse.prototype.getHeader = function(name) {};

/**
 * @param {string} name
 */
http.ServerResponse.prototype.removeHeader = function(name) {};

/**
 * @param {string|Array} chunk may also be a Buffer
 * @param {string=} encoding defaults to 'utf8'
 */
http.ServerResponse.prototype.write = function(chunk, encoding) {};

/**
 * These are added only if chunked encoding is used.
 * @param {Object} headers
 */
http.ServerResponse.prototype.addTrailers = function(headers) {};

/**
 * @param {(string|Array)=} data may also be a Buffer
 * @param {string=} encoding defaults to 'utf8'
 */
http.ServerResponse.prototype.end = function(data, encoding) {};

/**
 * This object is created internally by an http.Server.
 * This class emits the following events:
 * <ul>
 *   <li>'response'
 *   <li>'error'
 * </ul>
 * // TODO(bolinfest): This actually extends stream.Stream.
 * @constructor
 * @extends {EventEmitter}
 * @private
 */
http.ClientRequest = function() {};

/**
 * @param {string|Array} chunk may also be a Buffer
 * @param {string=} encoding defaults to 'utf8'
 */
http.ClientRequest.prototype.write = function(chunk, encoding) {};

/**
 * @param {(string|Array)=} data may also be a Buffer
 * @param {string=} encoding defaults to 'utf8'
 */
http.ClientRequest.prototype.end = function(data, encoding) {};

/**
 * Aborts a request.
 */
http.ClientRequest.prototype.abort = function() {};

/**
 * This object is created internally by an http.Server.
 * This class emits the following events:
 * <ul>
 *   <li>'data'
 *   <li>'end'
 * </ul>
 * // TODO(bolinfest): This actually extends stream.Stream.
 * @constructor
 * @extends {EventEmitter}
 * @private
 */
http.ClientResponse = function() {};

/**
 * Status code, such as 404.
 * @type {number}
 */
http.ClientResponse.prototype.statusCode;

/**
 * Likely '1.1' or '1.0'.
 * @type {string}
 */
http.ClientResponse.prototype.httpVersion;

/**
 * Likely '1'.
 * @type {string}
 */
http.ClientResponse.prototype.httpVersionMajor;

/**
 * Likely '1' or '0'.
 * @type {string}
 */
http.ClientResponse.prototype.httpVersionMinor;

/** @type {Object} */
http.ClientResponse.prototype.headers;

/** @type {Object} */
http.ClientResponse.prototype.trailers;

/**
 * @param {?string} encoding either 'utf8' or 'binary'. If null (the default),
 *     the 'data' event will emit a Buffer object.
 */
http.ClientResponse.prototype.setEncoding = function(encoding) {};

http.ClientResponse.prototype.pause = function() {};

http.ClientResponse.prototype.resume = function() {};

/**
 * @param {Object} options
 * @param {function(http.ClientResponse)} callback
 * @return {http.ClientRequest}
 */
http.request = function(options, callback) {};

/**
 * @param {Object} options
 * @param {function(http.ClientResponse)} callback
 * @return {http.ClientRequest}
 */
http.get = function(options, callback) {};


//HTTPS ----------------------------------------------

var https = {};

/**
 * @param {Object} options
 * @param {function(http.ClientResponse)} callback
 * @return {http.ClientRequest}
 */
https.request = function(options, callback) {};

/**
 * @param {Object} options
 * @param {function(http.ClientResponse)} callback
 * @return {http.ClientRequest}
 */
https.get = function(options, callback) {};

// PROCESS ----------------------------

var process = {};

process.env = {};

/** @define {number} */
process.env.PORT;

// EXPRESS ---------------------------

var configure = function(){};

/**
* @param {Object} obj
*/
var use = function(obj){};

var favicon = function(){};
var errorHandler = function(){};
var staticCache = function(){};
var bodyParser = function(){};
var methodOverride = function(){};

/**
* template engine
* @param {string} engineName
* @param {Function} callback - render function
*/
var engine = function(engineName, callback){};
var middleware = function(){};

/**
* @param {string} env - 'dev', 'staging' etc.
*/
var logger = function(env){};

/**
* @type {Object}
*/
var router;

/**
* render html - template + data
* param {string} route - route name ('index' for example)
* param {Object} params - {title: 'Express'} for example
*/
var render = function(route, params){};

//MONGODB -----------------------------

var Db = {};

var collection = function(name, callback){};

var ObjectID = {};

var toArray = function(callback){};

var streamRecords = function(){};
var stream = function(){};
var params = {};

//MYSQL -----------------------------

var createConnection = function(){};
var connect = function(){};
var end = function(){};
var query = function(){};
var fatal;
var config;

// EMAIL -----------------------------
var createTransport = function(){};
var sendMail = function(){};
var resolve = function(){};

// NODE -------------------------------

/**
 * @param module
 */
var require = function(module){};

var exports = {};

/** @type {string} */
var __dirname = "";

/** @type {Object} */
var console = {};

var param = function(){};
var post = function(){};
var readFileSync = function(){};

var JSON;
var _mysql;

