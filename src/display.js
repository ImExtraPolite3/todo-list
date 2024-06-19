import { projects } from "./factories";

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
  })
}

export { displayNewProjectName, displayTaskContainer }
