var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {
 

  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;
  
  /* CREATE LIST ITEM */
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // CREATE DIV TO HOLD TASK INFO AND ADD TO LIST ITEM //
  var taskInfoEl = document.createElement("div");
  // GIVE IT A CLASS NAME
  taskInfoEl.className = "task-info";
  // add HTML Content to DIV // 
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

  listItemEl.appendChild(taskInfoEl);

  // add entire list item to list
tasksToDoEl.appendChild(listItemEl);


};

formEl.addEventListener("submit", createTaskHandler);







