let tasks = [];

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const task = taskInput.value.trim();

  if (task) {
    tasks.push({ task: task, completed: false });
    taskInput.value = '';
    renderTasks();
  }
}

function removeTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function toggleTaskCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function clearAllTasks() {
  tasks = [];
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((taskObj, index) => {
    const listItem = document.createElement('li');
    listItem.classList.toggle('completed', taskObj.completed);
    listItem.innerHTML = `
      ${taskObj.task}
      <div>
        <button onclick="toggleTaskCompletion(${index})">${
      taskObj.completed ? 'Undo' : 'Complete'
    }</button>
        <button onclick="removeTask(${index})">Remove</button>
      </div>
    `;
    taskList.appendChild(listItem);
  });
}
