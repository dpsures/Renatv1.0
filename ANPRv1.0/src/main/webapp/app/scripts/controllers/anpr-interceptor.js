angular.module('anprInterceptor',['ngCookies']).
factory('httpAnprInterceptor', function($q, $rootScope, $log, $injector, $filter, $cookies){
	return{

		request: function(config){
			$rootScope.$broadcast("idelRestart");
			$rootScope.$log.debug("http request started");
			return config || $q.when(config);
		},
		response: function(response){
			return response || $q.when(response);
		},
		responseError: function(response){
			return $q.reject(response);			
		}
	};
});