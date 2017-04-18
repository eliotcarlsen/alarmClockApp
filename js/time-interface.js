$(document).ready(function(){
  var update = function(){
    var myclock = moment().format('LTS');
    var now = $('#mytime').text(myclock);
  };
  setInterval(update, 1000);
});
