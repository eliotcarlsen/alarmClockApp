(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
Alarmclock = function(){
};
Alarmclock.prototype.setAlarm = function(){

}
exports.alarmModule = Alarmclock;

},{}],2:[function(require,module,exports){
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

},{"./../js/alarmclock.js":1}]},{},[2]);
