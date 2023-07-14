const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const dias = document.getElementById('dias');

const relogio = setInterval(function time() {
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let sec = dateToday.getSeconds();
  let day = dateToday.getDate();

  if(day < 10) day = '0' + day;

  if(hr < 10) hr = '0' + hr;

  if(min < 10) min = '0' + min;

  if(sec < 10) sec = '0' + sec;

  dias.textContent = day
  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = sec;
})