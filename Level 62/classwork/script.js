// იპოვეთ ღილაკი მისი ID-ს მიხედვით
const knowMeButton = document.getElementById('knowMeButton');

// დაამატეთ მოვლენის მკურნალი, რომელიც გამოიძახება ღილაკზე დაჭერისას
knowMeButton.addEventListener('click', () => {
    alert('You clicked the "Know me" button!');
});