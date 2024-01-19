import inquirer from "inquirer";
import { fetchClasses, fetchSpellbook, fetchMonsters, fetchSubclass } from "./fetch-dnd.js"

const chooseClass = async () => {
    const classes = await fetchClasses()
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'class',
                message: 'Choose a class before setting off on your adventure.',
                choices: classes.results.map(cls => cls.name),
            }
        ])
        .then((answers) => {
            console.log(`You chose the ${answers.class} class. Wise choice.`)
            return answers.class
        })
};

async function promptToContinue() {
    const confirm = await inquirer.prompt([
        {
            type: "confirm",
            name: "chooseAgain",
            message: "Start with this class?"
        }
    ])
    return confirm.chooseAgain
}

async function promptUser() {
    let chooseAgain = false

    while(!chooseAgain) {
        const chosenClass = await chooseClass()
        const subClass = await fetchSubclass(chosenClass.toLowerCase())
        console.log(`The ${chosenClass} has access to the ${subClass.results[0].name} subclass.`)
        
        chooseAgain = await promptToContinue()
    }
    typewriterEffect("You seated yourselves and called for a stein of the finest mead. Your partner, Rannie, is in a particularly good mood. Quaffing the bar's spirits buoyed your spirits. When things are lively, Rannie will recount a certain tale. You were an adventurer just starting out, and didn't know right from left. It was then that you first met.", () => {})
}

function typewriterEffect(text, onComplete) {
    let i = 0;
    let currentSentence = '';
    let isPeriod = false; // Flag to check if the last character was a period

    function typeNextChar() {
        if (i < text.length) {
            const char = text.charAt(i);
            i++;

            if (isPeriod && char === ' ') {
                // Skip the space after a period and start the new sentence
                typeNextChar();
                return;
            }

            currentSentence += char;
            process.stdout.write('\r' + currentSentence);

            if (char === '.') {
                isPeriod = true; // Set the flag when a period is encountered
                setTimeout(() => {
                    console.log(); // Move to next line after the sentence is complete
                    currentSentence = '';
                    setTimeout(typeNextChar, 500); // Wait for 2.5 seconds before starting the next sentence
                }, 2000); // Delay after the period
            } else {
                isPeriod = false; // Reset the flag for non-period characters
                setTimeout(typeNextChar, 50); // Typing speed delay
            }
        } else {
            console.log(); // Ensure the cursor moves to the next line after completion
            if (onComplete) {
                onComplete();
            }
        }
    }

    typeNextChar();
}

export { promptUser }