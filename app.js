/**
*  Mappodule
*
* Description
*/
var app=angular.module('app', ['httploading'])

.controller('mainCtrl',function($scope,$rootScope,$interval,$http){
	
	$rootScope.isShow=true;

	$interval(function(){
		$rootScope.isShow=!$rootScope.isShow;
	},6000);

})