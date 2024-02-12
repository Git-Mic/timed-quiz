const playername = document.getElementById('playername');

playername.addEventListener('keyup', () => {
    console.log(playername.value);
});

saveHiScore = e => {
    console.log("I clicked the save button!");
    e.preventDefault();

}

