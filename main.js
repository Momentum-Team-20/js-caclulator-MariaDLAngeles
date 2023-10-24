// console.log('connected')

let calculation = []
let fullCalculation

const buttons = document.querySelectorAll('button');

// this function clears the entire contents of our calculator and replaces it with our ghost image -- it's almost identical to how we did it in myTunes

function deleteCalculator() {
    let entireCalculator = document.getElementById('entire-calculator')
    let ghostImage = document.createElement('img')
    ghostImage.src = "https://i.pinimg.com/1200x/2d/2e/2b/2d2e2b66c36b0bc343a4b6857ef8c913.jpg"
    ghostImage.classList.add("flip-calc-ghost")
    entireCalculator.innerHTML = []
    entireCalculator.appendChild(ghostImage)
  }

function clickButton(button) {
        // console.log(event)
        // console.log(button.innerText)
        let displayElement = document.querySelector('#display')
        displayElement.value = button.innerText
    
        calculate(button)

    function calculate(button){
        //textContent -- a property used to set or get text content
        const value = button.textContent
    
    if(value === "C") {
        calculation = []
        displayElement.value = '' 
    } else if (value === "=") {
        displayElement.value = eval(fullCalculation)
    } else {
        calculation.push(value)
        fullCalculation = calculation.join('');
        // we are using .join to have all the numbers displayed as one big unit instead of separated by ,'s -- .join -> returns a new string by concatenating all of the elements in this array
        displayElement.value = fullCalculation
        }
    
        // this if block is for the fancy ghost flip, if we can add a click before the spin that'll be even cooler
    if(value === "!") {
        deleteCalculator()
        // displayElement.value = "Oh no! A ghost!"
        console.log(button.innerText)
        // console.log(displayElement.value)

    } 

    }
}


for(let button of buttons) {
    button.addEventListener('click', ()=> clickButton(button))

}
    
  