JumpingFrogApp.factory('popupService', function($ionicPopup)
{
	return { showAlert : function(title, template)
						{
							$ionicPopup.alert({
								title:title,
								template:template
							});
						}
			};
	
})