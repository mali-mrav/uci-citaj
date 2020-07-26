$(document).ready(function () {
	$('select').selectpicker();
	$('select').change(function () {
		$('.output').html($(this).val());
	});
});

/*   ISPOD JE SCRIPTA ZA MJENJANJE AJETA U SURAMA    */
/*   ISPOD JE SCRIPTA ZA MJENJANJE AJETA U SURAMA    */
/*   ISPOD JE SCRIPTA ZA MJENJANJE AJETA U SURAMA    */

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,10000);

function nextSlide(){
	slides[currentSlide].className = 'slide';
	currentSlide = (currentSlide+1)%slides.length;
	slides[currentSlide].className = 'slide showing';
}

var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideshow(){
	pauseButton.innerHTML = 'Pokreni';
	playing = false;
	clearInterval(slideInterval);
}

function playSlideshow(){
	pauseButton.innerHTML = 'Zaustavi';
	playing = true;
	slideInterval = setInterval(nextSlide,10000);
}

pauseButton.onclick = function(){
	if(playing){ pauseSlideshow(); }
	else{ playSlideshow(); }
};


/*                        */
/*                        */
/*                        */