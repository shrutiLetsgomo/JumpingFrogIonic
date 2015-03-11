var userDetails ;
JumpingFrogApp.factory('loginService', function($http)
{
	return {
		getUserDetails : function(user)
		{	
			var userCredentials = 
			{
				//"userName": user.userName, 
				//"password": user.password, 
				"userName": "simon", 
				"password": "123456", 
				"deviceId": "123123123123", 
				"deviceType": "WINDOWS"
			};
			return $http.post('http://14.141.55.134/jumpingfrog/api/auth',
			userCredentials);
		},
		setUserDetails : function(userDetail)
		{
			userDetails = userDetail;
		}
	}

})