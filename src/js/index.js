'use strict';

class ImageContainer {
  constructor() {
    this.images = document.querySelectorAll('.image-container .image');
  }

  log(){
    Array.from(this.images).forEach(function(element){
      console.log(element);
    });
  }

  setImageBackgrounds(){
    Array.from(this.images).forEach(function(element){
      element.style.backgroundImage = element.dataset.imageSrc;

      console.log(element.style.backgroundImage);
    });
  }
}
//
//
// document.onreadystatechange = function () {
//   let imageContainer = new ImageContainer;
//   imageContainer.setImageBackgrounds();
// }
