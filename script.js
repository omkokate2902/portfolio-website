function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


function showSlides(slideshowId) {
  let slideIndex = 0;
  const slides = document.querySelectorAll(`#${slideshowId} .mySlides`);
  
  function cycleSlides() {
    // Hide all slides
    slides.forEach(slide => slide.style.display = "none");  
    
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";  
    setTimeout(cycleSlides, 2000); // Change image every 2 seconds
  }

  cycleSlides(); // Start cycling the slides
}

// Start the slideshows when the page loads
window.onload = function() {
  showSlides("slideshow1");
  showSlides("slideshow2");
  showSlides("slideshow3");
  showSlides("slideshow4");
};