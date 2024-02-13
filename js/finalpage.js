const playername = document.getElementById('playername');
const saveYourScore = document.getElementById('saveYourScore');
const latestScore = localStorage.getItem('latestScore');
const finalHiScore = document.getElementById('finalHiScore');
const MAX_HI_SCORES = 6
const hiScores = JSON.parse(localStorage.getItem("hiScores")) || [];
console.log(hiScores);
finalHiScore.innerHTML = latestScore;

//Event listener, Save Score Button Disabled until player name is entered.
playername.addEventListener('keyup', () => {
    saveYourScore.disabled = !playername.value;
});

saveHiScore = e => {
    e.preventDefault();

    const score = {
        score: Math.floor(Math.random()*100),
        name: playername.value
    };

    //adds score
    hiScores.push(score);
    //sorts score
    hiScores.sort( (a, b) => b.score - a.score);
    //cuts off all scores at index 6
    hiScores.splice(6);

    localStorage.setItem("hiScores", JSON.stringify(hiScores));
    window.location.assign("./index.html");
    


};

