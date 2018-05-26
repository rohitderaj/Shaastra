
var app = angular.module("myApp", []);
app.controller('myCtrl', function($scope) {
$scope.states = ["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu & Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttarakhand","Uttar Pradesh","West Bengal"];

$scope.pass="";
$scope.cpass="";
$scope.passd="";
$scope.passl="";
$scope.lenght="";
$scope.x=0;
$scope.y=0;
$scope.checkpassword=function()
{
  if($scope.pass!=$scope.cpass)
    
           {
	       $scope.passd="PASSWORDS DON'T MATCH";
           $scope.x=1;                                }
     else
           {$scope.passd="";
           $scope.x=0; }
}

$scope.passlen=function()
{
	 $scope.length = $scope.pass.length;
	 if($scope.length<6)
	 {$scope.passl="PASSWORD MUST HAVE MORE THAN 5 CHARACTERS";
	$scope.y=1;  }
	 else
	 {$scope.passl="";
	  $scope.y=0;	
                    }   }

});
