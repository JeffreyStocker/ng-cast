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
    
    this.updateDefault = (video) => {
      this.currentVideo = video;
    };
    
    youTube.searchYoutube('dogs', this.handleData);
    
    this.searchYoutube = (query) => {
      youTube.searchYoutube(query, this.handleData);
    };
    
  },
  templateUrl: 'src/templates/app.html'
});
