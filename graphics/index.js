const team1Rep = nodecg.Replicant('team1');
const team2Rep = nodecg.Replicant('team2');

const team1NameRep = nodecg.Replicant('team1Name');
const team2NameRep = nodecg.Replicant('team2Name');

const team1El = document.getElementById('scoreOne');
const team2El = document.getElementById('scoreTwo');

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
    $('.scoreboard').animate({bottom: '-250px'});
})

nodecg.listenFor('animatein', () => {
    $('.scoreboard').animate({bottom:'20px'});
})