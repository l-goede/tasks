const taskNameInput = document.querySelector(".form__input");
const formElement = document.querySelector(".form");
formElement.onsubmit = function (event) {
  // Prevent the default form submit behavior . sending data to a server on reloading page
  event.preventDefault();
  const checkedDateInput = document.querySelector(
    ".radio-group__input:checked"
  );
  if (!taskNameInput.value && !checkedDateInput) {
    alert("Please enter task and choose date");
    return;
  } else if (!taskNameInput.value) {
    alert("Plase enter task");
    return;
  } else if (!checkedDateInput) {
    alert("Please choose date");
    return;
  }

  const task = {
    name: taskNameInput.value,
    date: checkedDateInput.value,
  };

  //   // console.log(newTask);
  //   const taskJSON = JSON.stringify(task);
  //   localStorage.setItem("taskList", taskJSON);
  //
  // get existing taskList (localStorage) and parse to array + if storage empty e.g. parse for the first time

  let oldTaskListJSON = localStorage.getItem("taskList");
  if (oldTaskListJSON === null) {
    oldTaskListJSON = "[]";
  }
  const taskListParse = JSON.parse(oldTaskListJSON);

  // add item to array / extend array with item
  taskListParse.push(task);

  // signify and set to local storage
  const taskListJSON = JSON.stringify(taskListParse);
  localStorage.setItem("taskList", taskListJSON);

  function goToPage(href) {
    location.href = href;
  }
  goToPage("/dashboard.html");
};
