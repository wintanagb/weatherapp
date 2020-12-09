class Login{
  constructor(){
    this.loginButton = document.querySelector("#login-button");
    this.modal = document.querySelector("#login-modal");

  }
  renderModal(){
    const modalBackground = document.querySelector(".modal-background");
    const form = document.querySelector(".form")
    // Untoggles the modal
    modalBackground.addEventListener("click", () => this.untoggleModal());

    // Signs user in
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        this.untoggleModal();
        userObject.createUser();
        form.reset();
    })
  }
  untoggleModal(){
    this.modal.classList.remove("is-active");
  }
  showModal(){
      this.modal.classList.add("is-active");
  }
  loginButtonEvent(){
    this.loginButton.addEventListener("click", () => {
      if (userObject.checkCurrentUser()){  // Log out
        user = null;

        this.toggleLoginButton();
        dropDownObject.removeAllCityButtons();
        weatherObject.clearShowArea();
      }
      else {this.showModal()}
    })
  }
  toggleLoginButton(){
    if (userObject.checkCurrentUser()){
        this.loginButton.textContent = "Logout"
        if (user.locations){user.locations.forEach(location => dropDownObject.createCityButton(location))}
    }else {
      this.loginButton.textContent = "Login"
    }
  }
}
