# ⌨️ 🟧 Module 8 - Events: Lesson 05. Keyboard Events and Key Properties

![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow)
![Module](https://img.shields.io/badge/Module-08%20Events-blue)
![Lesson](https://img.shields.io/badge/Lesson-05%20Keyboard%20Events-green)
![Level](https://img.shields.io/badge/Level-Beginner-informational)

------------------------------------------------------------------------

## 📌 Overview

This lesson introduces **keyboard events in JavaScript**, allowing
developers to respond to user input from the keyboard.

By the end of this lesson, you will:
- Understand keyboard events (`keydown`, `keyup`) 
- Use `e.key` and `e.code`
- Detect specific keys (Enter, Escape, Arrow keys)
- - Build real-time input systems
- - Create command-based interactions

------------------------------------------------------------------------

## 🧠 Core Concept

Keyboard events are triggered when the user interacts with the keyboard.

``` javascript
document.addEventListener('keydown', (e) => {
  console.log(e.key);
});
```

👉 The event object (`e`) gives details about the key pressed.

------------------------------------------------------------------------

## 🎯 Main Keyboard Events

  Event        Description
  ------------ ------------------------------
  `keydown`    Fires when a key is pressed
  `keyup`      Fires when a key is released
  `keypress`   ❌ Deprecated (avoid using)

------------------------------------------------------------------------

## 🔤 Key Properties

### `e.key`

Represents the **actual key value**.

``` javascript
console.log(e.key);
```

Examples:
- `"a"`
- `"Enter"`
- `"Escape"`

------------------------------------------------------------------------

### `e.code`

Represents the **physical key on the keyboard**.

``` javascript
console.log(e.code);
```

Examples:
- `"KeyA"`
- `"ArrowUp"`
- `"Enter"`

------------------------------------------------------------------------

## ⚖️ `key` vs `code`

| Property      | Use Case
| ------------- | -------------------------------
| `e.key`       | User input (forms, typing)
| `e.code`      | Physical layout (games, controls)

------------------------------------------------------------------------

## 🔁 Key Repeat Behaviour

When holding down a key:

-   `keydown` fires **multiple times**
-   `keyup` fires **once when released**

------------------------------------------------------------------------

## 💻 Example: Display Key Info

``` javascript
const keyDisplay = document.getElementById('keyDisplay');

document.addEventListener('keydown', (e) => {
  keyDisplay.textContent = `Key: ${e.key} | Code: ${e.code}`;
});
```

------------------------------------------------------------------------

## 🎯 Detecting Specific Keys

``` javascript
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    console.log('Submitted!');
  } else if (e.key === 'Escape') {
    console.log('Cancelled!');
  } else if (e.key === 'ArrowUp') {
    console.log('Moving Up!');
  }
});
```

------------------------------------------------------------------------

## 🧠 Real-Time Input Handling

Use the `input` event for tracking value changes:

``` javascript
inputField.addEventListener('input', (e) => {
  console.log(e.target.value);
});
```

------------------------------------------------------------------------

## ⚠️ Why Not Only `keydown`?

`keydown` only detects key presses.

It does NOT handle:
- Paste (Ctrl+V)
- Autocomplete
- Drag & drop
- Browser suggestions

👉 Use `input` when you care about **value changes**

------------------------------------------------------------------------

## 🧪 Exercises Completed

### ✅ Key Display

-   Display `key` and `code` in real time

### ✅ Key Detection

-   Detect Enter, Escape, Arrow keys

### ✅ Live Input Feedback

-   Show text as user types
-   Handle Enter (submit)
-   Handle Escape (clear input)

------------------------------------------------------------------------

## 🧩 Mini Project: Command Input System

### Features:

-   Accept user commands (`hello`, `clear`, `help`)
-   Process input on Enter
-   Display dynamic output

``` javascript
if (userInput === 'hello') {
  output.textContent = 'Hello there 👋';
}
```

------------------------------------------------------------------------

## ⚠️ Common Mistakes

-   Using deprecated `keypress`
-   Forgetting `(e)` parameter
-   Incorrect key names (`enter` vs `Enter`)
-   Using `keydown` instead of `input` for value tracking
-   Clearing input on every key press

------------------------------------------------------------------------

## ✅ Best Practices

-   Use `keydown` for detecting keys
-   Use `input` for tracking value changes
-   Normalize input (`toLowerCase().trim()`)
-   Use early returns for cleaner logic

------------------------------------------------------------------------

## 🧠 Key Takeaways

-   Keyboard events allow real-time user interaction
-   `e.key` gives the character, `e.code` gives the key position
-   `keydown` repeats when held
-   Use the right event based on what you need

------------------------------------------------------------------------

## 💬 Final Note

Mastering keyboard events allows to build:
- Interactive forms
- Command systems
- Real-time applications

This is a core step toward building dynamic user interfaces.
