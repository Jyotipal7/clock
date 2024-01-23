var hour = document.querySelector(".hour");
var minute = document.querySelector(".minute");
var second = document.querySelector(".second");

setInterval(() => {
  var d = new Date();
  var hr = d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();
  var hr_rotation = 30 * hr + min / 2;
  var min_rotation = 6 * min;
  var sec_rotation = 6 * sec;

  hour.style.transform = `rotate(${hr_rotation}deg)`; 
  minute.style.transform = `rotate(${min_rotation}deg)`; 
  second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);

