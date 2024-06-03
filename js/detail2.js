// click button for change products detail images
// Set two buttons for switching images in different directions. If the current image is image3, clicking the right button will jump directly to image1. If the current image is image1, clicking the left button will jump directly to image3. This ensures that the image will always be switched in a loop no matter which button is clicked. 
var img2 = document.getElementsByClassName('slideshowimg2')[0]
img2.src = `./photo/image5.jpg`
var num2 = 5;


function slideshow2(n) {
    if (n == 1) {
        if (num2 == 4) {
            num2 = 6
        } else {
            num2--
        }
    }
    if (n == 2) {
        if (num2 == 6) {
            num2 = 4;
        } else {
            num2++
        }
    
    }
    img2.src = `./photo/image${num2}.jpg`
    console.log = "img"
}