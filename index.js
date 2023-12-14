document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.getElementById("aboutSection");

    // Function to calculate the luminance of a color
    function calculateLuminance(color) {
      const rgb = color.match(/\d+/g).map(Number);
      return 0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2];
    }

    // Function to set the text color based on background luminance
    function setTextColor() {
      const bgColor = window.getComputedStyle(aboutSection).backgroundColor;
      const luminance = calculateLuminance(bgColor);

      // Choose a contrasting text color
      const textColor = luminance > 128 ? "#000" : "#fff";

      aboutSection.style.color = textColor;
    }

    // Initial call to set text color
    setTextColor();

    // Update text color when the window is resized (optional)
    window.addEventListener("resize", setTextColor);
  });


  let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
} 
