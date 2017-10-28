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
  
  
  this.getChatterbox = function (callback) {
    $http({
      method: 'GET',
      contentType: 'application/json',
      url: window.CHATTERBOX_SERVER,
      headers: {
        'X-Parse-Application-Id': window.CHATTERBOX_ID,
        'X-Parse-REST-API-Key': window.CHATTERBOX_API_KEY,
      }
    }).then(response => {
      // console.log (response);
      callback (response);
    }, function errorCallback (errorResponse) {
      console.error (errorResponse);
    });
  };
  
});