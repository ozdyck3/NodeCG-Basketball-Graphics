//Team Scores REPLICANTS
const team1Rep = nodecg.Replicant('team1', {defaultValue: 0});
const team2Rep = nodecg.Replicant('team2', {defaultValue: 0});
//Team Names REPLICANTS
const team1NameRep = nodecg.Replicant('team1Name', {defaultValue: "PogChamps"});
const team2NameRep = nodecg.Replicant('team2Name', {defaultValue: "Poggers"});
//Team Scores LOCAL
const scoreOne = document.getElementById('scoreOnePanel');
const scoreTwo = document.getElementById('scoreTwoPanel');
//Team Scores LOCAL
const NameOne = document.getElementById('teamNameOne');
const NameTwo = document.getElementById('teamNameTwo');
//Set team names to the Replicants if already populated
var name1 = team1NameRep;
var name2 = team2NameRep;

//On load, reset the scores, update the replicants, and change the names
window.onload = function(){
reset();
update();
nameUpdate();
}

//On button click, add score and update
function scoreTeam1(){
    score1++;
    update();
}
//On button click, add score and update
function scoreTeam2(){
    score2++;
    update();
}
//reset the scores and replicants to zero
function reset(){
    score1 = 0;
    score2 = 0;
    scoreOne.value = 0;
    scoreTwo.value = 0;
    update();
}
//Push local variables to replicants
function update(){
    score1 = scoreOne.value;
    score2 = scoreTwo.value;
    team1Rep.value = score1;
    team2Rep.value = score2;
}
//Push local names to replicants
function nameUpdate(){
    name1 = NameOne.value;
    name2 = NameTwo.value;
    team1NameRep.value = name1;
    team2NameRep.value = name2;
}
//Tell web page to animate in or out
function animateOut(){
    nodecg.sendMessage('animateout');
}

function animateIn(){
    nodecg.sendMessage('animatein');
}
//Sends name changes on text fields
$("#scoreOnePanel").change(function() {update();})
$("#scoreTwoPanel").change(function() {update();})

$("#teamNameOne").change(function() {nameUpdate();})
$("#teamNameTwo").change(function() {nameUpdate();})