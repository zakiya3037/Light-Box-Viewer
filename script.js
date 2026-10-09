const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const closeBtn = document.querySelector("#close-btn");

// Open the lightbox when a thumbnail is clicked
galleryItems.forEach(function(item) {
  item.addEventListener("click", function() {
    lightboxImage.src = item.src.replace("-thumbnail", "");
    lightbox.style.display = "flex";
  });
});

// Close the lightbox when the close button is clicked
closeBtn.addEventListener("click", function() {
  lightbox.style.display = "none";
});
lightbox.addEventListener("click", function() {
  lightbox.style.display = "none";
});