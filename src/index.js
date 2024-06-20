import './style.css';
import { openProjectModal, openTaskModal, closeModal, submitTaskName } from './modals';
import { displayNewProjectName } from './display';

displayNewProjectName();
openProjectModal();
openTaskModal();
closeModal();
submitTaskName();