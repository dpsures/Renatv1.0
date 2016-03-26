'use strict';
anprApp.controller('loginCntrl',['$scope','$rootScope',function($scope,$rootScope){
	$rootScope.$log.debug("loginCntrl invoked");

	$scope.login = function(){
		var obj = $scope.session,
		jsonString = {
			"userName" : obj.userid,
			"password" : obj.password
		};
		
		$rootScope.$broadcast('validateUser',jsonString);
	};
}]);