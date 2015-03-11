JumpingFrogApp.controller('billboardCtrl', function($scope, billboardService, utilitiesService)
{
	$scope.posts = {};
	billboardService.getPosts().then(function(data)
	{
		$scope.posts = data.data.post;
	})

	$scope.setDateTime = function(TS, options)
	{
		var datetime = utilitiesService.getDateTime(TS);
		return (datetime.time||" ")+"  "+(datetime.date||" ");
	}
})