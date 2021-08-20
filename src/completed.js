import './style.css';

const completedStatus = (item, arr) => {
  item.completed = !item.completed;
  localStorage.setItem('arr', JSON.stringify(arr));
  arr = JSON.parse(localStorage.getItem('arr'));

};

export default completedStatus;
