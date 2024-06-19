import { projects, tasks } from "./factories";

let something = ''; 

function grabNames() {
  const getProjectName = document.getElementById('project-name');
  const grabNames = projects(getProjectName.value);

  return grabNames.projectName;
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

  return eachTaskContainer;
}

function displayTaskContainer() {
  const allTaskContainer = document.querySelector('.new-tasks-container');
  const allProjects = document.querySelectorAll('.project');
  const addTaskButton = document.querySelector('.add-task');

  allTaskContainer.appendChild(createTaskContainer());

  allProjects.forEach(eachProject => {
    eachProject.addEventListener('click', () => {
      something = eachProject.className.split(' ')[1];
      addTaskButton.classList.remove('hide');
      addTaskButton.classList.add('show');
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

function eachTask() {
  const taskNameContainer = document.createElement('p');
  const taskDescriptionContainer = document.createElement('p');
  const taskDueDateContainer = document.createElement('p');
  const taskPriority = document.createElement('p');

  taskNameContainer.textContent = grabTasksInfo().taskName;
  taskDescriptionContainer.textContent = grabTasksInfo().taskDescription;
  taskDueDateContainer.textContent = grabTasksInfo().taskDueDate;
  taskPriority.textContent = grabTasksInfo().taskPriority;

  displayEachTask(taskNameContainer, taskDescriptionContainer, taskDueDateContainer, taskPriority);
}

function displayEachTask(taskName, taskDescription, taskDueDate, taskPriority) {
  const task = document.querySelector(something);

  console.log(taskName);

  // task.appendChild(taskName);
  // task.appendChild(taskDescription);
  // task.appendChild(taskDueDate);
  // task.appendChild(taskPriority);
}

function displayNewProjectName() {
  const newProjectContainer = document.querySelector('.new-projects-container');
  const submitProjectName = document.querySelector('.submit-project-name');

  submitProjectName.addEventListener('click', () => {
    newProjectContainer.appendChild(getNewProjectsName());
    displayTaskContainer();
  })
}

function check() {
  const submitTaskName = document.querySelector('.submit-task-name');

  submitTaskName.addEventListener('click', () => {
    test();
  })
}

function test() {
  const task = document.querySelectorAll('.task');
  const submitTaskName = document.querySelector('.submit-task-name');

  submitTaskName.addEventListener('click', () => {
    task.forEach(eachNewTask => {
      if (something === eachNewTask.className.split(' ')[1]) {
        eachTask();
        // displayEachTask()
        // grabTasksInfo();
      }
    })
  })
}

export { displayNewProjectName, displayTaskContainer, displayEachTask, check }
