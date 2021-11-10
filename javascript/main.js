window.onload = () =>{
	const navButton = document.querySelector(".navigation-menu svg");
	const navigation = document.querySelector(".navigation-right");
	navButton.addEventListener("click",function () {
		navigation.classList.toggle("show");
		this.src.toggle(".https://mattfarley.ca/")
	})
}