const signUpForm = document.querySelector(".signUp-form");

signUpForm.addEventListener("click", (event) => {
    event.preventDefault();

    const email = document.querySelector(".signUp-email").value;
    const name = document.querySelector(".signUp-name").value;
    const password = document.querySelector(".signUp-password").value;
    const reTypedPassword = document.querySelector(".signUp-retyped-password").value;

    console.log(email, name, password, reTypedPassword);


});