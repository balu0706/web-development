angular.module('movieApp', ['ngRoute'])
    .controller('MovieController', function($scope) {
        $scope.movies = [
            { title: 'Manjummel Boys', poster: 'mboys.jpg', trailerUrl: 'mboys.mp4',trailerUrl1: 'https://ssyoutube.com/en173vB/youtube-video-downloader' },
            { title: 'Salaar', poster: 'salar.jpg', trailerUrl: 'https://www.youtube.com/watch?v=JlG4TOVZEHI' },
            { title: 'RRR', poster: 'rrr.jpg', trailerUrl: 'https://www.youtube.com/watch?v=NgBoMJy386M' },
            { title: 'Guntur Kaaram', poster: 'gkaram.webp', trailerUrl: 'gkaram.mp4',trailerUrl1: 'https://ssyoutube.com/en173vB/youtube-video-downloader' },
            { title: 'Jawan', poster: 'jawan.webp', trailerUrl: 'jawan.mp4' },
            { title: 'KGF 2', poster: 'KGF 2.jpg', trailerUrl: 'kgf.mp4' },
            { title: 'MAD', poster: 'mad.webp', trailerUrl: 'https://www.youtube.com/watch?v=bQRCyrNmhj4' },
            { title: 'Hanuman', poster: 'hanuman.jpg', trailerUrl: 'https://www.youtube.com/watch?v=Oqvly3MvlXA' },
            { title: 'Captain Miller', poster: 'Cmiller.webp', trailerUrl: 'https://www.youtube.com/watch?v=Eqzk-fjinmw' },
            { title: 'Gaami', poster: 'gaami.jpg', trailerUrl: 'gaami.mp4' },
            // Add more movies as needed
        ];
        $scope.downloadTrailer = function(movie) {
            // Redirect to the download form page
            window.location.href = 'download.html';
        };

        $scope.watchTrailer = function(movie) {
            window.open(movie.trailerUrl, '_blank');
        };
        angular.module('movieApp')
.controller('AboutController', function($scope) {
    // Any specific logic for the about page can go here
});

        
        
    });
