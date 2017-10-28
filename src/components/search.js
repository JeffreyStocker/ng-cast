angular.module('video-player')
.component('search', {
  bindings: {
    handleSearch: '<'
  },
  controller: function () {
    this.searchString = '';
    this.handleClick = () => {
      this.handleSearch(this.searchString);
      this.searchString = '';
    };
  },
  
    // TODO
  templateUrl: 'src/templates/search.html'
});
