import './style.css';

const completedStatus = (item, taskList) => {
  item.completed = !item.completed;
};

export default completedStatus;
