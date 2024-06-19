function openProjectModal() {
  const addProjectsButton = document.querySelector('.add-projects'); 
  const projectsDialog = document.querySelector('.add-projects-dialog');

  addProjectsButton.addEventListener('click', () => {
    projectsDialog.showModal();
  });
};

function closeProjectModal() {
  const closeModal = document.querySelectorAll('.close-project-modal');
  const projectsDialog = document.querySelector('.add-projects-dialog');

  closeModal.forEach(eachClose => {
    eachClose.addEventListener('click', () => {
      projectsDialog.close();
    });
  })
}

export { openProjectModal, closeProjectModal };