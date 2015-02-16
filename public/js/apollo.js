(function() {
	var apollo = angular.module('apollo', ['artist']);

	apollo.controller('offCanvasCtrl', function($scope) {
		$scope.mainView = function(view) {
			console.log(view);
		}
	});

	apollo.controller('apolloPlayerCtrl', function($scope) {
		$scope.artists = [
			{
				'name' : 'Phish',
				'slug' : 'phish'
			},
			{
				'name' : 'Elton John',
				'slug' : 'eltonjohn'
			},
			{
				'name' : 'Weezer',
				'slug' : 'weezer'
			}
		];
	});
})();