import { projects, tasks } from "./factories";

let something = 'default'; 
let ifTrue = false;

function grabNames() {
  const getProjectName = document.getElementById('project-name');
  const grabNames = projects(getProjectName.value);

  return grabNames.newProjectName;
}

function getNewProjectsName() {
  const createButton = document.createElement('button');
  createButton.classList.add('project')
  createButton.classList.add(grabNames());
  createButton.textContent = grabNames();
  
  return createButton;
}

function createTaskContainer() {
  const eachTaskContainer = document.createElement('div');
  eachTaskContainer.classList.add('task');
  eachTaskContainer.classList.add(grabNames());
  eachTaskContainer.classList.add('hide');

  return eachTaskContainer;
}

function displayTaskContainer() {
  const allTaskContainer = document.querySelector('.new-tasks-container');
  const allProjects = document.querySelectorAll('.project');

  allTaskContainer.appendChild(createTaskContainer());

  allProjects.forEach(eachProject => {
    eachProject.addEventListener('click', () => {
      something = eachProject.className.split(' ')[1];
      changeActiveProject();
      hideOtherProjectTask();
    })
  })
}

function grabTasksInfo() {
  const taskName = document.getElementById('task-name');
  const taskDescription = document.getElementById('task-description');
  const taskDueDate = document.getElementById('task-due-date');
  const taskPriority = document.getElementById('priority');

  const grabTasksInfo = tasks(taskName.value, taskDescription.value, taskDueDate.value, taskPriority.value);

  return grabTasksInfo;
}

function eachTask(num) {
  const finishTask = document.createElement('input');
  finishTask.classList.add('finish-task' + num);
  const taskNameContainer = document.createElement('h3');
  const taskDescriptionContainer = document.createElement('div');
  const taskDueDateContainer = document.createElement('p');
  const taskPriority = document.createElement('p');
  const removeTask = document.createElement('button');
  removeTask.classList.add('delete-task' + num);
  const topDiv = document.createElement('div');
  const bottomDiv = document.createElement('div');

  taskNameContainer.textContent = grabTasksInfo().taskName;
  taskDescriptionContainer.textContent = grabTasksInfo().taskDescription;
  taskDueDateContainer.textContent = `Due Date: ${grabTasksInfo().taskDueDate}`;
  taskPriority.textContent = `Priority: ${grabTasksInfo().taskPriority}`;
  removeTask.textContent = 'delete';
  finishTask.type = 'checkbox';

  // if (displayEachTask(finishTask, taskNameContainer, taskDescriptionContainer, taskDueDateContainer, taskPriority, removeTask, topDiv, bottomDiv, num) == true) {
  //   // displayEachTask(finishTask, taskNameContainer, taskDescriptionContainer, taskDueDateContainer, taskPriority, removeTask, topDiv, bottomDiv, num);
  //   console.log()
  //   return true;
  // } else {
  //   // displayEachTask(finishTask, taskNameContainer, taskDescriptionContainer, taskDueDateContainer, taskPriority, removeTask, topDiv, bottomDiv, num);
  //   return false;
  // }
  console.log(displayEachTask(finishTask, taskNameContainer, taskDescriptionContainer, taskDueDateContainer, taskPriority, removeTask, topDiv, bottomDiv, num));  
}

function displayEachTask(finishTask, taskName, taskDescription, taskDueDate, taskPriority, deleteTask, topDiv, bottomDiv, num) {
  const task = document.querySelectorAll('.task');

  task.forEach(eachNewTask => {
    if (something === eachNewTask.className.split(' ')[1]) {
      if (taskName.textContent != '' && taskDueDate.textContent != '') {
        const eachTaskDiv = document.createElement('div');
        eachNewTask.appendChild(eachTaskDiv);
        eachTaskDiv.appendChild(topDiv);
        topDiv.appendChild(finishTask);
        topDiv.appendChild(taskName);
        topDiv.appendChild(deleteTask);
        eachTaskDiv.appendChild(taskDescription);
        eachTaskDiv.appendChild(bottomDiv);
        bottomDiv.appendChild(taskDueDate);
        bottomDiv.appendChild(taskPriority);
        checkFinished(eachTaskDiv, finishTask);
        deleteTaskButton(eachNewTask, eachTaskDiv, num);
        ifTrue = true;
      } else {
        ifTrue = false;
      }
    }
  })
}

function changeActiveProject() {
  const allProjects = document.querySelectorAll('.project');

  allProjects.forEach(eachProject => {
    if(something === eachProject.className.split(' ')[1]) {
      eachProject.classList.remove('remove-active');
      eachProject.classList.add('active-tab');
    } else {
      eachProject.classList.remove('active-tab');
      eachProject.classList.add('remove-active');
    }
  })
}

function hideOtherProjectTask() {
  const task = document.querySelectorAll('.task');

  task.forEach(eachNewTask => {
    if (something === 'default') {
      eachNewTask.classList.remove('hide');
      eachNewTask.classList.add('show');
    } else if (something === eachNewTask.className.split(' ')[1]) {
      eachNewTask.classList.remove('hide');
      eachNewTask.classList.add('show');
    } else {
      eachNewTask.classList.remove('show');
      eachNewTask.classList.add('hide');
    }
  })
}

function deleteTaskButton(eachTask, newDiv, num) {
  const deleteTaskButton = document.querySelector('.delete-task' + num);

  deleteTaskButton.addEventListener('click', () => {
    eachTask.removeChild(newDiv);
  })
}

function checkFinished(eachTaskDiv, finishTask) {
  finishTask.addEventListener('click', () => {
    if (finishTask.checked === true) {
      eachTaskDiv.style.backgroundColor = 'green';
    } else {
      eachTaskDiv.style.background = 'none';
    }
  })
}

function displayNewProjectName() {
  const newProjectContainer = document.querySelector('.new-projects-container');
  const submitProjectName = document.querySelector('.submit-project-name');

  submitProjectName.addEventListener('click', () => {
    newProjectContainer.appendChild(getNewProjectsName());
    displayTaskContainer();
  })
}

export { displayNewProjectName, eachTask, hideOtherProjectTask }