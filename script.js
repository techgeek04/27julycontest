



let email_box = document.getElementById("email");
let password_box = document.getElementById("password");

email_box.addEventListener("input", () => {
    let email = email_box.value;
    let emailErr = document.querySelector(".emailErr");
    if (email.length < 3 || !email.includes('@') || !email.includes('.')) {
        emailErr.innerText = "Make sure email is more than 3 characters and has @ and a .";
        emailErr.style.color = "red";
    } else {
        emailErr.innerText = "";
    }
});


password_box.addEventListener("input", () => {
    let pass = password_box.value;
    let passErr = document.querySelector(".passErr")
    if (pass.length < 8) {
        passErr.innerText = "Make sure password is more than 8 characters."
        passErr.style.color = "red"
    } else{
        passErr.innerText = "";
        
    }
})

function checkErrors() {
    let emailErr = document.querySelector(".emailErr");
    let passErr = document.querySelector(".passErr");
    if (emailErr.innerText == "" && passErr.innerText == "") {
        passErr.innerText = "All good to go!";
        passErr.style.color = "green";
    }
}

email_box.addEventListener("input", checkErrors);
password_box.addEventListener("input", checkErrors);
