const createNoteButton = document.querySelector(".create-note-button");


const apiUrl = "https://peaceful-oasis-28734.herokuapp.com";

const token = localStorage.getItem("jwt");

createNoteButton.addEventListener("click", () => {

    const content = document.querySelector(".create-note-input").value;
    const heading = document.querySelector(".create-note-heading").value;


    if (token) {

        fetch(`${apiUrl}/note/add`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                authorization: token,
            },
            body: JSON.stringify({ content, heading }),
        })
            .then((res) => res.json())
            .then((data) => {

                    location.href = "/pages/dashboard/index.html";
            })
            .catch((err) => {
                alert("Error in creating notes! Re-Try");
                console.log(err);
            });

    }

});


