juke.config(function ($stateProvider) {
    $stateProvider.state('artist', {
        url: '/artist/:artistId',
        templateUrl: '../artist.html',
        controller: function($scope, ArtistFactory, $stateParams) {
        	var theId = $stateParams.artistId;
        	ArtistFactory.fetchById(theId).then(function(theArtist) {
                $scope.artist = theArtist;

        	})
        }

    });
});