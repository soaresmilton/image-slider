let images = [
  'image1.png', 'image2.png', 'image3.png', 'image4.png'
]
let i = 0;

let canvas = document.getElementById('canvas');
canvas.style.background = `url(./images/${images[0]})`;

let arrows = document.querySelectorAll('.arrow');

arrows.forEach((arrow) => {

  arrow.addEventListener('click', (event) => {
    if (event.target.id === "left") {
      i--;
      if (i < 0) {
        i = images.length - 1;
      }
      canvas.style.background = `url(./images/${images[i]})`;
    }else if (event.target.id === "right") {
      i ++;

      if (i >= images.length) {
        i = 0
      }

      canvas.style.background = `url(./images/${images[i]})`;
    }

  })
})