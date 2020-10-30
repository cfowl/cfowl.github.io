// get all images with data-src from html
let imagesToLoad = document.querySelectorAll('img[data-src]');

// constant to define image options, threshold set to 1 to allow for easier demonstration of loading
const imageOptions = {
    threshold: 1
};

// function that loads an images, sets src to data-src, after loading removes data-src
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

if('IntersectionObserver' in window) {  // if IntersectionObserver is suported
    // creates new instance of InstersectionObserver and loops through items and loads them
    const imageObserver = new IntersectionObserver((items, imageObserver) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          imageObserver.unobserve(item.target);
        }
      });
    }, imageOptions );

    // loops through list of all images with data-src and observes them
    imagesToLoad.forEach((img) => {
      imageObserver.observe(img);
    });

  } else {  // if IntersectionObserver not supported
      // loops through list of all images with data-src and loads them
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  } 