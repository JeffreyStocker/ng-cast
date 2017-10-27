angular.module('video-player')

.component('videoPlayer', {
  // TODO
  bindings: {
    video: '='
  },
  controller: function () {
    this.getYoutubeSrc = function (videoId) {
      return 'https://www.youtube.com/embed/' + videoId;
    };
  },
  templateUrl: 'src/templates/videoPlayer.html'
});
