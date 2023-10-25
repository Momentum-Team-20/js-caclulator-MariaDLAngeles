// console.log('connected')

let calculation = []
let fullCalculation

const buttons = document.querySelectorAll('button');

for(let button of buttons) {
    button.addEventListener('click', ()=> clickButton(button))

}

// function test(input) {}
// const test = (input)=>{a line of code}
// const test = (input)=>


function clickButton(button) {
    // console.log(event)
    // console.log(button.innerText)
    let displayElement = document.querySelector('#display')
    displayElement.value = button.innerText
    
    calculate(button)
    
    function calculate(button){

        const value = button.innerText
        
        if(value === "C") {
            calculation = []
            displayElement.value = '' 
        } else if (value === "=") {
            displayElement.value = eval(fullCalculation)
        } else {
            calculation.push(value)
            fullCalculation = calculation.join('');
            // we are using .join to have all the numbers displayed as one big unit instead of separated by commas -- .join -> returns a new string by concatenating all of the elements in this array
            displayElement.value = fullCalculation
        }
        
        // this block is for the fancy card flip
        if(value === "!") {
            deleteCalculator()
            console.log(button.innerText)
            
        } 
        
    }    
}    


// this function clears the entire contents of our calculator and replaces it with our ghost image
function deleteCalculator() {
    let entireCalculator = document.getElementById('entire-calculator')
    let ghostImage = document.createElement('img')
    ghostImage.src = "https://i.pinimg.com/1200x/2d/2e/2b/2d2e2b66c36b0bc343a4b6857ef8c913.jpg"
    ghostImage.classList.add("flip-calc-ghost")
    entireCalculator.innerHTML = []
    entireCalculator.appendChild(ghostImage)
    ghostImage.addEventListener('click',()=> {
        // console.log('Ghost click!')
        location.reload()
        })
// location.reload() is a function used to refresh your page in the browser
    }