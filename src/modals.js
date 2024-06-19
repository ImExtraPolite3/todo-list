function openProjectModal() {
  const addProjectsButton = document.querySelector('.add-projects'); 
  const projectsDialog = document.querySelector('.add-projects-dialog');

  addProjectsButton.addEventListener('click', () => {
    projectsDialog.showModal();
  });
};

function closeProjectModal() {
  const closeModal = document.querySelectorAll('.close-modal');
  const projectsDialog = document.querySelector('.add-projects-dialog');
  const getProjectName = document.getElementById('project-name');

  closeModal.forEach(eachClose => {
    eachClose.addEventListener('click', () => {
      projectsDialog.close();
      getProjectName.value = '';
    });
  })
}

export { openProjectModal, closeProjectModal };