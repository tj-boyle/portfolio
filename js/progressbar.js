/**
 * ProgressBar for jQuery
 *
 * @version 1 (29. Dec 2012)
 * @author Ivan Lazarevic
 * @requires jQuery
 * @see http://workshop.rs
 *
 * @param  {Number} percent
 * @param  {Number} $element progressBar DOM element
 */
function progressBar(percent, $element, caption) {
	var progressBarWidth = percent * $element.width() / 100;
	$element.find('div').animate({ width: progressBarWidth }, 500).html(caption/** + percent*/ +"&nbsp;");
}

var progressBars = new Array();
progressBars[0] = "setTimeout(function(){progressBar(50, $('#college'), '50%');},1500); "

$(document).ready(function(){
    $(".about_me").click(function(){
	  	setTimeout(function(){progressBar(50, $('#college'), '50%');},1500); 
		setTimeout(function(){progressBar(50, $('#tc'), '2 years');},1700); 
		setTimeout(function(){progressBar(25, $('#notes'), '1 year');},1900); 
		setTimeout(function(){progressBar(25, $('#rc'), '1 year');},2100); 
		setTimeout(function(){progressBar(30, $('#life'), '30%');},2300);
  	});


    $(".unload").click(function(){
	  	setTimeout(function(){progressBar(0, $('#college'), '');},300); 
		setTimeout(function(){progressBar(0, $('#tc'), '');},300); 
		setTimeout(function(){progressBar(0, $('#notes'), '');},300); 
		setTimeout(function(){progressBar(0, $('#rc'), '');},300); 
		setTimeout(function(){progressBar(0, $('#life'), '');},300);
  	});

});
