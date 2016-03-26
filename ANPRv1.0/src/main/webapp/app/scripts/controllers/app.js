'use strict';

var anprApp = angular.module('anprApp',['ui.router','ngResource','ui.bootstrap','ngCookies', 'anprInterceptor']);

anprApp.run(function($rootScope,$state,$http,$templateCache,$log,$location){
	$rootScope.$log = $log;
	$rootScope.$log.debug("Application Started");
	$state.transitionTo('login');

	$rootScope.$on("$stateChangeStart",function(event,toState,toParams,fromState,fromParams){
		var publicAccess = (toState.data != null && toState.data.publicAccess) || false;
		if(publicAccess){
			return true;
		}

		if(toState.name == 'empty'){
			return;
		}

		if(toState.name != 'login' && fromState.name == ""){
			event.preventDefault();
			$state.transitionTo('login');
			return false;
		}
	});
});