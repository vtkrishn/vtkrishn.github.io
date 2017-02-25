var now = new Date();

var date = document.getElementById('date');
var day = document.getElementById('day');
var month = document.getElementById('month');
var year = document.getElementById('year');

var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

var dateElem  = ((now.getDate()<10) ? "0" : "") + now.getDate();
var today = days[now.getDay()];
var mon = months[now.getMonth()];
var yr = 1900 + now.getYear();

date.textContent = dateElem;
day.textContent = today;
month.textContent = mon;
year.textContent = yr;

