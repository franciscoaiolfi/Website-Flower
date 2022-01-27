let time = 3000,          // Algumas variaveis essencias, como index das imagens e a seleção de todas elas
    currentImageIndex = 0,
    images = document
                    .querySelectorAll("#slider img")
    max = images.length;



//Function para passar a imagem - preciso inserir na start
function nextImage(){

  images[currentImageIndex]
        .classList.remove("selected")

 currentImageIndex++

 if(currentImageIndex >= max)
        currentImageIndex = 0

  images[currentImageIndex]
          .classList.add("selected")
}



 // Vai startar alguma coisa    
function start(){        
setInterval(() => {
  nextImage()
}, time)
}

window.addEventListener("load", start); // Define o start para quando der load na pagina