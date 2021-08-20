import './style.css';
import Storage from '../storage.js';

const completedStatus = (item, arr, label) => {
  item.completed = !item.completed;
  const storage = Storage.get();
  storage[arr].checked = !storage[arr].checked;
  if (storage[arr].checked) {
    label.classList.add('task-name');
  } else {
    label.classList.remove('task-name');
  }
  Storage.set(storage);
};

export default completedStatus;