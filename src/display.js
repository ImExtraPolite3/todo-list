import { projects } from "./factories";

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
    task.forEach(eachTask => {
      if (something === eachTask.className.split(' ')[1]) {
        const testDiv = document.createElement('p');
        testDiv.textContent = 'sucess';
        eachTask.appendChild(testDiv);
      }
    })
  })
}

export { displayNewProjectName, displayTaskContainer, check }
