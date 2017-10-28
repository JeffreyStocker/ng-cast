angular.module('video-player')
.service('youTube', function($http) {
  // TODO
  
  this.search = function(searchString = 'monkeys', callback) { 
    $http({
      method: 'GET', 
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        q: searchString,
        maxResults: 5,
        key: window.YOUTUBE_API_KEY,
        part: 'snippet',
        videoEmbeddable: true,
        type: 'video'
      }
    }).then(function successfullCallback(response) {
      callback (response.data.items);
      // console.log ('response: ', response);
      // console.log ('callback: ', callback);
    }, function errorCallback(response) {
      console.error ('error: ', response);
    });
  };
});
