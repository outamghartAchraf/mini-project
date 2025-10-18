var prompt = require('prompt-sync')();

/* ┌───────────────────────────────┐
   │    MINI PROJECT CALCULATOR 🖩  │
   └───────────────────────────────┘ */

let history = [];
let archif;

// ──────────────────────────────
// FUNCTIONS
// ──────────────────────────────
const Addition = (number1, number2) => {
    let somme = `La Somme : ${number1} + ${number2} = ${number1 + number2}`;
    console.log(somme);
    archif = somme;
};

const Multiplication = (number1, number2) => {
    let multiplication = `Multiplication : ${number1} * ${number2} = ${number1 * number2}`;
    console.log(multiplication);
    archif = multiplication;
};

const Soustraction = (number1, number2) => {
    let soustraction = `Soustraction : ${number1} - ${number2} = ${number1 - number2}`;
    console.log(soustraction);
    archif = soustraction;
};

const Division = (number1, number2) => {
    if (number2 !== 0) {
        let division = `Division : ${number1} / ${number2} = ${number1 / number2}`;
        console.log(division);
        archif = division;
    } else {
        console.log('Impossible de diviser par 0');
    }
};

const Puissance = (number1, number2) => {
    let puissance = `La Puissance : ${number1} ^ ${number2} = ${number1 ** number2}`;
    console.log(puissance);
    archif = puissance;
};

const Factorielle = (number1) => {
    let f = 1;
    for (let i = 1; i <= number1; ++i) {
        f *= i;
    }
    let result = `Factorielle de ${number1} = ${f}`;
    console.log(result);
    archif = result;
};

const Racine_caree = (number1) => {
    let racin = `La racine carrée de ${number1} = ${Math.sqrt(number1)}`;
    console.log(racin);
    archif = racin;
};

// ──────────────────────────────
// MENU FUNCTION
// ──────────────────────────────
function menuC() {
    console.log(
        '┌─────────────────────────────┐\n' +
        '│   SELECT YOUR OPERATOR      │\n' +
        '├─────────────────────────────┤\n' +
        '│  1-[+]  Addition            │\n' +
        '│  2-[-]  Subtraction         │\n' +
        '│  3-[*]  Multiplication      │\n' +
        '│  4-[/]  Division            │\n' +
        '│  5-[^]  Puissance           │\n' +
        '│  6-[√]  Square Root         │\n' +
        '│  7-[!]  Factorial           │\n' +
        '│  8-[H]  Historique          │\n' +
        '│  0-[x]  Exit                │\n' +
        '└─────────────────────────────┘\n\n' +
        '→ Your choice: '
    );

    return parseInt(prompt());
}

// ──────────────────────────────
// MAIN LOOP
// ──────────────────────────────
let menu;
do {
    menu = menuC();

// exit program    
    if (menu === 0) {
        console.log("👋 GOOD BYE !");
        break;
    }

    // Historique
    if (menu === 8) {
        console.log('Historique of calcul:');
        if (history.length === 0) {
            console.log('Aucun calcul');
        } else {
            history.forEach((calc, index) => console.log(`${index + 1}. ${calc}`));
        }
        continue;
    }

    let number1, number2;

    if ([1, 2, 3, 4, 5, 6, 7].includes(menu)) {
        number1 = Number(prompt('Enter number 1: '));
        if (isNaN(number1)) {
            console.log('Require valid number');
            continue;
        }

        // Only ask number2 for operations that need it
        if ([1, 2, 3, 4, 5].includes(menu)) {
            number2 = Number(prompt('Enter number 2: '));
            if (isNaN(number2)) {
                console.log('Require valid number');
                continue;
            }
        }
    } else {
        console.log('Operator not found!');
        continue;
    }

    // ──────────────────────────────
    // SWITCH CASE
    // ──────────────────────────────
    switch (menu) {
        case 1:
            Addition(number1, number2);
            break;
        case 2:
            Soustraction(number1, number2);
            break;
        case 3:
            Multiplication(number1, number2);
            break;
        case 4:
            Division(number1, number2);
            break;
        case 5:
            Puissance(number1, number2);
            break;
        case 6:
            Racine_caree(number1);
            break;
        case 7:
            Factorielle(number1);
            break;
    }

    // Store calculation in history
    history.push(archif);

} while (menu !== 0);
