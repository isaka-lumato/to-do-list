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

const edit = (e) => {
  const descriptionText = e.target.parentNode.childNodes[0].childNodes[1];
  const index = e.target.parentNode.getAttribute('data-id');
  const descriptionInput = document.createElement('input');
  descriptionInput.classList = 'editInput';
  e.target.parentNode.parentNode.childNodes[0].append(descriptionInput);
  descriptionInput.value = descriptionText.innerHTML;
  descriptionInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      descriptionText.innerText = descriptionInput.value;
      descriptionInput.remove();
      const storage = Storage.get();
      storage[index].description = descriptionText.innerText;
      Storage.set(storage);
    }
  });
};

export {
  newToDo,
  todoDelete,
  edit,
};