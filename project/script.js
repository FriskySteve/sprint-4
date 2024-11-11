document.getElementById("add-task").addEventListener("click", addTask);

function addTask() {
  const task = getTaskInput();
  const alertMsg = "Nazwa zadania nie może być pusta.";

  if (task) {
    const $todoList = document.getElementById("todo-list");
    const $newTask = createTaskElement(task.trim());
    $todoList.appendChild($newTask);
    clearInput();
  } else {
    alert(alertMsg);
  }
}

function getTaskInput() {
  return document.getElementById("input").value;
}

function clearInput() {
  document.getElementById("input").value = "";
}

function createTaskElement(taskText) {
  const $newTask = document.createElement("li");
  const $taskContent = createTaskContent(taskText);
  const $editButton = createEditButton($taskContent);
  const $deleteButton = createDeleteButton($newTask);

  $newTask.append($taskContent, $editButton, $deleteButton);
  return $newTask;
}

function createTaskContent(taskText) {
  const $taskContent = document.createElement("span");
  $taskContent.textContent = taskText;
  return $taskContent;
}

function createEditButton($taskContent) {
  const $editButton = document.createElement("button");
  $editButton.textContent = "Edytuj";
  $editButton.addEventListener("click", () =>
    enableEditMode($taskContent, $editButton)
  );
  return $editButton;
}

function createDeleteButton($taskElement) {
  const $deleteButton = document.createElement("button");
  $deleteButton.textContent = "Usuń";
  $deleteButton.addEventListener("click", () => $taskElement.remove());
  return $deleteButton;
}

function enableEditMode($taskContent, $editButton) {
  $taskContent.setAttribute("contenteditable", "true");
  $taskContent.focus();
  const $confirmEditButton = createConfirmEditButton($taskContent, $editButton);
  $editButton.replaceWith($confirmEditButton);
}

function createConfirmEditButton($taskContent, $editButton) {
  const $confirmEditButton = document.createElement("button");
  $confirmEditButton.textContent = "Zatwierdź zmiany";
  $confirmEditButton.addEventListener("click", () =>
    confirmEdit($taskContent, $confirmEditButton, $editButton)
  );
  return $confirmEditButton;
}

function confirmEdit($taskContent, $confirmEditButton, $editButton) {
  const alertMsg = "Nazwa zadania nie może być pusta.";

  if ($taskContent.textContent.trim() !== "") {
    $taskContent.removeAttribute("contenteditable");
    $confirmEditButton.replaceWith($editButton);
  } else {
    alert(alertMsg);
    $taskContent.focus();
  }
}
