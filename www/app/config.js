JumpingFrogApp.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider
	.state('login',{
		url:'/',
		templateUrl:'app/login/login.html',
		controller:'loginCtrl'
	})

	.state('menu',{
		url:'/menu',
		abstract: true,
		templateUrl:'app/menu/menu.html',
		controller:'MenuCtrl'
	})

	.state('menu.billboard',{
		url:'/billboard',
		views: {
			'menuContent' : {
				templateUrl:'app/billboard/billboard.html',
				controller:'billboardCtrl',
				resolve: {
					response: function(billboardService) {
						return billboardService.getPosts();
					}
				}
			}
		}
	})

	//$urlRouterProvider.otherwise('/billboard');
});