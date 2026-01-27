function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("Light")

  const img = document.querySelector("#perfil img")

  if (html.classList.contains("Light")) {
    img.setAttribute("src", "./assets/AvatarLight.png")
  } else {
    img.setAttribute("src", "./assets/avatar-dark.png")
  }
}
