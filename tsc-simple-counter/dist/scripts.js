"use strict";
/**
 * Counter App Implementation
 *
 * This module implements a simple counter application with TypeScript.
 * Features:
 * - Increment/Decrement/Reset buttons
 * - State management using variables
 * - Type-safe DOM manipulation
 * - Event handling with proper typing
 */
// Counter state management, initailly 0
let counter = 0; // Current counter value
// DOM Element references
const counterDisplay = document.getElementById('counter-display');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');
/*

Updates the counter display in the DOM
Ensures display elemnts exists before updating.

*/
const updateDisplay = () => {
    if (counterDisplay) {
        counterDisplay.textContent = counter.toString();
    }
};
/*
Handle increment button click with prevents negative value
*/
const handleIncrement = () => {
    counter++;
    updateDisplay();
};
/*
Handles decrement button click with prevents negative value
*/
const handleDecrement = () => {
    if (counter > 0) {
        counter--;
        updateDisplay();
    }
};
/*
Resets counter to zero
*/
const handleReset = () => {
    counter = 0;
    updateDisplay();
};
/**
 * Initializes the application
 * Sets up event listeners and intial display
 */
const initializeApp = () => {
    // set initial display
    updateDisplay();
    // add event listeners with null checks
    if (incrementBtn) {
        incrementBtn.addEventListener('click', handleIncrement);
    }
    if (decrementBtn) {
        decrementBtn.addEventListener('click', handleDecrement);
    }
    if (resetBtn) {
        resetBtn.addEventListener('click', handleReset);
    }
};
// Start the application when DOM is loaded.
document.addEventListener("DOMContentLoaded", initializeApp);
