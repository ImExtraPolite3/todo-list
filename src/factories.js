function projects (projectName) {
  return { projectName };
}

function tasks (taskName, taskDescription, taskDueDate, taskPriority) {
  return { taskName, taskDescription, taskDueDate, taskPriority };
}

export { projects, tasks };