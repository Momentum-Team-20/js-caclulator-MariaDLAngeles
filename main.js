console.log('connected')

let calculation = []
let fullCalculation

const buttons = document.querySelectorAll('button');
// we are selecting ALL the button elements

function clickButton(button) {
    // we are actively 'listening'/ watching for an event of 'click'
        console.log(event)
    // we are displaying that 'click' in the console when it happens
        console.log(button.innerText)
    // we are console logging the innerText from the html element that was clicked and logging it in the console
    
         let displayElement = document.querySelector('#display')
    // this returns the first element with the id of display
            displayElement.value = button.innerText
    //our display variable is now the button HTML's inner text 
    

    calculate(button)

    function calculate(button){
    // we created a function
        const value = button.textContent
    //assinged a variable of value and used textContent -- a property used to set or get text content
        calculation.push(value)
    //pushed it into our empty array above -- 'let calculation'
    fullCalculation = calculation.join('');
    // we are using .join to have all the numbers displayed as one big unit instead of separated by ,'s -- .join -> returns a new string by concatenating all of the elements in this array
    displayElement.value = fullCalculation
    // and now will display it, to show what's happening on the screen
    
    
    console.log(calculation)
    
    }

    }

for(let button of buttons) {
    button.addEventListener('click', ()=> clickButton(button))

}
    
  