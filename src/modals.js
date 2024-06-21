import { eachTask } from "./display";

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
  const ifNoInfo = document.querySelector('.add-task-dialog > div > p');
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
      ifNoInfo.classList.remove('show');
      ifNoInfo.classList.add('hide');
    });
  })
}

function submitTaskName() {
  const submitTask = document.querySelector('.submit-task-name');
  const tasksDialog = document.querySelector('.add-task-dialog');
  const ifNoInfo = document.querySelector('.add-task-dialog > div > p');
  const getTaskName = document.getElementById('task-name');
  const getTaskDescription = document.getElementById('task-description');
  const getTaskDueDate = document.getElementById('task-due-date');
  const getTaskPriority = document.getElementById('priority');
  let num = 0;

  submitTask.addEventListener('click', () => {
    if (getTaskName.value !== '' && getTaskDueDate.value !== '') {
      tasksDialog.close();
      eachTask(num);
      getTaskName.value = '';
      getTaskDescription.value = '';
      getTaskDueDate.value = '';
      getTaskPriority.value = 'low';
      ifNoInfo.classList.remove('show');
      ifNoInfo.classList.add('hide');
      num++;
    } else {
      ifNoInfo.classList.remove('hide');
      ifNoInfo.classList.add('show');
    }
  })
}

export { openProjectModal, openTaskModal, closeModal, submitTaskName };