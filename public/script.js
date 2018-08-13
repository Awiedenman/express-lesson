const changeText = (event) => {
  event.preventDefault();
  document.querySelector('.paragraph').innerText = 'The button was clicked.';
  console.log('The button was clicked.')
}

document.querySelector('.button').addEventListener('click', changeText);
