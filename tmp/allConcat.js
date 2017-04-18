var Alarm = require('./../js/alarmclock.js').alarmModule;

$(document).ready(function(){
  $('#alarm-form').submit(function(event){
    event.preventDefault();
    var alarmSet = $('#time').val();
    console.log(alarmSet);
  });
});

$(document).ready(function(){
  var update = function(){
    var myclock = moment().format('LTS');
    var now = $('#mytime').text(myclock);
  };
  setInterval(update, 1000);
});
