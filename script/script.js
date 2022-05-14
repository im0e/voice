
/*


THE PREVIOUS TEST 


var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var recognition = new SpeechRecognition();
var output;

var record_notification = new Audio("res/sounds/start.wav");

function read(id){
    txt = document.getElementById(id).innerHTML;
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(txt));
}

function start_record(id) {
    record_notification.play();
    record_notification.currentTime = 0;
    output = document.getElementById(id);
    recognition.start();
}

recognition.onresult = function(event) {
  var txt = event.results[0][0].transcript;  
  console.log(txt);
  output.value = txt;
}

recognition.onspeechend = function() {
  recognition.stop();
}
*/



var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var output;

var counter = 0;
var interval = setInterval( function() {counter++;}, 1000);


var record_notification = new Audio("res/sounds/start.wav");

function read(id) {
  txt = document.getElementById(id).innerHTML;
  window.speechSynthesis.speak(new SpeechSynthesisUtterance(txt));
}

function start_record(id) {
  record_notification.play();
  record_notification.currentTime = 0;
  output = document.getElementById(id);
  recognition.start();
}

recognition.onresult = function (event) {
  var txt = event.results[0][0].transcript;
  console.log(txt);
  output.value += txt;
};

recognition.onend = function(){
  recognition.start();
}


recognition.onspeechend = function () {
  recognition.stop();
};
