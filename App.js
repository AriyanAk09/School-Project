function hamBurger () {
const hamMenu = document.querySelector('.hamburger');
const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
});
}

// clock
let hrs = document.getElementById('hrs');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

setInterval(()=>{
  let currentTime = new Date();
  
  hrs.innerHTML = (currentTime.getHours()< 10 ? '0' : '') + currentTime.getHours();
  min.innerHTML = (currentTime.getMinutes()< 10 ? '0' : '') + currentTime.getMinutes();
  sec.innerHTML = (currentTime.getSeconds()< 10 ? '0' : '') + currentTime.getSeconds();
}, 1000)

// calendar
const day = document.getElementById('day');

const today = new Date();
const weekDays = [ 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه','شنبه',];

day.innerHTML = weekDays[today.getDay()];
