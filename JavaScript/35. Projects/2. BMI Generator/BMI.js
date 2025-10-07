// Select the form element from the HTML
const form = document.querySelector('form');

// Add a 'submit' event listener to the form
form.addEventListener('submit', function(e){
    e.preventDefault();         // Prevent the default form submission (which reloads the page)
    
    // Get height and weight input values and convert them to numbers
    const height = Number(document.querySelector('#height').value);
    const weight = Number(document.querySelector('#weight').value);
    const results = document.querySelector('#results');         // Select the element where the result will be displayed


    // ----------- Input Validation -----------
    if (height === "" || height < 0 || isNaN(height)) {     // Check if height is empty, negative, or not a number
        results.innerHTML =`Please give a valid ${height}`;
    } else if (weight === "" || weight < 0 || isNaN(weight)) {      // Check if weight is empty, negative, or not a number
        results.innerHTML =`Please give a valid ${weight}`;
    } else {                                                              // If both inputs are valid, calculate BMI
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    
        
        // ----------- BMI Category Check -----------
        if(bmi < 18.6) {
            results.innerHTML = `<b>Under Weight</b><br>Your BMI is: <span>${bmi}</span>`;
        } else if(bmi >= 18.6 && bmi <= 24.9 ) {
            results.innerHTML = `<b>Normal Weight</b><br>Your BMI is: <span>${bmi}</span>`;
        }
        else if(bmi > 24.9) {
            results.innerHTML = `<b>Over Weight</b><br>Your BMI is: <span>${bmi}</span>`;
        }else {
            results.innerHTML = `Wrong Input`
        }
    } 
}, false)