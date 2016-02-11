juke.config(function ($stateProvider) {
    $stateProvider.state('album', {
        url: '/album/:albumId',
        templateUrl: '../album.html',
        controller: function($scope, AlbumFactory, $stateParams) {
        	var theId = $stateParams.albumId;
        	AlbumFactory.fetchById(theId).then(function(theAlbum) {
        		$scope.album = theAlbum;

        	})
        }

    });
});