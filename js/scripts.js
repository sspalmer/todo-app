// Access the input's value and the uls using DOM methods and store them in variables.
// When the submit button is clicked get the user input and add it to an array.
// Use whatever visual framework (or plain CSS styling) you like to make your page look good. Treat this like a product that you are building for a client. How would they want it to look and function?

const form = document.getElementById('addItemForm')
const todoList = document.querySelector('ul#todoList');

let todoArray = [];
let doneArray = [];


document.forms.addItemForm.submitBtn.addEventListener('click', e => {
  e.preventDefault();

  if (document.forms.addItemForm.newItem.value !== "") {
    todoArray.push(document.forms.addItemForm.newItem.value);
     console.log(todoArray);

    let item =  document.createElement('form');
      item.textContent = document.forms.addItemForm.newItem.value;

    let checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      item.appendChild(checkbox);

    let todoLabel = document.createElement('label');
      

    todoList.appendChild(item);
    form.reset();

  };
});
