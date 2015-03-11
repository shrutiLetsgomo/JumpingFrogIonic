JumpingFrogApp.controller("loginCtrl", function($scope, $state, loginService, popupService)
{
	$scope.login = function(userCredentials)
	{
		//if(userCredentials == null){popupService.showAlert('Error','Invalid login'); return;}
		loginService.getUserDetails(userCredentials).then(function(loginResponse)
		{
			if(loginResponse.data.status == false)
			{
				popupService.showAlert('Error','Invalid login');
			} else {
				loginService.setUserDetails(loginResponse.data);
				console.log(loginResponse.data+"********");
				$state.go("menu.billboard");
			}
		});
	}

})