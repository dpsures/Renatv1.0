'use strict';

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
		views:{
			"main":{
				templateUrl : "templates/login.html",
				controller : "loginCntrl",
			}
		},
		data : {publicAccess:true}
	})
	.state('enrollment',{
		url:"/enrollment",
		views:{
			"topBar":{
				templateUrl : "templates/topbar.html"
			},
			"leftMenu":{
				templateUrl : "templates/leftmenu.html"
			},			
			"main":{
				templateUrl : "partials/enrollment.html",
				controller : "enrollmentCntrl",
			}
		}
	})
	.state('monitoringview',{
		url:"/monitoringview",
		views:{
			"topBar":{
				templateUrl : "templates/topbar.html"
			},
			"leftMenu":{
				templateUrl : "templates/leftmenu.html"
			},			
			"main":{
				templateUrl : "partials/monitoringview.html",
				controller : "monitoringViewCntrl",
			}
		}
	})
	.state('report',{
		url:"/report",
		views:{
			"topBar":{
				templateUrl : "templates/topbar.html"
			},
			"leftMenu":{
				templateUrl : "templates/leftmenu.html"
			},			
			"main":{
				templateUrl : "partials/report.html",
				controller : "reportCntrl",
			}
		}
	});

	$logProvider.debugEnabled(true);
	$httpProvider.interceptors.push('httpAnprInterceptor');
});