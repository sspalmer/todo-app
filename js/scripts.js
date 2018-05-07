// Access the input's value and the uls using DOM methods and store them in variables.
// When the submit button is clicked get the user input and add it to an array.
// Use whatever visual framework (or plain CSS styling) you like to make your page look good. Treat this like a product that you are building for a client. How would they want it to look and function?

const todoList = document.querySelector('ul#todoList');
const form = document.getElementById('addItemForm')

let todoArray = [];

document.forms.addItem.submitBtn.addEventListener('click', e => {
  e.preventDefault();
  if (document.forms.addItem.newItem.value !== "") {
    todoArray.push(document.forms.addItem.newItem.value);
    console.log(todoArray);
    let item =  document.createElement('li');
      item.textContent = document.forms.addItem.newItem.value;
    todoList.appendChild(item);
    form.reset();
  };
});
