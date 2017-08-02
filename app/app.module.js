'use strict';

var env = {};

//Import variables if present (from env.js)
if(window){  
Object.assign(env, window.__env);
}

var app = angular.module('toollibApp', [
	'ngRoute',
	'navigation',
	'signIn', 
	'toolList', 
	'toolDetail',
	'consumerList',
	'myProfile'
//	'enrolment'
]);

//Register environment in AngularJS as constant
app.constant('__env', env);
