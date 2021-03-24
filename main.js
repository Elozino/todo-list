//Selecting the elements form html
const inputTask = document.querySelector(".task-input");
const addTaskButton = document.querySelector(".task-input-button");
const taskList = document.querySelector(".task-list");

//Adding event listeners
addTaskButton.addEventListener("click", addTask)
//taskList.addEventListener("click", removeTask)

//Adding functions

function addTask(){
   if(inputTask.value !== ""){
      //creating the task div
   const todoTask = document.createElement("div");
   todoTask.classList.add("todo-task");
   taskList.appendChild(todoTask);
   
   //Creating the task tag
   const taskTag = document.createElement("p");
   taskTag.classList.add("task");
   taskTag.innerText = inputTask.value;
   todoTask.appendChild(taskTag);

   //Creating the button tag
   const btnTag = document.createElement("button");
   btnTag.classList.add("remove");
   btnTag.innerHTML = '<i class="fas fa-trash"></i>';
   todoTask.appendChild(btnTag);
   
   //clear the input value
   inputTask.value = ""

   btnTag.addEventListener("click", (e) => removeTask(todoTask));
   }
   else{
      alert("Please enter your desired task")
   }

}

function removeTask(taskNode) {
   console.log(taskNode);
   taskNode.remove();
 }