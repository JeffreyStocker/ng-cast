angular.module('video-player')

.component('app', {
  // TODO
  controller: function ($scope, youTube) {
    this.selectVideo = function () {};
    this.searchResults = function () {
      
    };
    
    this.result = (data) => {
      this.videos = data;  
      this.currentVideo = data[0];
    };
    
    this.onClick = (video) => {
      this.currentVideo = video;
    };
    
    youTube.search('trees', this.result);
    
    this.search = () => {
      youTube.search(this.searchString, this.result);
      this.searchString = '';
    };
    
  },
  templateUrl: 'src/templates/app.html'
});
