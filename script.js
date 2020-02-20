
var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM

var updateClock = function() {
var timeEventjs= document.getElementById ("timeEvent");
var lolcat= document.getElementById ("lolcat");
var image = "img/hello.jpg";
if (time == partyTime){

  image = "img/party.jpg";
    messageText = "IS PARTY TIME!!";
} else if (time == napTime) {
   image= "img/nap.jpg";
    messageText = "IS NAP TIME!";
} else if (time == lunchTime) {
  image= "img/lunch.jpg";
    messageText = "IS NOM NOM NOM TIME!!";
} else if (time == wakeupTime) {
  image="img/wakeup.jpg";
    messageText = "IS TIME TO GETTUP.";
} else if (time < noon) {
    messageText = "GOOD MORNING!";
} else if (time > evening) {
  image= "img/evening.jpg";
    messageText = "GOOD EVENING!";
} else {
  image= "img/morning.jpg";
    messageText = "GOOD AFTERNOON!";
}

timeEventjs.innerText= messageText;
lolcat.src=image;


var showCurrentTime = function()
{

var clock = document.getElementById('clock');
var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();
var meridian = "AM";
   // set hours
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
    if (hours > noon) 
    { 
        hours = hours - 12; 
    }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
 var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};
showCurrentTime();
};
updateClock();
var oneSecond = 1000; 
setInterval( updateClock, oneSecond);


var partyTimeButton = document.getElementById("partyTimeButton");
var isPartyTime = false;
 
var partyEvent = function() {
 
   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
      partyTimeButton.innerText = "PARTY TIME!";
      partyTimeButton.style.backgroundColor = "#222";
   } else {
      isPartyTime = false;
      time = new Date().getHours();
      partyTimeButton.innerText = "PARTY OVER";
      partyTimeButton.style.backgroundColor = "#0A8DAB";
   }
};
 
partyTimeButton.addEventListener("click", partyEvent);


var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var lunchEvent = function() {
    lunchTime = lunchTimeSelector.value;
};
lunchTimeSelector.addEventListener("change", lunchEvent);

var napTimeSelector = document.getElementById("napTimeSelector");
var napEvent = function() {
    napTime = napTimeSelector.value;
};
napTimeSelector.addEventListener("change", napEvent);




var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var wakeUpEvent = function() {
    wakeupTime = wakeUpTimeSelector.value;
};
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
 