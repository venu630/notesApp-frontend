const cardContainer = document.querySelector(".card-container");

const cardData = [
   {heading: "heading1", content: "I'm venu learning web dev", id: 1},
   {heading: "heading2", content: "I'm venu learning web dev", id: 2},
   {heading: "heading3", content: "I'm venu learning web dev", id: 3},
   {heading: "heading4", content: "I'm venu learning web dev", id: 4},
   {heading: "heading5", content: "I'm venu learning web dev", id: 5},
];

const createNotes = (array) => {
    array.forEach(cardObj => {
        const {heading, content, id} = cardObj;

        const card = document.createElement("div");
        card.classList.add("card");
        card.id = id;

        const insideHtml = `<div class="card-header"><div class="card-heading">${heading}</div><a href="../updateNotes/updateNotes.html?noteId=${id}"><div class="edit-note"><img src="../../assests/edit-note.svg" /></div></a></div><div class="card-content">${content}</div>`;


        card.innerHTML = insideHtml;
        cardContainer.appendChild(card);
    });

};

createNotes(cardData);

