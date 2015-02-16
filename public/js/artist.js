(function() {
	var apollo = angular.module('artist', []);

	apollo.directive('artistList', function() {
		return {
			restrict: 'E',
			templateUrl: '/artists/single-list.html'
		};
	});
})();