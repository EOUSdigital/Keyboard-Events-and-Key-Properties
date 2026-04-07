"use strict";

// Title 🟧 Module 8 - Events: Lesson 05. Keyboard Events and Key Properties

//? 🧩 Guided Practice (Mini Task)

// const keyDisplay = document.getElementById('keyDisplay');

// document.addEventListener('keydown', (e) => {
//     keyDisplay.textContent = `Key: ${e.key} | Code: ${e.code}`;
// });

//? 🧩 Your Next Task

const keyAction = document.getElementById('keyAction');

// document.addEventListener('keydown', (e) => {
//     if (e.key === 'Enter') keyAction.textContent = "Submitted!";
//     else if (e.key === 'Escape') keyAction.textContent = "Cancelled!";
//     else if (e.key === 'ArrowUp') keyAction.textContent = "Moving Up!";
//     else return;
// });

//? 🧩 Project: Live Input Feedback System

// const inputField = document.getElementById('inputField');
// const liveInput = document.getElementById('liveInput');

// inputField.addEventListener('input', (e) => {
//     liveInput.textContent = `You typed: ${e.target.value}`;
//     inputField.focus();
// });

// inputField.addEventListener('keydown', (e) => {
//     if (e.key === 'Enter') {
//         liveInput.textContent = `Submitted: ${e.target.value}`;
//     } else if (e.key === 'Escape') {
//         e.target.value = '';
//         liveInput.textContent = 'Cancelled';
//     } else {
//         return;
//     }
// });

//? 🧩 Challenge: Command Input System

const commandInput = document.getElementById('commandInput');
const commandOutput = document.getElementById('commandOutput');

commandInput.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;

    const userInput = e.target.value.toLowerCase().trim();
    
    if (userInput === 'hello') {
        commandOutput.textContent = 'Hello there 👋';
    } else if (userInput === 'clear') {
        commandOutput.textContent = '';
    } else if (userInput === 'help') {
        commandOutput.textContent = 'Available commands: hello, clear, help';
    }

    e.target.value = '';
});

