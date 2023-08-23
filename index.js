
let string = ""; 
let memory = 0; // declare a variable to store the memory value
let buttons = document.querySelectorAll('.button'); // select all the elements with the class 'button'
Array.from(buttons).forEach((button)=>{ // loop through each button element
  button.addEventListener('click', (e)=>{ // add a click event listener to each button
    if(e.target.innerHTML == '='){ // if the button is '='
      string = eval(string); // evaluate the string as an expression and assign the result to string
      document.querySelector('input').value = string; // display the string in the input element
    }
    else if(e.target.innerHTML == 'C'){ // if the button is 'C'
      string = "" // clear the string
      document.querySelector('input').value = string; // display the empty string in the input element
    }
    else if(e.target.innerHTML == 'M+'){ // if the button is 'M+'
      memory += Number(string); // add the current string value to the memory value
      document.querySelector('input').value = memory; // display the memory value in the input element
      string = ""; // clear the string
    }
    else if(e.target.innerHTML == 'M-'){ // if the button is 'M-'
      memory -= Number(string); // subtract the current string value from the memory value
      document.querySelector('input').value = memory; // display the memory value in the input element
      string = ""; // clear the string
    }
    else{  // for any other button
    console.log(e.target) // log the target element to the console
    string = string + e.target.innerHTML; // append the innerHTML of the button to the string
    document.querySelector('input').value = string; // display the updated string in the input element
      }
  })
})