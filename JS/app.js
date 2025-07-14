import {
  db, collection, addDoc, deleteDoc, doc, updateDoc,
  getDoc,
} from "./fireBase.js"
// const addTaskBtn = document.getElementById("addTaskBtn")
// const taskList = document.getElementById("taskList");
const toDoCollection = collection(db, "todos");

// Fetch user data from Firestore
const fetchUserData = async () => {
  const userUid = localStorage.getItem("userId");

  if (!userUid) {
    console.warn("❌ UID not found in localStorage. Redirecting to login...");
    window.location.replace("../index.html");

    return;
  }

  try {
    const userDoc = await getDoc(doc(db, "users", userUid));
    const userData = userDoc.data();
    console.log("✅ User data fetched:", userData);
    if (!userData) {
      console.warn("❌ No user data found.");
      return;
    }

    console.log("✅ User:", userData);

    const cardListing = document.getElementById("cardListing");
    cardListing.innerHTML = "";

    // Example loop for display (replace `tempArr` with your data)
    for (const obj of [userData]) {
      cardListing.innerHTML += `
        <div class="cardContainer">
          <p class="userName">${obj.fname} ${obj.lname}</p>
          <p class="userEmail">${obj.semail}</p>
          <button class="logOutBtn" onclick="window.location.replace('../index.html')">Logout</button>
        </div>`;
    }
  } catch (error) {
    console.error("🔥 Error fetching user data:", error.message);
  }
};


// Main function Create Task
const createTask = async () => {
  const input = document.getElementById("input");
  const data = { task: input.value }
  if (!input.value) {
    Swal.fire({
      title: 'Missing Task!',
      text: 'Please enter something before adding.',
      icon: 'warning',
      confirmButtonText: 'Got it!'
    });
    return;
  }

  try {
    const taskList = document.getElementById("taskList");
    // Save to Firestore
    const docRef = await addDoc(toDoCollection, data)
    console.log("✅ Task saved to Firestore with ID:", docRef.id);
    taskList.innerHTML += `<li class="task" id="${docRef.id}">
                    <span id="taskText">${data.task}</span>
                    <button id="editBtn" onclick="editTask(this, '${docRef.id}')"><i class="fas fa-edit"></i></button>
                    <button id="deleteBtn" onclick="deleteTask(this, '${docRef.id}')"><i class="fas fa-trash"></i></button>
                    <button id="completeBtn" onclick="completedTask(this, '${docRef.id}')"><i class="fas fa-check"></i></button>
                </li>`
    input.value = "";

  } catch (error) {
    swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.message,
    });
  }
}


// Delete Button
const deleteTask = async (ele, docId) => {
  const confirmResult = await Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it',
    reverseButtons: true
  })
  if (confirmResult.isConfirmed) {
    ele.parentNode.remove();
    swal.fire(
      'Deleted!',
      'Your task has been deleted.',
      'success'
    )
  }
  await deleteDoc(doc(db, "todos", docId));
}
// Edit Button
const editTask = async (ele, docId) => {
  const currentText = taskText.textContent;

  const editValue = await Swal.fire({
    title: 'Edit Task',
    input: 'text',
    inputLabel: 'Task Text',
    inputValue: currentText,
    showCancelButton: true,
    confirmButtonText: 'Save',
  });

  if (!editValue.isConfirmed || !editValue.value) return;

  const newValue = editValue.value;

  taskText.textContent = newValue;

  await updateDoc(doc(db, "todos", docId), {
    task: newValue
  });

  Swal.fire('Updated!', 'Your task has been updated.', 'success');
};


// Complete Button
const completedTask = async (ele, docId) => {
  const taskItem = ele.parentNode;
  taskItem.style.color = "gray";
  taskItem.style.textDecoration = "line-through";
};


window.fetchUserData = fetchUserData;
window.createTask = createTask;
window.deleteTask = deleteTask;
window.editTask = editTask;
window.completedTask = completedTask;