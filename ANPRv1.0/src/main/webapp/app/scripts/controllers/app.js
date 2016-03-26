'use strict';

var anprApp = angular.module('anprApp',['ui.router','ngResource','ui.bootstrap','ngCookies', 'anprInterceptor']);

anprApp.config(function($stateProvider,$urlRouterProvider, $logProvider, $browserProvider, $httpProvider){

	$urlRouterProvider.otherwise('/host');

	$stateProvider
	.state('empty',{
		url:"/host/",
		templateUrl:"templates/empty.html",
		controller: function($state,$rootScope){
			$state.transitionTo('login');
		}
	})
	.state('empty_root',{
		url:"/host/",
		templateUrl:"templates/empty.html",
		controller: function($state,$rootScope){
			$state.transitionTo('login');
		}
	})
	.state('login',{
		url:"/login",
		templateUrl : "templates/login.html",
		controller : "loginCntrl",
		data : {publicAccess:true}
	})
	.state('enrollment',{
		url:"/enrollment",
		templateUrl : "templates/enrollment.html",
		controller : "enrollmentCntrl"
	});

	$logProvider.debugEnabled(true);
	$httpProvider.interceptors.push('httpAnprInterceptor');
});

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