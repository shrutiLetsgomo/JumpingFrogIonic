JumpingFrogApp.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider.state('login',{
		url:'/',
		templateUrl:'app/login/login.html',
		controller:'loginCtrl'
	})
	$stateProvider.state('billboard',{
		url:'billboard',
		templateUrl:'app/billboard/billboard.html'
	})
});