import { db, collection, addDoc } from "./fireBase.js"

const signUpBtn = document.getElementById("signUpBtn");

const createAccount = async () => {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const semail = document.getElementById("email").value;
    const spassword = document.getElementById("password").value;

    const SignupCollection = collection(db, "users");

    try {
        if (!fname || !lname || !semail || !spassword) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "All Fields are required!",
            });
            return;
        }
        const data = {
            fname,
            lname,
            semail,
            spassword,
        };

        const docRef = await addDoc(SignupCollection, data);
        console.log("Document written with ID: ", docRef.id);
        await Swal.fire({
            title: 'Signup Successful!',
            text: 'Welcome aboard. Your account has been created.',
            icon: 'success',
            confirmButtonText: 'Continue',
            confirmButtonColor: '#3085d6'
        });
        window.location.replace("../index.html")
    } catch (error) {

        console.error("Error adding document: ", error);
        Swal.fire({
            icon: "error",
            title: "Signup Failed",
            text: "Something went wrong. Please try again later.",
        });
    }
};

signUpBtn.addEventListener("click", createAccount);
console.log(createAccount)