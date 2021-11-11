window.onload = () =>{
	const navButton = document.querySelector(".navigation-menu");
	const navigation = document.querySelector(".navigation-right");
	const workdivision = document.querySelectorAll(".work-division-card");
	const imageAccueil = document.querySelector(".image");
	const image = document.querySelectorAll(".image-content img");
	const span = document.querySelectorAll(".navigation-menu  span");
	var slideIndex = 1;
	const rightButton = document.querySelector(".right svg");
	const leftButton = document.querySelector(".left svg" );
	var dots = document.querySelectorAll(".dot");
	for (var i = 0 ;i < image.length; i++) {
		image[i].addEventListener("click",function() {
				imageAccueil.classList.toggle('show');
		});
	}	
	for (var i = 0; i < workdivision.length; i++) {
		if (i%2 == 0) {
			workdivision[i].classList.toggle("right");
		}else{
			workdivision[i].classList.toggle("left");
		}
		
	}
	navButton.addEventListener("click",function () {
		navigation.classList.toggle("show");
		span[0].classList.toggle("rotationleft");
		span[1].classList.toggle("none");
		span[2].classList.toggle("rotationright");
	});
	rightButton.addEventListener("click",function() {
		Nextimage(1)
	});
	leftButton.addEventListener("click",function() {
		Nextimage(-1)
	});
	for(let i = 0 ; i<dots.length;i++){
		dots[i].addEventListener('click',function(){
			imageActuel(i+1);
		});
	}
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
	this.onscroll = function(){
		if(document.documentElement.scrollTop > 500 ){
			navigation.className = navigation.className.replace(" show","")
			for(i = 0 ; i < span.length; i++) {
				span[i].className = "";
			}
		}
	}
}