const signUpButton = document.querySelector(".signUp-button");
const signInButton = document.querySelector(".signIn-button");

const apiUrl = "https://peaceful-oasis-28734.herokuapp.com";


signInButton.addEventListener("click", (event) => {
    event.preventDefault();

    const email = document.querySelector(".signIn-email").value;
    const password = document.querySelector(".signIn-password").value;

    fetch(`${apiUrl}/auth/signin`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    })
        .then((res) => res.json())
        .then((data) => {
            const { token } = data;

            if (token) {
                localStorage.setItem("jwt", token);
                location.href = "/pages/dashboard/index.html";
            } else {
                alert("signIn Again!");
            }
        })
        .catch((err) => {
            alert("Error in Signing In! Re-Try");
            console.log(err);
        });

});



signUpButton.addEventListener("click", (event) => {
    event.preventDefault();

    const email = document.querySelector(".signUp-email").value;
    const name = document.querySelector(".signUp-name").value;
    const password = document.querySelector(".signUp-password").value;
    const reTypedPassword = document.querySelector(".signUp-retyped-password").value;


    if (password !== reTypedPassword) {
        alert("Password doesn't match!");
        return;
    }

    fetch(`${apiUrl}/auth/signup`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
    })
        .then((res) => res.json())
        .then((data) => {

            const { token } = data;

            if (token) {
                localStorage.setItem("jwt", token);
                location.href = "/pages/dashboard/index.html";
            } else {
                alert("signUp Again!");
            }
        })
        .catch((err) => {
            alert("Error in Signing Up! Re-Try");
            console.log(err);
        });

});