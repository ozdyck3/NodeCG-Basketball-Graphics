const team1Rep = nodecg.Replicant('team1');
const team2Rep = nodecg.Replicant('team2');

const team1NameRep = nodecg.Replicant('team1Name');
const team2NameRep = nodecg.Replicant('team2Name');

const team1El = document.getElementById('scoreOneText');
const team2El = document.getElementById('scoreTwoText');

const team1NameEl = document.getElementById('nameOne');
const team2NameEl = document.getElementById('nameTwo');


team1Rep.on('change', (newVal) => {
    team1El.innerHTML = newVal;
});

team2Rep.on('change', (newVal) =>{
    team2El.innerHTML = newVal;
});

team1NameRep.on('change', (newVal) =>{
    team1NameEl.innerHTML = newVal;
});

team2NameRep.on('change', (newVal) =>{
    team2NameEl.innerHTML = newVal;
});

nodecg.listenFor('animateout', () => {
    $('.text').animate({opacity:0});
    $('.scoreboard').animate({height:'0px'});
    $('.scoreboard').animate({opacity:'0'});
})

nodecg.listenFor('animatein', () => {
    $('.scoreboard').animate({opacity:'1'});
    $('.scoreboard').animate({height:'100px'});
    $('.text').animate({opacity:1});
    $('.team').animate({width:'35%'});
})