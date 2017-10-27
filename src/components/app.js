angular.module('video-player')

.component('app', {
  // TODO
  controller: function ($scope, youTube) {
    this.selectVideo = function () {};
    this.searchResults = function () {};
    
    this.handleData = (data) => {
      this.videos = data;  
      this.currentVideo = data[0];
    };
    
    this.currentVideo = exampleVideoData[0];
    this.videos = exampleVideoData;

    youTube.searchYoutube('dogs', this.handleData);
    
  },
  templateUrl: 'src/templates/app.html'
});
