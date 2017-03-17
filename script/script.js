$(window).load(function() {
    $("#overlay").delay(2000).fadeOut();
});

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

document.body.onload = function (){
	var dateComp = document.getElementsByClassName('dateComp')[0];
	dateComp.classList.add('end');
}

var resumeScroll = function (){
var resume = document.getElementsByClassName('resume')[0];
resume.scrollIntoView({block: "start", behavior: "smooth"});
	resume.classList.add('horizTranslate');
}

function tempCtrl($scope){
	$scope.value = 17;
}
