let imageDiv = document.querySelector('#imageDiv');
imageNumber= Math.floor(Math.random()*9+1)
let img = document.createElement('img')
img.src = `./images/img${imageNumber}.jpg`
imageDiv.appendChild(img)
