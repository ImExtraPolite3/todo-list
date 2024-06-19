import { displayEachTask, grabTasksInfo } from "./display";

function openProjectModal() {
  const addProjectsButton = document.querySelector('.add-projects'); 
  const projectsDialog = document.querySelector('.add-projects-dialog');

  addProjectsButton.addEventListener('click', () => {
    projectsDialog.showModal();
  });
};

function openTaskModal() {
  const addTaskButton = document.querySelector('.add-task'); 
  const tasksDialog = document.querySelector('.add-task-dialog');

  addTaskButton.addEventListener('click', () => {
    tasksDialog.showModal();
  });
}

function closeModal() {
  const closeModal = document.querySelectorAll('.close-modal');
  const projectsDialog = document.querySelector('.add-projects-dialog');
  const tasksDialog = document.querySelector('.add-task-dialog');
  const getProjectName = document.getElementById('project-name');
  const getTaskName = document.getElementById('task-name');
  const getTaskDescription = document.getElementById('task-description');
  const getTaskDueDate = document.getElementById('task-due-date');
  const getTaskPriority = document.getElementById('priority');

  closeModal.forEach(eachClose => {
    eachClose.addEventListener('click', () => {
      projectsDialog.close();
      tasksDialog.close();
      getProjectName.value = '';
      getTaskName.value = '';
      getTaskDescription.value = '';
      getTaskDueDate.value = '';
      getTaskPriority.value = 'low';
    });
  })
}

function submitTaskName() {
  const submitTask = document.querySelector('.submit-task-name');
  const tasksDialog = document.querySelector('.add-task-dialog');
  const getTaskName = document.getElementById('task-name');
  const getTaskDescription = document.getElementById('task-description');
  const getTaskDueDate = document.getElementById('task-due-date');
  const getTaskPriority = document.getElementById('priority');

  grabTasksInfo();

  submitTask.addEventListener('click', () => {
    tasksDialog.close();
    displayEachTask();
    getTaskName.value = '';
    getTaskDescription.value = '';
    getTaskDueDate.value = '';
    getTaskPriority.value = 'low';
  })
}

export { openProjectModal, openTaskModal, closeModal, submitTaskName };