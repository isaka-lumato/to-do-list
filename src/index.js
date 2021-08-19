import './style.css';

const arr = [
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

const display = () => {
  listParent.innerHTML = '';
  arr.forEach((task) => {
    const list = `
    <div class="eachTask">
      <div class="group-list">
      <input type="checkbox" class="box" id="list-box" name="list-box">
        <p class="task-name">${task.description}</p>
      </div> 
      <button class="menu-icon" id="${task.index}"><i class="fas fa-ellipsis-v"></i></button>
    </div>
    <hr>`;
    listParent.innerHTML += list;
  });
};

window.onload = display();