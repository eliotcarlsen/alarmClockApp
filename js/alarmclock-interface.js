var Alarm = require('./../js/alarmclock.js').alarmModule;

$(document).ready(function(){
  $('#alarm-form').submit(function(event){
    event.preventDefault();
    var alarmSet = $('#time').val();
    console.log(alarmSet);
  });
});
