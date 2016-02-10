juke.config(function ($stateProvider) {
    $stateProvider.state('artistList', {
        url: '/artists',
        templateUrl: '../artistList.html'
    });
});