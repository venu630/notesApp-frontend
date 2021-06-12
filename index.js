const signInSignUpButton = document.querySelector(".sign-in-sign-up");

window.addEventListener("load", () => {
    const token = localStorage.getItem("jwt-token");

    if (token) {
        location.href = "/pages/dashboard/index.html";
    }

});

signInSignUpButton.addEventListener("click", () => {
    location.href = "/pages/authPage/index.html"
});
