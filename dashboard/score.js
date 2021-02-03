const team1Rep = nodecg.Replicant('team1', {defaultValue: 0});
const team2Rep = nodecg.Replicant('team2', {defaultValue: 0});

const team1NameRep = nodecg.Replicant('team1Name', {defaultValue: "PogChamps"});
const team2NameRep = nodecg.Replicant('team2Name', {defaultValue: "Poggers"});

const scoreOne = document.getElementById('scoreOnePanel');
const scoreTwo = document.getElementById('scoreTwoPanel');

const NameOne = document.getElementById('teamNameOne');
const NameTwo = document.getElementById('teamNameTwo');

var name1 = team1NameRep;
var name2 = team2NameRep;

window.onload = function(){
reset();
update();
nameUpdate();
}


function scoreTeam1(){
    score1++;
    update();
}

function scoreTeam2(){
    score2++;
    update();
}

function reset(){
    score1 = 0;
    score2 = 0;
    scoreOne.value = 0;
    scoreTwo.value = 0;
    update();
}

function update(){
    score1 = scoreOne.value;
    score2 = scoreTwo.value;
    team1Rep.value = score1;
    team2Rep.value = score2;
}

function nameUpdate(){
    name1 = NameOne.value;
    name2 = NameTwo.value;
    team1NameRep.value = name1;
    team2NameRep.value = name2;
}

function animateOut(){
    nodecg.sendMessage('animateout');
}

function animateIn(){
    nodecg.sendMessage('animatein');
}

$("#scoreOnePanel").change(function() {update();})
$("#scoreTwoPanel").change(function() {update();})

$("#teamNameOne").change(function() {nameUpdate();})
$("#teamNameTwo").change(function() {nameUpdate();})