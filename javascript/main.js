window.onload = () =>{
	const navButton = document.querySelector(".navigation-menu svg");
	const navigation = document.querySelector(".navigation-right");
	var slideIndex = 1;
	const rightButton = document.querySelector(".right svg");
	const leftButton = document.querySelector(".left svg" );
	var dots = document.querySelectorAll(".dot");
	navButton.addEventListener("click",function () {
		navigation.classList.toggle("show");
	});
	rightButton.addEventListener("click",function() {
		Nextimage(1)
	});
	leftButton.addEventListener("click",function() {
		Nextimage(-1)
	});

	showSlides(slideIndex);
	function Nextimage(n) {
		showSlides(slideIndex += n);
	}
	function imageActuel(n) {
		showSlides(slideIndex = n);
	}
	function showSlides(n) {
  			var i;
  			var slides = document.getElementsByClassName("image-content");

  			if (n > slides.length) {
  				slideIndex = 1
  			}
  			if (n < 1) {
  				slideIndex = slides.length
  			}
  			for (i = 0; i < slides.length; i++) {
     			 slides[i].style.display = "none";
  			}
  			 for (i = 0; i < dots.length; i++) {
      				dots[i].className = dots[i].className.replace(" active", "");
  			}
 	 		slides[slideIndex-1].style.display = "block";
 	 		dots[slideIndex-1].className += " active";
	} 
}