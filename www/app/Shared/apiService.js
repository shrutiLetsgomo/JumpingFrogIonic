JumpingFrogApp.service('APIService', function($http, utiliesService) {

	var headers = 
	{
		'type':'application/json',
		'X-JF-AUTH' : userDetails.token
	};
	return {
		doApiCall: function(url, method, payload, headers, data){
			this.headers = utiliesService.extend(this.headers, headers || {})
			var xhr = $http({
				method: method,
				url: url,
				headers: this.headers ,
				data: data
			});
			xhr.success(payload);
			xhr.error(payload);
			return xhr;
		}
	}	
});