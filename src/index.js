import './style.css';
import { openProjectModal, openTaskModal, closeModal, submitTaskName } from './modals';
import { displayNewProjectName, check } from './display';

displayNewProjectName();
openProjectModal();
openTaskModal();
closeModal();
submitTaskName();
check();
