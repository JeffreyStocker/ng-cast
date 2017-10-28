angular.module('video-player')
.service('youTube', function($http) {
  // TODO
  
  this.search = function(searchString = 'monkeys', callback, detailCallback) { 
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
    }).then(response => {
      callback(response.data.items);
      this.videoDetails(response.data.items[0].id.videoId, detailCallback);
    }, function errorCallback(response) {
      console.error ('error: ', response);
    });
  };
  
  this.videoDetails = function (videoId, detailCallback) {
    $http ({
      method: 'GET', 
      url: 'https://www.googleapis.com/youtube/v3/videos',
      params: {
        part: 'snippet',
        videoEmbeddable: true,
        type: 'video',
        key: window.YOUTUBE_API_KEY,
        id: videoId
      }
    }).then(response => {
      detailCallback(response.data);
    }, function errorCallback(response) {
      console.error ('error: ', response);
    });
  };
  
});