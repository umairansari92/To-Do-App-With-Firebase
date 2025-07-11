# 📝 Firestore ToDo App

A lightweight, modular JavaScript ToDo application using Firebase Firestore.
Features include task creation, editing, deletion, and optional real-time database sync.

---

## 🚀 Features

* ✅ Add, edit, and delete tasks
* 📂 Tasks stored in Firestore (`todos` collection)
* 🧹 Uses Firebase’s modular SDK (v10+) via CDN
* ⚡ Optional real-time sync with `onSnapshot`
* 🩸 Simple UI using Bootstrap utility classes

---

## 🔧 Tech Stack

* **Frontend**: Vanilla JS (ES6 modules), HTML, CSS (with Bootstrap)
* **Backend**: Firebase Firestore & optional Auth
* **Firebase SDK**: Modular v10+ imported via CDN

---

## ⚙️ Setup & Configuration

1. **Clone the repo**

   ```bash
   git clone https://github.com/your-username/todo-firestore-app.git  
   cd todo-firestore-app
   ```

2. **Configure Firebase**

   * Create a Firebase project & enable Firestore
   * In `scripts/fireBase.js`, replace the config with your own:

     ```js
     const firebaseConfig = {
       apiKey: "...",
       authDomain: "...",
       projectId: "...",
       // ...
     };
     ```

3. **Include scripts in your HTML**

   ```html
   <script type="module" src="scripts/app.js"></script>
   ```

4. **Serve the app**
   Use a local server (e.g., VSCode Live Server or `npx http-server .`)

---

## 🛠️ How It Works

### ✅ Add Todo

1. Enter a task and click **Add**
2. `addDoc()` stores it in Firestore
3. `createUI()` displays it in `<ul>`

### ✏️ Edit Todo

1. Click **EDIT**
2. Prompt appears; new text is saved via `updateDoc()`
3. UI updates immediately

### 🗑️ Delete Todo

1. Click **DELETE**
2. Item removed from UI
3. (Optional) `deleteDoc()` removes it from Firestore

### ♻️ Optional: Real-Time Sync

Use `onSnapshot()` for live updates when Firestore data changes

---

## 🔍 Key Functions

| Function       | Description                             |
| -------------- | --------------------------------------- |
| `addTodo()`    | Add a new task to Firestore + UI        |
| `getTodos()`   | Load tasks on page load                 |
| `editTodo()`   | Edit task text + update Firestore       |
| `deleteTodo()` | Remove from UI (and Firestore)          |
| `createUI()`   | Builds `<li>` + sets up event listeners |

---

## 🔭 Future Enhancements

* 🔐 Add Firebase Auth for per-user tasks
* ✅ Track completed tasks status
* ♻️ Real-time updates via `onSnapshot()`
* 🔄 Drag-and-drop reordering
* 🔒 Firestore security rules for user data

---

## 🧚️ Run Locally

1. Launch a static server
2. Open `index.html`
3. Add, edit, delete tasks—see Firestore data update live

---

## 👤 Author

**Umair Ahmed Ansari**

* 📧 Email: [umair.ansari.92@gmail.com](mailto:umair.ansari.92@gmail.com)
* 📧 Alternate: [dataversetechnologies6@gmail.com](mailto:dataversetechnologies6@gmail.com)
* 📱 WhatsApp / Mobile: +923138624722
* 🌐 Portfolio: [https://dataversetechnologies.vercel.app/](https://dataversetechnologies.vercel.app/)
* 🔗 LinkedIn: [linkedin.com/in/umairansari92](https://linkedin.com/in/umairansari92)
* 🌲 Linktree: [linktr.ee/umair.ansari.92](https://linktr.ee/umair.ansari.92)
* 📷 Instagram: [@umair.ansari.92](https://www.instagram.com/umair.ansari.92/) | [@dataversetechnologies](https://www.instagram.com/dataversetechnologies/)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).
