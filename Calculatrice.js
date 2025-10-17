
const prompt = require('prompt-sync')();  

let history = [];

while (true) {

   
    let opt = prompt(
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

    // Exit
    if (opt === '0') {
        console.log("👋 GOOD BYE !");
        break
    }

    // Historique
    if (opt === '8') {
        console.log('Historique of calcul:');
        if (history.length === 0) {
            console.log('Aucun calcul');
        } else {
            history.forEach((calc, index) => console.log(`${index + 1}. ${calc}`));
        }
        continue;
    }

     
    let number1, number2;
    if (['1','2','3','4','5','6','7'].includes(opt)) {
        number1 = Number(prompt('Enter number 1: '));
        if (['1','2','3','4','5'].includes(opt)) {
            number2 = Number(prompt('Enter number 2: '));
        }
    }

    if(isNaN(number1) && isNaN(number2)){
        console.log('require valid number')
    }

    let archif;

    // ──────────────────────────────
    // FUNCTIONS
    // ──────────────────────────────
    const Addition = () => {
        let somme = `La Somme : ${number1} + ${number2} = ${number1 + number2}`;
        console.log(somme);
        archif = somme;
    };

    const Soustraction = () => {
        let soustraction = `Soustraction : ${number1} - ${number2} = ${number1 - number2}`;
        console.log(soustraction);
        archif = soustraction;
    };

    const Multiplication = () => {
        let multiplication = `Multiplication : ${number1} * ${number2} = ${number1 * number2}`;
        console.log(multiplication);
        archif = multiplication;
    };

    const Division = () => {
        if (number2 !== 0) {
            let division = `Division : ${number1} / ${number2} = ${number1 / number2}`;
            console.log(division);
            archif = division;
        } else {
            console.log(' Impossible de diviser par 0');
        }
    };

    const Puissance = () => {
        let puissance = `La Puissance : ${number1} ^ ${number2} = ${number1 ** number2}`;
        console.log(puissance);
        archif = puissance;
    };

    const Racine_caree = () => {
        let racin = `La racine carrée de ${number1} = ${Math.sqrt(number1)}`;
        console.log(racin);
        archif = racin;
    };

    const Factorielle = () => {
        let f = 1;
        for (let i = 1; i <= number1; ++i) {
            f *= i;
        }
        let result = `Factorielle de ${number1} = ${f}`;
        console.log(result);
        archif = result;
    };

    // ──────────────────────────────
    // SWITCH CASE
    // ──────────────────────────────
    switch (opt) {
        case '1':
            Addition();
            break;
        case '2':
            Soustraction();
            break;
        case '3':
            Multiplication();
            break;
        case '4':
            Division();
            break;
        case '5':
            Puissance();
            break;
        case '6':
            Racine_caree();
            break;
        case '7':
            Factorielle();
            break;
        default:
            console.log('this operateur not defound');
            continue;
    }

    // Store calculation in history
    if (archif) history.push(archif);
} 
