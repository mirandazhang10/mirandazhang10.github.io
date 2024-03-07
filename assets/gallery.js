var viewMode = false; 
var imgClicked = null;

function imageOnClick(e) {
    const closeBg = document.getElementById("view-bg");

    if (!viewMode) {
        viewMode = true;
        imgClicked = e.target.cloneNode(true);
        imgClicked.classList.remove("gallery-img");
        imgClicked.classList.add("clicked-img");
        closeBg.appendChild(imgClicked);
        document.body.classList.toggle("view-mode");
        closeBg.classList.toggle("view-bg-none");
        closeBg.classList.toggle("view-bg-img");
    }
}

const galleryView = () => {
    const closeBg = document.getElementById("view-bg");
    const images = document.getElementsByClassName("gallery-img");
  
    closeBg.addEventListener("click", (event) => {
      if (viewMode) {
        viewMode = false; 
        if (imgClicked != null) {
            imgClicked.remove();
            imgClicked = null;
        }
        closeBg.classList.toggle("view-bg-none");
        closeBg.classList.toggle("view-bg-img");
        document.body.classList.toggle("view-mode");
      }
    });

    for (var i = 0; i < images.length; i++) {
        images[i].addEventListener('click', imageOnClick, false);
    }
};

document.addEventListener("DOMContentLoaded", (event) => {
    try {
      galleryView();
    } catch (e) {
      console.error(e);
    }
});