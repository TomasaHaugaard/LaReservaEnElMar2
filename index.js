const boton = document.querySelector(".boton");
const menuUl = document.querySelector(".menu-ul");

boton.addEventListener("click", () => {
    menuUl.classList.toggle("menu-ul-visible");

    if (menuUl.classList.contains("menu-ul-visible")) {
        boton.setAttribute("aria-label", "cerrar menu");
        
    }else{
        boton.setAttribute("aria-label", "abrir menu");
    }
});

var slideIndex = 0;

showSlides();

function showSlides() {
       var i;
       var slides = document.getElementsByClassName("mySlides");
       for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
       }

       slideIndex++;
       if(slideIndex > slides.length) {slideIndex = 1}
       slides[slideIndex-1].style.display = "block";
       setTimeout(showSlides,2000);
}