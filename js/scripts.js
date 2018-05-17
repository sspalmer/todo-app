// FIRST SET OF TODO LIST USING DOM AND target.parentNode

const form = document.getElementById('userInputForm')
const todoList = document.querySelector('ul#todoList');
const doneList = document.querySelector('ul#doneList');


document.forms.userInputForm.submitBtn.addEventListener('click', e => {
  e.preventDefault();
  let newItem = document.forms.userInputForm.userInputItem.value;

  if (newItem !== "") {

    let item =  document.createElement('li');

    let checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      item.appendChild(checkbox);
      checkbox.addEventListener('changed', e => {
        e.preventDefault();
        if (e.parentNode = 'ul#todoList') {
          todoList.removeChild(e.target.parentNode);
          doneList.appendChild(item);
        };
      });

    let label = document.createElement('label');
      label.textContent = newItem;
      item.appendChild(label);

    let editBtn = document.createElement('button');
      editBtn.textContent = 'edit';
      item.appendChild(editBtn);
      editBtn.addEventListener('click', e => {
        e.preventDefault();
        label.textContent  = prompt("", label.textContent);
      });

    let deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'delete';
      item.appendChild(deleteBtn);
      deleteBtn.addEventListener('click', e => {
        e.preventDefault();
        console.log(e.target.parentNode);
        todoList.removeChild(e.target.parentNode);
      });

    todoList.appendChild(item);
    form.reset();
  }; //if loop
}); //submitBtn click


// SECOND SENT OF TODO LIST USING Arrays

///  random notes that might be useful
// for(let i = 0; i < data.results.length; i++) {
//   console.log(data.results[i].email)
//   let h2 = document.createElement('h2');
//   h2.textContent = data.results[i].email;
//   body.appendChild(h2);
// }


// const form2 = document.getElementById('userInputForm2')
// const todoList2 = document.querySelector('ul#todoList2');
// const doneList2 = document.querySelector('ul#doneList2');
//
// let todoArray2 = [];
// let doneArray2 = [];
//
// //todoArray.push(newItem);
//  //console.log(todoArray);
//
// var task = {
//   this.checkbox2 = new Checkbox();
//   this.label2 = new Label();
//   this.editBtn2 = new EditBtn();
//   this.deleteBtn2 = new DeleteBtn();
// }
//
//  for(let q = 0; q < todoArray2.length; q++) {
//    console.log
//  }
