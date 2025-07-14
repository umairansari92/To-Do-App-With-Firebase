import { db, collection, getDocs } from "./fireBase.js"


const logInBtn = document.getElementById("logInBtn")


const logIn = async () => {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    console.log("email", email)
    console.log(password, "password")
    try {
        const usersRef = collection(db, "users");
        const querySnapshot = await getDocs(usersRef);

        let isUserFound = false;

        querySnapshot.forEach((doc) => {
            const user = doc.data();
            console.log(user)
            if (user.semail === email && user.spassword === password) {
                isUserFound = true;




                // ✅ Redirect to dashboard
                window.location.replace("../HTML/dashboard.html")
            }
        });

        // ✅ Save user name in localStorage (optional)
        localStorage.setItem("userName", `${fname} ${lname}`);
        // ✅ Save user UID in localStorage
        localStorage.setItem("userId", userUid);

        if (!isUserFound) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Invalid email or password. Please try again.",
            });
        }

    } catch (error) {
        console.error("Login error:", error);
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
        });
    };
}

logInBtn.addEventListener("click", logIn)