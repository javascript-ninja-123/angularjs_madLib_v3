app.controller('oneController', function($scope,$timeout) {
	var main = this;
	main.title ="Provide the following words: ";
	main.header = "Automate This!";
	//form submit
	$scope.submit = submit;
	//data example
  $scope.showExample = showExample;
  //trigger story
  $scope.switchProblem = switchProblem;
  //reset button
 $scope.doitAgain = doitAgain;
  //single-side application
 $scope.Active = true;
 //make input bigger
$scope.extraClass=false;
//readable
$scope.readIt=false;


 function submit(){
if($scope.myForm.$invalid){
$scope.Active = true;
}
else if($scope.myForm.$valid){

	console.log("it is submitted");

}

 }


 function showExample(){
 	$scope.character={
gender : "male",
name : "Sung Yi",
jobTitle : "Web Developer",
tediousTask : "coding",
dirtyTask : "coding",
obnoxiousCelebrity : "you",
celebrity : "boss",
hugeNumber : 100,
uselessSkill : "coding",
adjective : "hefty"
 	}
 	

	return $timeout(function(){
	$scope.character = {};

	},4000);
 }

 function switchProblem(){
 	if($scope.character.gender === "male"){
 		$scope.pronoun = "he";
 		$scope.pronoun2 = "his";
 	}
 	else{
 	$scope.pronoun = "she";
 		$scope.pronoun2 = "her";	
 	}
 	$scope.Active = false;
 }

 
function doitAgain(){
	console.log("Reset!");
	$scope.character= {};
	$scope.Active = true;
}

});