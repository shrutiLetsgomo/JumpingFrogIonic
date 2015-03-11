JumpingFrogApp.controller('billboardCtrl', function($scope, response, utilitiesService)
{
	$scope.posts = response.data.post;
	$scope.setDateTime = function(TS)
	{
		var datetime = utilitiesService.getDateTime(TS);
		return (datetime.time||" ")+"  "+(datetime.date||" ");
	}
})