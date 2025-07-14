import {
    addDoc,
    getAuth,
    collection,
    createUserWithEmailAndPassword,
    db,
    doc,
    setDoc,
} from "./fireBase.js"

const signUpBtn = document.getElementById("signUpBtn");

const createAccount = async () => {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const semail = document.getElementById("email").value;
    const spassword = document.getElementById("password").value;
    console.log("firstName", fname);
    console.log("lastName", lname);
    console.log("email", semail);
    console.log("password", spassword);
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

        const userCredential = await createUserWithEmailAndPassword(
            getAuth(),
            semail,
            spassword
        );
        console.log("User created:", userCredential.user);
        const userUid = userCredential.user.uid
        // const docRef = await addDoc(SignupCollection, data);
        // console.log("Document written with ID: ", docRef.id);

        console.log("User created with UID: ", userUid);

        const userDataObj = {
            fname,
            lname,
            semail,
            spassword,
            userUid,
        }

        // ✅ Save user name in localStorage (optional)
        localStorage.setItem("userName", `${fname} ${lname}`);
        // ✅ Save user UID in localStorage
        localStorage.setItem("userId", userUid);
        // Save user data to Firestore
        const userData = await setDoc(doc(SignupCollection, userUid), userDataObj);

        console.log("User data saved to Firestore:", userData);
        await Swal.fire({
            title: 'Signup Successful!',
            text: 'Welcome aboard. Your account has been created.',
            icon: 'success',
            confirmButtonText: 'Continue',
            confirmButtonColor: '#3085d6'
        });
        window.location.assign("/index.html");
    } catch (error) {

        console.error("Error adding document: ", error.message);
        Swal.fire({
            icon: "error",
            title: "Signup Failed",
            text: error.message,
        });
    }
};

signUpBtn.addEventListener("click", createAccount);
console.log(createAccount)