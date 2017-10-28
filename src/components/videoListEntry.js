angular.module('video-player')
.component('videoListEntry', {
  // TODO
  bindings: {
    video: '<',
    updateDefault: '<'
  },
  templateUrl: 'src/templates/videoListEntry.html'
});
