JumpingFrogApp.controller("MenuCtrl", function($scope, loginService)
{
	$scope.user = {};
	$scope.user.imageUrl = userDetails.user.photo;
	$scope.user.name = userDetails.user.fullName ;
});