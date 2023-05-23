var dateElem = document.getElementById("date");

const incompleteElem = document.getElementById("incomplete");
const completedElement = document.getElementById("completed");

const counterElem = document.getElementById('counter');
var completedTasks = 0;
var incompleteTasks = 0;

function resetCountedTasks() {
  counterElem.innerHTML = incompleteTasks + " incomplete, " + completedTasks + " completed"
}

resetCountedTasks();

curDate = new Date();

day = curDate.getDate();
numMonth = curDate.getMonth() + 1;
year = curDate.getFullYear();

console.log(day + ' ' + numMonth + ' ' + year);

var month = String();

switch (numMonth) {
  case 1:
    month = "January";
    break;
  case 2:
    month = "February";
    break;
  case 3:
    month = "March";
    break;
  case 4:
    month = "April";
    break;
  case 5:
    month = "May";
    break;
  case 6:
    month = "June";
    break;
  case 7:
    month = "July";
    break;
  case 8:
    month = "August";
    break;
  case 9:
    month = "September";
    break;
  case 10:
    month = "November";
    break;
  case 11:
    month = "October";
    break;
  case 12:
    month = "December";
    break;
}

dateElem.innerHTML = month + ' ' + day + ", " + year;

idCounter = 0;


class TodoItem {
  isCompleted;
  text;
  category;
  id;

  constructor(isCompleted, text, category) {
    this.isCompleted = isCompleted;
    this.text = text;
    this.category = category;
    this.id = idCounter + 1;
    idCounter = this.id;
    console.log(isCompleted, text, category);

    if ((this.isCompleted === true)) {
      completedTasks = completedTasks + 1;
      resetCountedTasks();
    } else {
      incompleteTasks = incompleteTasks + 1;
      resetCountedTasks();
    }
  }
  
  createTodo() {
    //DEV: fetches values from inputs
    

    // creates parent div
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'todo');
    wrapper.setAttribute('id', this.id);
    
    //creates div container element for checkmark
    const checkmarkDiv = document.createElement('div');
    checkmarkDiv.setAttribute('class', 'checkmark');

    // creates input element and sets attributes
    var inputElem = document.createElement('input');
    inputElem.setAttribute('type', 'checkbox');
    inputElem.setAttribute('id', 'horns');
    inputElem.setAttribute('onclick', 'moveTask('+ this.id + ')')
    inputElem.checked = this.isCompleted;

    // creates text and category elements and inserts values
    var todoWrapper = document.createElement('div');
    todoWrapper.setAttribute('class', 'todo-text');

    var TodoMain = document.createElement('h3');
    TodoMain.textContent = this.text;

    var TodoClass = document.createElement('h5');
    TodoClass.textContent = this.category;



    //appends previously created elements to their parents
    wrapper.appendChild(checkmarkDiv);
    checkmarkDiv.appendChild(inputElem);
  
    wrapper.appendChild(todoWrapper);
    todoWrapper.appendChild(TodoMain);
    todoWrapper.appendChild(TodoClass);

    if (this.isCompleted === false) {
      incompleteElem.appendChild(wrapper);
    }
    else {
      completedElement.appendChild(wrapper);
    }
    
    console.log("created element with value: " + this.isCompleted + ' task: ' + this.text + ' category: ' + this.category)
    
  }


}

function createNewTodo(comp, text, cat) {
  console.log(comp, text, cat);
  item = new TodoItem(comp, text, cat);
  item.createTodo();
  console.log(item);
}


function moveTask(id) {
  wrapper = document.getElementById(id);
  completedElement.appendChild(wrapper);

  checkmarkWrapper = wrapper.firstChild;
  checkmark = checkmarkWrapper.firstChild;

  

  if (checkmark.checked == false)
  {
    incompleteElem.appendChild(wrapper);
  }




  console.log(checkmark.checked);
}


// modal stuff

const showButton = document.getElementById("showDialog");

const favDialog = document.getElementById("favDialog");

const outputBox = document.querySelector("output");

const selectEl = favDialog.querySelector("select");
const TextElem = document.getElementById('taskname');

const confirmBtn = favDialog.querySelector("#confirmBtn");

// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener("click", () => {
  favDialog.showModal();
});

// // "Favorite animal" input sets the value of the submit button
// selectEl.addEventListener("change", (e) => {
//   confirmBtn.value = selectEl.value;
// });



favDialog.addEventListener('close', (e) => {
  console.log(TextElem.value);
  console.log(selectEl.value);
  createNewTodo(false, TextElem.value, selectEl.value);
});

// // "Confirm" button triggers "close" on dialog because of [formmethod="dialog"]
// favDialog.addEventListener("close", (e) => {
//   console.log(
//     favDialog.returnValue === "default"
//       ? "No return value."
//       : `ReturnValue: ${favDialog.returnValue}.`); // Have to check for "default" rather than empty string
// });

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  favDialog.close();
});







