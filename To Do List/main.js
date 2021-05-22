let theInput = document.querySelector(".add-task input"),
  addBotton = document.querySelector(".add-task .plus"),
  tasksContent = document.querySelector(".tasks-content"),
  countTasks = document.querySelector(".count-tasks span"),
  completedTasks = document.querySelector(".completed-tasks span");


let vis = [];
window.onload = function () {
  theInput.focus();
}

addBotton.onclick = function () {
  if (theInput.value === '') {
    swal("Oh no!!, Please Enter The Task");

  } else {
    let noTasks = document.querySelector(".no-tasks");
    if (document.body.contains(document.querySelector(".no-tasks"))) {
      noTasks.remove();
    }

    let mainSpan = document.createElement("span"),
      deleteSpan = document.createElement("span"),
      text = document.createTextNode(theInput.value),
      deletedText = document.createTextNode("Delete");

    mainSpan.appendChild(text);
    mainSpan.className = 'task-box';
    deleteSpan.appendChild(deletedText);
    deleteSpan.className = 'delete';
    deleteSpan.id = theInput.value;
    deleteSpan.title = theInput.value;
    mainSpan.appendChild(deleteSpan);

    if (ifExist(vis, theInput.value)) {
      swal("(" + theInput.value + ") This Task is Exist :D");
    }
    else {
      tasksContent.appendChild(mainSpan);
      vis.push(theInput.value)
    }

    theInput.value = '';
    theInput.focus();
  }
}

function ifExist(task, newInput) {
  for (let i = 0; i < task.length; i++)
    if (task[i] === newInput)
      return true;
  return false
}

function getIndex(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value)
      return i;
  }
}


document.addEventListener('click', function (e) {
  if (e.target.className == 'delete') {
    let x = document.getElementById(e.target.id).title;
    vis.splice(getIndex(vis, x), 1);
    e.target.parentNode.remove();
    if (tasksContent.childElementCount == 0) {
      createNoTasks();
    }
  }
  if (e.target.classList.contains('task-box')) {
    e.target.classList.toggle("finished");
  }
  calcTasks();
});


function createNoTasks() {
  let massageSpan = document.createElement("span"),
    massageText = text = document.createTextNode("Oh!! No Tasks!");
  massageSpan.appendChild(massageText);
  massageSpan.className = "no-tasks";
  tasksContent.appendChild(massageSpan);
}

function calcTasks() {
  countTasks.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;
  completedTasks.innerHTML = document.querySelectorAll('.tasks-content .finished').length;
}
