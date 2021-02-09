let image = document.getElementById("bulb")
image.addEventListener("click", switchPic)

function switchPic() {
  if (image.src.match("bulbOn")) {
    image.src = "img/bulbOff.jpg"
  } else {
    image.src = "img/bulbOn.jpg"
  }
}
