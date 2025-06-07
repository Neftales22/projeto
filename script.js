function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
  //se tiver light mode, adicionar a imagem light
  img.setAttribute('src', './assents/avatar-light.png')
    } else {
  // se estiver sem o light mode ativado 
  img.setAttribute('src', './assents/avatar.png')
  }
  
}
