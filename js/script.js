const btnSubmit = document.querySelector("#submit");
const contentForm = document.forms[0];

function validateForm(event) {
  for (let i = 0; i < contentForm.length; i++) {
    const inputEmpty = contentForm[i];
    const spanMsg = document.querySelectorAll(".error-msg")[i];

    if (inputEmpty.value === "") {
      inputEmpty.classList.add("invalid");
      spanMsg.classList.add("invalid");
      if (inputEmpty.id === "email") {
        inputEmpty.value = "";
        inputEmpty.placeholder = "email@example.com";
      } else {
        inputEmpty.placeholder = "";
      }
      event.preventDefault();
    }
    function invalidInput(event) {
      spanMsg.classList.add("invalid");
      inputEmpty.classList.add("invalid");
      inputEmpty.value = "";
      inputEmpty.placeholder = "email@example.com";
      event.preventDefault();
    }
    inputEmpty.addEventListener("invalid", invalidInput);
  }
}
btnSubmit.addEventListener("click", validateForm);
