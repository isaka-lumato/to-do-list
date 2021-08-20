import './style.css';
import completedStatus from './completed.js';

let arr = [
  {
    description: 'do exercises before lunch',
    completed: false,
    index: 0,
  },
  {
    description: 'complete all assignments',
    completed: false,
    index: 1,
  },
  {
    description: 'clean my house',
    completed: false,
    index: 2,
  },
];
const listParent = document.querySelector('#all-tasks');

const getData = () => {
  if (localStorage.getItem('arr') !== null) {
    arr = JSON.parse(localStorage.getItem('arr'));
  }
};


const display = () => {
  const local = localStorage.getItem('arr');
  if (local !== null) {
    arr = JSON.parse(localStorage.getItem('arr'));
  } else {
    localStorage.setItem('arr', JSON.stringify(arr));
    getData();
  }

  listParent.innerHTML = '';
  arr.forEach((task) => {
      const eachTask = document.createElement('div');
    eachTask.className = 'eachTask';

    const list = document.createElement('div');
    list.className = 'group-list';

    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('class', 'box');
    input.id = task.id;
    input.checked = task.completed;
    /* eslint-disable */
    input.addEventListener('change', () => {
      completedStatus(task, arr);
    });
    /* eslint-enable */
    list.appendChild(input);

    const label = document.createElement('label');
    label.innerHTML = `${task.description}`;
    label.className = 'task-name';
    list.appendChild(label);

    eachTask.appendChild(list);

    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-ellipsis-v">';
    button.className = 'menu-icon';
    eachTask.appendChild(button);

    const separatingLine = document.createElement('hr');
    listParent.appendChild(eachTask);
    listParent.appendChild(separatingLine);

  });
};

window.onload = display();