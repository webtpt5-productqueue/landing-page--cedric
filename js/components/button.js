class LinkButton {
  constructor(buttonElement) {
    // TODO - update once React app has been deployed
    this.REACT_APP_LINK = 'https://productqueue-webapp.now.sh/'
    this.buttonElement = buttonElement
    this.buttonElement.addEventListener('click', () => this.navigate())
  }

  navigate() {
    window.location.assign(this.REACT_APP_LINK)
  }
}

const linkButtons = document.querySelectorAll('.button')
linkButtons.forEach(button => new LinkButton(button))
