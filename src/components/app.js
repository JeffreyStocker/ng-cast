angular.module('video-player')

.component('app', {
  // TODO
  controller: function ($scope, youTube) {
    this.selectVideo = function () {};
    this.searchResults = function () {};
    this.chatterBoxMessages;
    
    this.result = (data) => {
      this.videos = data;  
      this.currentVideo = data[0];
    };
    
    this.detailResult = (data) => {
      this.videoDetails = data.items[0];
      // console.log (this.videoDetails);
    };
    
    this.onClick = (video) => {
      this.currentVideo = video;
    };
    
    youTube.search('trees', this.result, this.detailResult);
    
    this.search = () => {
      youTube.search(this.searchString, this.result);
      this.searchString = '';
    };
    youTube.getChatterbox((data)=>{
      this.chatterBoxMessages = data.data.results;
      // console.log ('app level:', this.chatterBoxMessages);
    });
  },
  templateUrl: 'src/templates/app.html'
});
