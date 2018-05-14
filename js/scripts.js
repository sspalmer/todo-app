// Access the input's value and the uls using DOM methods and store them in variables.
// When the submit button is clicked get the user input and add it to an array.
// Use whatever visual framework (or plain CSS styling) you like to make your page look good. Treat this like a product that you are building for a client. How would they want it to look and function?

const form = document.getElementById('userInputForm')
const todoList = document.querySelector('ul#todoList');
const doneList = document.querySelector('ul#doneList');

let todoArray = [];
let doneArray = [];


document.forms.userInputForm.submitBtn.addEventListener('click', e => {
  e.preventDefault();
  let newItem = document.forms.userInputForm.userInputItem.value;

  if (newItem !== "") {
    todoArray.push(newItem);
     console.log(todoArray);

     for (i = 0; i <= todoArray.length - 1; i++) {
        let item =  document.createElement('form');
          item.id = 'item' + [i];

        let checkbox = document.createElement('input');
          checkbox.setAttribute('type', 'checkbox');
          item.appendChild(checkbox);
          //checkbox.addEventListener();

        let task = document.createElement('label');
          task.textContent = newItem;
          item.appendChild(task);

        let editBtn = document.createElement('button');
          editBtn.textContent = 'edit';
          item.appendChild(editBtn);

        let deleteBtn = document.createElement('button');
          deleteBtn.textContent = 'delete';
          item.appendChild(deleteBtn);

          todoList.appendChild(item);
      }; //for loop

    form.reset();
}; //if loop
}); //submitBtn click
