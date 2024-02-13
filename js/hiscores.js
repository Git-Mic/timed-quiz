const listOfScores = document.getElementById("listOfScores");
const hiScores = JSON.parse(localStorage.getItem("hiScores")) || [];

listOfScores.innerHTML = hiScores.map(score => { 
    return `<li class="hi-score">${score.name}: ${score.score}</li>`; 
}).join("");
