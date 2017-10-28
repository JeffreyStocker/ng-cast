angular.module('video-player')
.component('search', {
  bindings: {
    result: '<'
  },
  controller: function(youTube) {
    this.service = {};
    this.searchString = '';
    this.invokeSearch = () => {
      youTube.search(this.searchString, this.result);
      this.searchString = '';
    };
  },
  templateUrl: 'src/templates/search.html'
});
