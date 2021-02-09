

// Random number of rounds between 3 and 10
const numRounds= Math.floor(Math.random()*(10-3) + 3);


//object for all DC hero's names, powers, 
const dcHeroes = {
    superMan: {
        _name: 'Super Man',
        _powers: ['heat vision', ' a sonic clap', 'a super slap'],
    },
    batman: {
        _name: 'Batman',
        _powers: ['Batarangs', 'electro shock bolos', 'a sleeping gas granade'],
    },
    wonderWoman: {
        _name: 'Wonder Woman',
        _powers: ['wrist band clap', 'magic lariat lasso', 'super strength leg sweep'],
    },
    theFlash: {
        _name: 'The Flash',
        _powers: ['a speed punch', 'speed force lightning', 'a whirlwind attack'],
    },
    greenLantern: {
        _name: 'Green Lantern',
        _powers: ['a gatling gun construct', 'a train construct', 'a giant fist construct punch'],
    }
    
};


//object for all Marvel hero's names, powers, and weakness
const marvelHeroes = {
    captainAmerica: {
        _name: 'Captain America',
        _powers: ['a shield bash', 'a shield throw', 'a double flying kick'],
    },
    ironman: {
        _name: 'Ironman',
        _powers: ['an energy blast', 'wrist rockets', 'a beam laser'],
    },
    blackWidow: {
        _name: 'Black Widow',
        _powers: ['an automatic pistol', 'exploding tear gas pellets', "widow's bite shock"],
    },
    wolverine: {
        _name: 'Wolverine',
        _powers: ['a beserker rage', 'a duel claw stab', 'an upper cut slash'],
    },
    antMan: {
        _name: 'Ant Man',
        _powers: ['a miniaturize super punch', 'a giant foot stomp', 'a miniaturize opponent flip'],
    }
    
};


// function to select random hero and place their keys into a new object for DC and Marvel
const randomHero = (obj) => {
    var keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};

let dcHero = randomHero(dcHeroes); 
let marvelHero = randomHero(marvelHeroes);




//function to determine the winner
const determineWinner = () => {
    let randNum = Math.floor(Math.random() * 100);
    if (randNum <= 50) {
        dcHero._winner = true;
        marvelHero._winner = false;
    } else {
        dcHero._winner = false;
        marvelHero._winner = true;

    };
};
determineWinner();

//create array of standard attacks and finishing power attaack to add to each hero object

const selectAttacks = () => {
    // array for 10 different default attacks
    const defaultAttacks = ['jabs', 'upper cuts', 'roundhouse kicks', 'body slams', 'eye gouges', 'sucker punches', 'gut punchs', 'head butts', 'kidney punchs', 'flying kicks'];



    let dcAttacks = [];
    for (let i = 0; i < numRounds; i++) {
        dcAttacks.push(defaultAttacks[(Math.floor(Math.random () * defaultAttacks.length))]);
    };
    dcHero.attacks = dcAttacks;

    let marvelAttacks = [];
    for (i = 0; i < numRounds; i++) {
        marvelAttacks.push(defaultAttacks[(Math.floor(Math.random () * defaultAttacks.length))]);
    };
    marvelHero.attacks = marvelAttacks;

//Select a finishing move and place it in the dcHero and marvelHero objects
    dcHero.finishingMove = dcHero._powers[Math.floor(Math.random () * dcHero._powers.length)];
    marvelHero.finishingMove = marvelHero._powers[Math.floor(Math.random () * marvelHero._powers.length)];

};
selectAttacks();
// mainEvent selects either a default attack or a special power attack and generates the fight text.

const mainEvent = () => {
    console.log('DC HEROES vs MARVEL HEROES! ')
    console.log('It is time to determine which is the strongest universe of superheroes once and for all!');
    console.log('NOW FIGHT!!!')
    console.log(' ')
    console.log(' ')
    for (i = 0; i < numRounds; i++) {
        console.log(dcHero._name + ' ' + dcHero.attacks[i] + ' ' + marvelHero._name)
        console.log(marvelHero._name + ' ' + marvelHero.attacks[i] + ' ' + dcHero._name)

    };
        //check for last round and winner flag
        if (i = numRounds) {
            if (dcHero._winner === true) {
                console.log (dcHero._name + ' decides the match has gone on long enough and uses ' + dcHero.finishingMove + ' to defeat the weakened '+ marvelHero._name);
            } else {
                console.log(marvelHero._name + ' decides the match has gone on long enough and uses ' + marvelHero.finishingMove + ' to defeat the weakened '+ dcHero._name)
            }
        };
        //Marvel attack and random select if default or super power attack


    


};

mainEvent();
//console.log(dcHero._name + ' defeats ' + marvelHero._name);

//testing 
//console.log(marvelHero._name + ' vs ' + dcHero._name);
//console.log(dcHero);
//console.log(marvelHero);



