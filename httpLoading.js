/**
*  Module
*
* Description
*/

angular.module('httploading', []).directive('httpLoading', function(){
	// Runs during compile
	return {
		 //name: 'httploading',
		// priority: 1,
		// terminal: true,
		scope: {
			httploading:'='
		}, // {} = isolate, true = child, false/undefined = no change
		restrict: 'EA', // E = Element, A = Attribute, C = Class, M = Comment
		template:'<div id="mask-loading" class="mask-loading" ng-if="httploading" style="background-color: rgba(0,0.17);">  <style type="text/css"> .mask-loading .loading-icon{-webkit-animation:rotate 1s linear infinite;-o-animation:rotate 1s linear infinite;animation:rotate 1s linear infinite;position:absolute;top:50%;left:50%;width:30px;height:30px;margin:-20px 0 0 -20px;border-width:5px;border-style:solid;border-color:#37c3aa #37c3aa #fff #fff;opacity:.9;border-radius:20px}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.mask-loading{position:fixed;top:0;right:0;bottom:0;left:0;background:0;z-index:9999}</style> <div class="loading-icon"></div>	</div>',	
		//templateUrl: 'templ/httpLoading.html',
		replace: true,
		transclude: true,
		link: function($scope, iElm, iAttrs, controller) {
			
		}
	};
})
