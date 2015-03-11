JumpingFrogApp.factory('utilitiesService', function()
{
	return {
	getDateTime : function(TS){
			if(!TS){
				console.log("timeStamp is not valid ");
				return false;
			}
			var timeDetails = {};
			var date = new Date(TS);
			
				var TSDate = date.getDate();
				var TSMonth = date.getMonth()+1;
				var TSYear = date.getFullYear();
				timeDetails.date = TSDate+"/"+TSMonth+"/"+TSYear;
				var hours = date.getHours();
				var periodValue = "AM";

				if((hours % 10)>=0 && (hours / 10)<1){
					hours = "0"+hours;
				} else if((hours / 12)>=1)
				{
					hours = hours%12;
					periodValue = "PM";
					if((hours % 10)>=0 && (hours / 10)<1)
					{
						hours = "0"+hours;
					}

					var mins = date.getMinutes();
					if((mins % 10)>=0 && (mins / 10)<1){
						mins = "0"+mins;
					}
					var seconds = date.getSeconds();
					if((seconds % 10)>=0 && (seconds / 10)<1){
						seconds = "0"+seconds;
					}
					timeDetails.time = hours+":"+mins+":"+seconds+" "+periodValue;
				}
			return timeDetails;
		},
		extend : function(firstObj, secondObj){
				var finalobj={};
				for(var _obj in firstObj) finalobj[_obj ]=firstObj[_obj];
				for(var _obj in secondObj) finalobj[_obj ]=secondObj[_obj];
			return finalobj;
		}
	}
})