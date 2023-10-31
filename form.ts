// demo.ts

// Get references to the HTML elements
const nameInput = document.getElementById('name') as HTMLInputElement;
const salaryInput = document.getElementById('salary') as HTMLInputElement;
const dobInput = document.getElementById('dob') as HTMLInputElement;
const ageInput = document.getElementById('age') as HTMLInputElement;

// Add an event listener to calculate age when the date of birth changes
dobInput.addEventListener('change', calculateAge);

function calculateAge() {
    const dob = new Date(dobInput.value);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    ageInput.value = age.toString();
}

