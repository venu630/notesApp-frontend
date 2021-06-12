const urlParams = new URLSearchParams(window.location.search);
const noteId = urlParams.get('noteId');

const updateNoteButton = document.querySelector(".create-note-button");
const deleteNoteButton = document.querySelector(".delete-note-button");

const apiUrl = "https://peaceful-oasis-28734.herokuapp.com";

const token = localStorage.getItem("jwt");

updateNoteButton.addEventListener("click", () => {


    const content = document.querySelector(".create-note-input").value;
    const heading = document.querySelector(".create-note-heading").value;


    
    if (token) {

        fetch(`${apiUrl}/note/update/${noteId}`, {
            method: 'PUT',
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
                alert("Error in Updating notes! Re-Try");
                console.log(err);
            });

    }

});



deleteNoteButton.addEventListener("click", () => {

    if (token) {

        fetch(`${apiUrl}/note/delete/${noteId}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                authorization: token,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                
                    location.href = "/pages/dashboard/index.html";
            })
            .catch((err) => {
                alert("Error in deleted notes! Re-Try");
                console.log(err);
            });

    }


});


