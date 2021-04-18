let countDownDate = new Date("Jul 3, 2021 00:00:00").getTime();
let x = setInterval (function() {
let now = new Date ().getTime();
  let distance = countDownDate - now ;
   let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
   document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  document.getElementById("daysLeft").innerHTML = days;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Bang Bang!";
  }
}, 1000);
