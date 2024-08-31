
const title = document.getElementById('headerHosa');
const title2 = document.getElementsByClassName('headerTwo');
const title3 = document.querySelector('.one');

console.log(title);
console.log(title2);
console.log(title3);

// Manipulating HTML



// Event Handling
let divHider = document.querySelector("div");
const btn = document.querySelector("button");
console.log(btn);

btn.addEventListener("click",  function() {
    console.log("Button clicked, Hello Hossam");
    if(divHider.style.display === 'none') {
        divHider.style.display = 'block';
    } else {
        divHider.style.display = 'none';
    }
});


// Create an array of objects with nested objects
const quotes = [
    { 
        name: 'Hossam',
        wisdom: 'The World is a Beautiful Place!'
    },
    { 
        name: 'Max',
        wisdom: 'Its just an Inchident!'
    },
    { 
        name: 'Taylor',
        wisdom: 'Its a cold december'
    }
];


// Event Handling
let quoteDiv = document.getElementsByClassName("quoteGen");
const generateButton = document.getElementById("generate");

generateButton.addEventListener("click",  () => {
    console.log("Generate Button clicked, Hello Hossam");

    // Use map to create an array of HTML strings
    const quoteHtml = quotes.map(quote => {
        return `${quotes.name} is ${quotes.wisdom} years old.`;
    });
    
    // Join the array into a single string and set it as the innerHTML of resultDiv
    quoteDiv.innerHTML = quoteHtml.join('');
});



// Iterate over the array and display each element
// quotes.forEach(quote => {
//     const randomDiv = document.createElement('div');
//     randomDiv.textContent = `${quotes.name} is ${quotes.quote} years old.`;
//     quoteDiv.appendChild(randomDiv);
// });

let userInputString = prompt("Please enter your input: ");
console.log("User input is:", userInputString);

const words = userInputString.split(" ");
let largestWord = words[0];
let largestWordLength = words[0].length;

for (let i = 1 ; i < words.length ; i++) {
    if (words[i].length > largestWordLength) {
        largestWord = words[i];
        largestWordLength = words[i].length;
    }
}

console.log('The word with the maximum length is ' + largestWord + ' and its length is ' + largestWordLength);
