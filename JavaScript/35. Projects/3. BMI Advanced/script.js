// ---------------- PAGE NAVIGATION AND BMI LOGIC ----------------


// Get references to all three pages by their IDs
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');

// ---------- When "Start" button is clicked ----------
document.getElementById('startBtn').addEventListener('click', () => {
  page1.classList.remove('active');     // Hide the first page
  page2.classList.add('active');          // Show the second page (BMI input form)
});

// ---------- When "Calculate" button is clicked ----------
document.getElementById('calcBtn').addEventListener('click', () => {
  const weight = parseFloat(document.getElementById('weight').value);   // Get the user's weight from input field and convert it to a number
  const height = parseFloat(document.getElementById('height').value) / 100;     // Get the user's height (convert cm to meters)
  const bmi = (weight / (height * height)).toFixed(1);    // Calculate BMI = weight / (height²) and round to 1 decimal place

  let message = '';   // Prepare an empty message to store BMI category

  // Check which category the BMI falls into
  if (bmi < 18.5) message = 'Underweight';
  else if (bmi < 24.9) message = 'Normal weight';
  else if (bmi < 29.9) message = 'Overweight';
  else message = 'Obese';

  document.getElementById('bmiValue').textContent = bmi;    // Display the calculated BMI number
  document.getElementById('bmiMessage').textContent = `You have ${message}`;    // Display the BMI category message (e.g., "You have Normal weight")

  page2.classList.remove('active');   // Hide the input page
  page3.classList.add('active');    // Show the result page
});

// ---------- When "Back" button is clicked ----------
document.getElementById('backBtn').addEventListener('click', () => {
  page3.classList.remove('active');   // Hide the result page
  page2.classList.add('active');    // Show the second page again
});
