import './style.css';
import completedStatus from './completed.js';
import Storage from '../storage.js';
import {
  newToDo,
  todoDelete,
  edit,
} from './newFunctionality.js';

const userInput = document.querySelector('#task');
const form = document.querySelector('#my-form');
const button = document.querySelector('#enter-task');
const delAllBut = document.querySelector('#all-completed');
const listParent = document.querySelector('#all-tasks');
const arr = [];
if (Storage.isEmpty()) {
  Storage.set(arr);
}

const display = () => {
  const local = Storage.get();
  let index = 0;
  listParent.innerHTML = '';
  local.forEach((task) => {
    const eachTask = document.createElement('div');
    eachTask.className = 'eachTask';
    eachTask.setAttribute('data-id', index);
    local[index].index = index;
    index += 1;

    const list = document.createElement('div');
    list.className = 'group-list';

    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('class', 'box');
    input.id = task.id;
    input.checked = task.completed;
    /* eslint-disable */
    input.addEventListener('change', (e) => {
      completedStatus(e.target, e.target.parentNode.parentNode.getAttribute('data-id'), label);
    });
    /* eslint-enable */
    list.appendChild(input);

    const editBtn = document.createElement('button');
    const label = document.createElement('label');
    editBtn.innerHTML = 'edit';
    label.innerHTML = `${task.description}`;
    label.className = 'task-name';
    list.appendChild(label);

    eachTask.appendChild(list);

    const button = document.createElement('button');
    button.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    button.className = 'menu-icon';
    eachTask.appendChild(editBtn);
    eachTask.appendChild(button);

    const separatingLine = document.createElement('hr');
    listParent.appendChild(eachTask);
    listParent.appendChild(separatingLine);
    Storage.set(local);
    const btnId = button.parentNode.getAttribute('data-id');
    const btnNode = button.parentNode;
    if (task.checked) {
      label.classList.add('task-name');
      input.checked = true;
    }

    button.addEventListener('click', () => {
      todoDelete(btnId, btnNode);
      display();
    });

    editBtn.addEventListener('click', (e) => {
      edit(e);
    });
  });
};

button.addEventListener('click', (e) => {
  e.preventDefault();
  newToDo(userInput.value);
  display();
  form.reset();
});

delAllBut.addEventListener('click', () => {
  let allStorage = Storage.get();
  allStorage = allStorage.filter((elem) => elem.checked !== true);
  Storage.set(allStorage);
  display();
});

window.onload = display();