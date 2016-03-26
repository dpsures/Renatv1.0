'use strict';

anprApp.controller('globalCntrl',['$scope','$rootScope','$state','userService',
                                  function($scope,$rootScope,$state,userService){
	$scope.title = " ANPR v1.0";
	$rootScope.$log.debug($scope.title);
	
	$rootScope.$on("idelRestart",function(){
		$rootScope.$log.debug("idelRestart $on called");
	});

	$rootScope.$on("validateUser",function(e, userDetails){
		$rootScope.$log.debug("user name ---> "+userDetails.userName+" --- password ---> "+userDetails.password);
		userService.validateUser($scope,$rootScope,userDetails,userService);
	});
	
	$scope.$watch("status",function(){
		
		if($scope.status == ""){
			return;
		}
		
		if($scope.message == "loginService"){
			$state.transitionTo('enrollment');
		}
	});
}]);

