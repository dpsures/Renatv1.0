'use strict';

anprApp.factory('userService',['$resource',function($resource){
	return new User($resource);
}]);


function User(resource){
	this.resource = resource;
	
	this.validateUser = function(scope,rootScope,userDetails,userService){
		rootScope.$log.debug("validateUser invoked");
		scope.status = 200;
		scope.message = "loginService";
	};
}