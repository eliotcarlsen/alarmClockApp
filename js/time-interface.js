$(document).ready(function(){
  var update = function(){
    var time = moment().format('LTS');
    var now = $('#time').text(time);
  };
  setInterval(update, 1000);
});
