// console.log('connected')

let calculation = []
let fullCalculation

const buttons = document.querySelectorAll('button');

function clickButton(button) {
        // console.log(event)
        console.log(button.innerText)
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
    }
    
}

for(let button of buttons) {
    button.addEventListener('click', ()=> clickButton(button))

}
    
  