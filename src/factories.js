function projects (projectName) {
  let newProjectName = '';

  for(let i = 0; i < projectName.length; i++) {
    if (projectName[i] == ' ') {
      newProjectName += '-';
    } else {
      newProjectName += projectName[i];
    }
  }

  return { projectName, newProjectName };
}

function tasks (taskName, taskDescription, taskDueDate, taskPriority) {
  return { taskName, taskDescription, taskDueDate, taskPriority };
}

export { projects, tasks };