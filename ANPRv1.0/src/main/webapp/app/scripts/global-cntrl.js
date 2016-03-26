'use strict';

anprApp.controller('globalCntrl',function($scope,$rootScope){
	$scope.title = " ANPR v1.0";
	$rootScope.$log.debug($scope.title);
});

anprApp.controller('loginCntrl',['$scope','$rootScope','userService',function($scope,$rootScope,userService){
	$rootScope.$log.debug("loginCntrl invoked");
	
	$scope.login = function(){
		$rootScope.$log.debug("login function invoked");
		userService.validateUser($scope,$rootScope);		
	};
}]);