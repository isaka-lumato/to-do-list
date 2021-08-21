import Storage from '../storage.js';

let arr = [];
if (Storage.isEmpty()) {
  Storage.set(arr);
}

class ToDo {
  constructor(description) {
    this.description = description;
    this.checked = false;
    this.index = null;
  }
}

const newToDo = (value) => {
  const todo = new ToDo(value);
  arr = Storage.get();
  arr.push(todo);
  Storage.set(arr);
};

const todoDelete = (btnId, btnNode) => {
  btnNode.remove();
  let storageGet = Storage.get();
  storageGet = storageGet.filter((elem) => elem.index !== Number(btnId));
  Storage.set(storageGet);
};

const edit = (edElement) => {
  edElement.setAttribute('contenteditable', 'true');
};

export {
  newToDo,
  todoDelete,
  edit,
};