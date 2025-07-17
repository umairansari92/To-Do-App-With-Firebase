import { db, collection, getDocs } from "./fireBase.js";

const logInBtn = document.getElementById("logInBtn");

const logIn = async () => {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    try {
        const usersRef = collection(db, "users");
        const querySnapshot = await getDocs(usersRef);

        let isUserFound = false;

        for (const doc of querySnapshot.docs) {
            const user = doc.data();
            if (user.semail === email && user.spassword === password) {
                isUserFound = true;

                const fname = user.fname || "Unknown";
                const lname = user.lname || "User";
                const userUid = doc.id;

                localStorage.setItem("userName", `${fname} ${lname}`);
                localStorage.setItem("userId", userUid);

                window.location.replace("../HTML/dashboard.html");
                break;
            }
        }

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
    }
};

logInBtn.addEventListener("click", logIn);
