JumpingFrogApp.service('billboardService', function($http)
{
	return {
		getPosts : function(from, to, type)
		{
			var from = from || 0;
			var to = to || 5;
			var type = type || 'all';
			var url = "http://14.141.55.134/jumpingfrog/api/post?from="+from+"&to="+to+"&type="+type;
			console.log("welcome ..");
			return $http.get(url,
				{	
					headers : {'X-JF-AUTH' : userDetails.token},
				});
		}
	}
})