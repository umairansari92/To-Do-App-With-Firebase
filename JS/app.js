import { db, collection, addDoc } from "./fireBase.js"
const addTaskBtn = document.getElementById("addTaskBtn")
const taskList = document.getElementById("taskList");
const toDoCollection = collection(db, "todos");


// Main function Create Task
async function createTask() {
  const input = document.getElementById("input");
  const data = { task: input.value }
  if (!input.value) {
    const notification = document.getElementById("notification");
    notification.style.display = "block";
    notification.innerHTML = "Please Enter Value First...";

    setTimeout(function () {
      notification.style.display = "none";
    }, 3000);
    return;
  }
  try {
    // Create Li Element
    const task = document.createElement("li");
    task.className = "task";
    const docRef = await addDoc(toDoCollection, data)
    console.log("✅ Task saved to Firestore with ID:", docRef.id);
    // Create Sapn in li For Text

    const taskText = document.createElement("span");
    taskText.innerHTML = input.value;
    task.append(taskText);

    // Create Delete Button

    const delBtn = document.createElement("button");
    delBtn.innerHTML = '<i class="fas fa-trash"></i>';
    delBtn.addEventListener("click", function () {
      deleteTask(this);
    });

    // Create Edit Button
    const editBtn = document.createElement("button");
    editBtn.innerHTML = '<i class="fas fa-edit"></i>';
    editBtn.addEventListener("click", function () {
      editTask(this);
    });

    // Create Complete Button
    const CompleteBtn = document.createElement("button");
    CompleteBtn.innerHTML = `<i class="fas fa-check"></i>`;
    CompleteBtn.addEventListener("click", function () {
      completedTask(this);
    });

    task.append(editBtn);
    task.append(delBtn);
    task.append(CompleteBtn);

    taskList.append(task);
    input.value = "";



  } catch (error) {
    console.log(error.message)
  }
}
// Delete Button
function deleteTask(delBtn) {
  delBtn.parentNode.remove();
}
// Edit Button
function editTask(editBtn) {
  const li = editBtn.parentNode;
  const taskText = li.querySelector("span");
  const currentText = taskText.textContent;

  const editValue = prompt("Please Enter Edit Value...", currentText);

  if (!editValue) {
    alert("Please enter a valid value");
    return;
  }

  taskText.textContent = editValue;
}

// Complete Button
function completedTask(CompleteBtn) {
  const span =
    CompleteBtn.previousElementSibling.previousElementSibling
      .previousElementSibling;
  span.classList.add("liLine");
  console.log(span);
}
addTaskBtn.addEventListener("click", createTask)