let username;
let user;

document.addEventListener("DOMContentLoaded", ()=>{
  toggleModal()
})

const toggleModal = () => {
  const loginButton = document.querySelector("#login-button");
  loginButton.addEventListener("click", () => {
    renderModal();
  })
}


const renderModal = () => {
  const modal = document.querySelector("#login-modal");
  const modalBackground = document.querySelector(".modal-background");
  const submitButton = document.querySelector("#submit-button");

  modal.classList.add("is-active");

  // Untoggles the modal
  modalBackground.addEventListener("click", () => untoggleModal(modal));

  // Signs user in
  submitButton.addEventListener("click", () => {
    untoggleModal(modal);
    createUser();
  })

}

const createUser = () => {
  const usernameField = document.querySelector("#username-field");
  username = usernameField.value;

  fetch(URL+'/users', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({username: username})
  })
  .then(response => response.json())
  .then(json => {user = json})
}

const untoggleModal = (modal) => {
  modal.classList.remove("is-active");
}
