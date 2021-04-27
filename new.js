const taskNameInput = document.querySelector(".form__input");
const formElement = document.querySelector(".form");
formElement.onsubmit = function (event) {
  // Prevent the default form submit behavior . sending data to a server on reloading page
  event.preventDefault();
  const checkedDateInput = document.querySelector(
    ".radio-group__input:checked"
  );

  console.log(taskNameInput.value, checkedDateInput.value);
};
