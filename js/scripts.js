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
        let item =  document.createElement('li');
          item.textContent = newItem;

        let checkbox = document.createElement('input');
          checkbox.setAttribute('type', 'checkbox');
          item.appendChild(checkbox);

        let editBtn = document.createElement('button');
          editBtn.textContent = 'edit';
          item.appendChild(editBtn);

        let deleteBtn = document.createElement('button');
          deleteBtn.textContent = 'delete';
          item.appendChild(deleteBtn);
          deleteBtn.addEventListener('click', e => {
            e.preventDefault();
            console.log(e.target.parentNode);
            todoList.removeChild(e.target.parentNode);
          })

          todoList.appendChild(item);

    form.reset();
}; //if loop
}); //submitBtn click



///  random notes that might be useful
// for(let i = 0; i < data.results.length; i++) {
//   console.log(data.results[i].email)
//   let h2 = document.createElement('h2');
//   h2.textContent = data.results[i].email;
//   body.appendChild(h2);
// }
