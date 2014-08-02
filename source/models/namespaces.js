/**
* SendMail var
* @type {Object}
* @name jnode 
*/
var SendMail = {};

//nodejs modules
SendMail.http = require('http');
SendMail.path = require('path');
SendMail.fs = require('fs');

//require
SendMail.express = require('express');
SendMail.bliss = require('bliss');
SendMail._ = require('underscore');
SendMail.stylus = require('stylus');

//emails
SendMail.nodemailer = require('nodemailer');
SendMail.emailTemplates = require('email-templates-windows');

//config
SendMail.pjson = JSON.parse(SendMail.fs.readFileSync('package.json', 'utf8')); 

//paths
//SendMail.root = __dirname;
//SendMail.viewsRoot = __dirname + '/content/views';