angular.module('video-player')
.component('chatterBox', {
  
  bindings: {
    chatterBoxMessages: '<'
  },
  controller: function () {
    console.log ('test', this.chatterBoxMessages);
    this.checkData = () => {
      console.log ('here', this.chatterBoxMessages);
    };
    
  },
  templateUrl: 'src/templates/chatterBox.html'
});