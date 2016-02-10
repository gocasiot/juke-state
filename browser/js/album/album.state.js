juke.config(function ($stateProvider) {
    $stateProvider.state('album', {
        url: '/album/:albumId',
        templateUrl: '../album.html',
        controller: function($scope, AlbumFactory, $stateParams) {
        	var theId = $stateParams.albumId;
        	// var theId = '56ba52455976e7ab09e4f084';
        	AlbumFactory.fetchById(theId).then(function(theAlbum) {
        		$scope.album = theAlbum;
        	})
        }

    });
});