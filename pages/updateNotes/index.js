const createNoteInput = document.querySelector(".create-note-input");

createNoteInput.addEventListener("input", (e) => {
    console.log(e.larget.value);
});

const urlParms = new URLSearchParams(window.location.search);
const noteId = urlParams.get('noteId');