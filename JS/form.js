"use strict";
// demo.ts
// Get references to the HTML elements
const nameInput = document.getElementById('name');
const salaryInput = document.getElementById('salary');
const dobInput = document.getElementById('dob');
const ageInput = document.getElementById('age');
// Add an event listener to calculate age when the date of birth changes
dobInput.addEventListener('change', calculateAge);
function calculateAge() {
    const dob = new Date(dobInput.value);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    ageInput.value = age.toString();
}
