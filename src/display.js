import { projects } from "./factories";

function getNewProjectsName() {
  const getProjectName = document.getElementById('project-name');
  const createButton = document.createElement('button');
  const grabNames = projects(getProjectName.value);

  createButton.textContent = grabNames.projectName;
  
  return createButton;
}

function displayNewProjectName() {
  const newProjectContainer = document.querySelector('.new-projects-container');
  const submitProjectName = document.querySelector('.submit-project-name');

  submitProjectName.addEventListener('click', () => {
    newProjectContainer.appendChild(getNewProjectsName());
  })
}

export { displayNewProjectName }
