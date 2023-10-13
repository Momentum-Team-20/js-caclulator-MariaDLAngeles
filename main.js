console.log('connected')

// let calcData = []

const buttons = document.querySelectorAll('button');
// we are selecting ALL the button elements


for(let button of buttons) {
    button.addEventListener('click', (event) => {
    // we are actively 'listening'/ watching for an event of 'click'
        console.log(event)
    // we are displaying that 'click' in the console when it happens
        console.log(button.innerText)
    // we are console logging the innerText from the html element that was clicked and logging it in the console
    
         let displayElement = document.querySelector('#display')
    // this returns the first element with the id of display
            displayElement.value = button.innerText
    //our display variable is now the button HTML's inner text 
    
    console.log(displayElement)

        
    }) 
    }
    