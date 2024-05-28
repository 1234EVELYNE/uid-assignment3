let img = document.getElementById('slideshowimg')
let num = 1;
img.src = `../photo/detail/image${num}.png`
// click button for change products detail images
// Set two buttons for switching images in different directions. If the current image is image3, clicking the right button will jump directly to image1. If the current image is image1, clicking the left button will jump directly to image3. This ensures that the image will always be switched in a loop no matter which button is clicked. 
function slideshow(n) {
    if (n == 1) {
        if (num == 1) {
            num = 3
        } else {
            num--
        }
    }
    if (n == 2) {
        if (num == 3) {
            num = 1;
        } else {
            num++
        }
    
    }
    img.src = `../photo/detail/image${num}.png`
    console.log = "img"
}

// function of hiden and show for information by clicking more information buttion
function infobutton() {
    if (document.getElementById('info').style.display != 'block') {
        document.getElementById('info').style.display = 'block'
    } else {
        document.getElementById('info').style.display = 'none'

    }

}