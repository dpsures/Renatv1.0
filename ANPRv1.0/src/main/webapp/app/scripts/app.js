'use strict';

var anprApp = angular.module('anprApp',['ui.router','ngResource']);

anprApp.config(function($stateProvider,$logProvider){

	$stateProvider.
	state('login',{
		url:"/login",
		templateUrl : "templates/login.html",
		controller : "loginCntrl",
		data : {publicAccess:true}
	});
	
	$logProvider.debugEnabled(true);
});

anprApp.run(function($rootScope,$state,$log){
	$rootScope.$log = $log;
	$rootScope.$log.debug("Application Started");
	$state.transitionTo('login');
});