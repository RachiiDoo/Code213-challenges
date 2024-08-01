const tasks = document.querySelector(".tasks");
const addButton = document.querySelector(".add");
const taskTitle = document.querySelector("input");

addButton.addEventListener("click", () => {
  const taskValue = taskTitle.value.trim(); // Trimm the white space from the input field

  if (taskValue === "") {
    alert("Task cannot be empty !");
    return;
  }

  const tasksArray = document.querySelectorAll(".task");

  // Creating a new div for every new task
  const taskElement = document.createElement("div");

  // Adding the className to the new div

  if (tasksArray.length % 2 === 0) {
    taskElement.className =
      "task flex p-4 items-center justify-between w-full yellowColor rounded-2xl";
  } else {
    taskElement.className =
      "task flex p-4 items-center justify-between w-full orangeColor rounded-2xl";
  }

  // Adding the html to the new div
  taskElement.innerHTML = `
  <p class="task-paragraph text-2xl font-bold text-black">${taskTitle.value}</p>
  <div class="flex gap-2 items-center">
    <button class="delete text-white font-thin px-2 py-1 rounded-2xl deleteButtonColor">DELETE</button>
    <button class="edit text-white font-thin px-2 py-1 rounded-2xl editButtonColor">EDIT</button>
  </div>
  `;

  // We used appendChild to add the new task on list of tasks
  tasks.appendChild(taskElement);

  // Clear the input field
  taskTitle.value = "";

  // adding the eventListener to the delete button
  const deleteButton = taskElement.querySelector(".delete");
  deleteButton.addEventListener("click", () => {
    taskElement.remove();
  });

  // adding the eventListener to the edit button
  const editButton = taskElement.querySelector(".edit");
  const taskP = taskElement.querySelector(".task-paragraph");
  editButton.addEventListener("click", () => {
    taskTitle.value = taskP.textContent;
    taskElement.remove();
  });
});
