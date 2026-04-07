"use strict";

// Title 🟧 Module 8 - Events: Lesson 05. Keyboard Events and Key Properties

//? 1️⃣ What Are Keyboard Events?

//  👉 Keyboard events happen when a user presses keys.
//  Think:
//  • “User types something → JavaScript reacts”

//* 🧠 The 3 Main Keyboard Events

//  | Event             | When it fires         |
//  | ----------------- | --------------------- |
//  | `keydown`         | Key is pressed down   |
//  | `keyup`           | Key is released       |
//  | `keypress`        | (Deprecated — ignore) |

//* 🎯 Focus on:

//  👉 keydown (most important)

//* 💻 Basic Example

document.addEventListener('keydown', (e) => {
    console.log('Key pressed');
});

//* 🔍 Breakdown

(e)

//  👉 Event object (same concept as Lesson 4)

e.type

//  👉 "keydown"

//? 2️⃣ Key Properties You MUST Know

//* 🔤 1. e.key

//  👉 The actual key pressed

document.addEventListener('keydown', (e) => {
    console.log(e.key);
});

//  Examples:
//  • Press a       → "a"
//  • Press Enter   → "Enter"
//  • Press Shift   → "Shift"

//* 🔢 2. e.code

//  👉 Physical key on the keyboard

console.log(e.code);

//  Examples:
//  • "KeyA"
//  • "Enter"
//  • "ArrowUp"

//# ⚖️ key vs code (Important)

//  | Property      | Meaning                  |
//  | ------------- | ------------------------ |
//  | `e.key`       | What the user typed      |
//  | `e.code`      | Where the key is located |

//# 🧠 Example

//  If user presses Shift + a:
//  • e.key     → "A"
//  • e.code    → "KeyA"

//? 3️⃣ Real Example

document.addEventListener('keydown', (e) => {
    console.log(`Key: ${e.key}`);
    console.log(`Code: ${e.code}`);
});

//* 🧠 Why This Matters

//  You can now:
//  • Detect shortcuts (Ctrl + S)
//  • Build games (arrow keys)
//  • Handle input logic
//  • Create real-time interactions

//# 🧩 Guided Practice (Mini Task)

//  🎯 Task: Key Display
//  When user presses a key:

//  Display:
Key: a
Code: KeyA

//  HTML: can be found in index.html
//  JavaScript: can be found in script.js

//* ✅ Success Criteria
//  Press any key → text updates
//  Shows correct key + code

//! ⚠️ Common Mistakes
//  • ❌ Using keypress (deprecated)
//  • ❌ Forgetting (e)
//  • ❌ Confusing key vs code

//# 🤔 Reflection

//  Why do you think "e.code" is useful in games, but "e.key" is more useful in forms?
//  Answer: The "e.code" is great for handling actions that are not language-specific and instead related to the physical layout of the keyboard. The "e.key" or "event.key" is a property of the event object that is created when the keyup or keydown event is fired. It is particularly useful in web forms for creating interactive and accessible user experiences.

//! Feedback

//? 🧠 1. Reflection Assessment

//  Your Answer:
//  • “e.code is great for handling actions that are not language-specific… e.key is useful in forms…”

//* ✅ What You Got Right

//  ✔️ Excellent core idea
//  • e.code → tied to physical key position ✔️
//  • e.key → tied to actual character typed ✔️

//  ✔️ You also correctly connected:
//  • e.key → forms and user input
//  • Accessibility thinking → very good 👏

//* 🔧 Small Improvement (Clarity)

//  Your answer is correct, but we can make it sharper:

//# 🎯 Stronger Version

//  • The "e.code" is useful in games because it refers to the physical key on the keyboard, so controls stay consistent regardless of keyboard layout or language.
//  • The "e.key" is more useful in forms because it reflects the actual character the user types, which is important for input, validation, and user interaction.

//* 🧠 Key Insight
//  👉 Games care about position
//  👉 Forms care about meaning

//? 🧠 2. Guided Practice Review

//  JavaScript: can be found in script.js

//* ✅ What You Did Well

//  ✔️ Correct event → keydown
//  ✔️ Correct use of (e)
//  ✔️ Correct properties → key + code
//  ✔️ Dynamic DOM update
//  👉 This is perfect implementation

//* 🔍 Your Observation

//  • “When I click any keys on my keyboard, the result is logged in the browser.”

//  Small correction:
//  👉 You are not clicking keys
//  👉 You are "pressing keys"

//* 💡 Important Distinction
//  Mouse → click
//  Keyboard → press

//* 🧠 What’s Actually Happening

//  Every time you press a key:

//  JavaScript: keydown → event fires → e created → text updates

//  👉 Real-time interaction — just like in:
//  • Chat apps
//  • Games
//  • Search bars

//# 🤔 Reflection (Next Level)

//  👉 What do you think happens if you hold down a key?
//  Answer: When I press and hold a key the event fires, an event is created, and the text is updated.

//  👉 Does the event fire once or multiple times?
//  Answer: The event fires once, because I press the key once.

//! Feedback:

//TODO  Let’s go through your answers carefully.

//? 🧠 1. Your First Answer

//  “When I press and hold a key the event fires, an event is created, and the text is updated.”

//  ✅ What You Got Right
//  ✔️ Yes — an event is created
//  ✔️ Yes — your UI updates
//  ✔️ You understand the flow

//! ⚠️ What’s Missing
//  👉 You didn’t fully describe what happens over time

//? 🧠 2. Your Second Answer

//  “The event fires once, because I press the key once.”
//  🚨 This is the key misconception

//* ❗ Correct Behavior

//  👉 When you hold down a key, the event fires:
//  MULTIPLE TIMES

//? 🔍 What actually happens

//  1. Key pressed ↓
//  2. keydown fires
//  3. keydown fires again
//  3. keydown fires again
//  3. keydown fires again...
//  4. (until you release)
//  👉 This is called key repeat

//* 💡 Why this exists

//  Because systems are designed so that:
//  • Holding a key = repeated input
//  • Like typing: aaaaaa or any key 

//* 🧠 Correct Answer (What You’re Aiming For)

//  When holding down a key, the "keydown" event fires multiple times repeatedly until the key is released.

//! 🔥 Key Insight

//  | Event         | Behavior                   |
//  | ------------- | -------------------------- |
//  | `keydown`     | Fires repeatedly when held |
//  | `keyup`       | Fires once when released   |

//# 🤔 Quick Check

//  Which event would you use if you want something to happen only once per key press?
//  (Hint: not keydown…)
//  Answer: The "keyup" will be used to happen only once per key press.

//! Feedback


//TODO  🚀 Now Let’s Level Up

//? 🧩 Detecting Specific Keys
//  This is where keyboard events become useful

//* 🎯 Example: Detect Enter Key

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        console.log('Escape pressed!');
    }
});

//? 🎯 Example: Detect Escape Key

if (e.key === 'Escape') {
    console.log('Escape pressed!');
}

//? 🎯 Example: Arrow Keys

if (e.key === 'ArrowUp') {
    console.log('Up!');
}

//? 🧠 Why This Matters

//  Now you can build:
//  • Form submission on Enter
//  • Close modals with Escape
//  • Move characters in games with arrows

//? 🧩 Next Task

//* 🎯 Build: Key Action Display
//  When user presses:
//  • Enter → "Submitted!"
//  • Escape → "Cancelled!"
//  • ArrowUp → "Moving Up!"

//* ✅ Success Criteria
//  • Detect correct keys
//  • Display correct message
//  • Works instantly

//# 🤔 Reflection

//  Why do we use e.key === 'Enter' instead of something like 'enter'?
//  Answer: We use e.key === 'Enter' (capitalized) in JavaScript because it is the standardized string representation of the Enter key defined by the W3C KeyboardEvent standard. 

//! Feedback

//TODO  Excellent — this is strong, clean work 👏
//  You are now applying keyboard events correctly and thinking about standards. Let’s review both parts.

//? 🧠 Code Review

//  ✅ What You Did Well
//  ✔️ Correct event → keydown
//  ✔️ Correct property → e.key
//  ✔️ Correct key names (Enter, Escape, ArrowUp)
//  ✔️ Clean and readable logic
//  👉 This is fully functional and correct

//? 🔧 Small Improvement (Best Practice)

//  Right now all if statements run every time.
//  👉 Not wrong — but we can improve efficiency and clarity:

if (e.key === 'Enter') {
    keyAction.textContent = "Submitted!";
} else if (e.key === 'Escape') {
    keyAction.textContent = "Cancelled!";
} else if (e.key === 'ArrowUp') {
    keyAction.textContent = "Moving Up!";
}

//  👉 Stops checking once a match is found

//! 🔥 Even Better (Scalable Pattern)

const actions = {
    Enter: "Submitted!",
    Escape: "Cancelled!",
    ArrowUp: "Moving Up!"
}

document.addEventListener('keydown', (e) => {
    if (actions[e.key]) {
        keyAction.textContent = actions[e.key];
    }
});

//  👉 This is how real apps scale (just like your dataset work earlier)

//? 🧠 Reflection Assessment

//  Your Answer: “We use e.key === 'Enter' because it is the standardized string representation defined by the W3C…”

//* ✅ What You Got Right

//  ✔️ Correct — it is standardized
//  ✔️ Correct casing matters (Enter ≠ enter)
//  ✔️ Shows awareness of specification-level thinking
//  👉 This is excellent 👏

//* 🔧 Slight Improvement (Clarity)

//  Let’s make it more practical:
//  🎯 Stronger Version
//  We use e.key === 'Enter' because JavaScript returns standardized key names with exact casing, so we must match them precisely. Using 'enter' would not work because it does not match the actual value returned by the event.

//* 🧠 Key Insight

//  👉 JavaScript comparisons are case-sensitive

'Enter' !== 'enter'

//* 📊 Assessment
//  • Keyboard event usage → 9/10
//  • Logic structure → 8.5/10
//  • Concept understanding → 9/10
//  👉 You are now very comfortable with this topic

//# 🤔 Final Reflection (Before Next Step)

//  What do you think happens if you press:
//  👉 Shift + Enter
//  What will e.key be?
//  Answer: If I press Shift + Enter, the value of "e.key" will still be exactly 'Enter'. While the Shift key modifies "printable" characters (changing 'a' to 'A'), it does not change the string value of "named" control keys like Enter, Backspace, or Escape.

//TODO  🧠 Step 1: Small Real-World Keyboard Project

//? 🧩 Project: Live Input Feedback System

//* 🎯 Goal

//  Build a system where:
//  • User types in an input field
//  • The app reacts in real time
//  • Specific keys trigger actions

//* 🧱 Step 1: HTML

//* 🧠 Step 2: Behavior Requirements

//  🔤 Typing (Real-time)
//  • When user types → show: "You typed: hello"

//  ⏎ Enter Key
//  • Press Enter → show: "Submitted: hello"

//  ❌ Escape Key
//  Press Escape → clear input + show: "Cancelled"

//# 💡 Hints (Use What You Learned)

//  You will need: "e.key" and "input.value"

//* 🧠 Important Thinking

//  You are combining:
//  • Keyboard events (keydown)
//  • Event object (e)
//  • DOM updates
//  • Input values
//  👉 This is a real application pattern

//! ⚠️ Common Pitfalls
//  • Forgetting to update in real-time
//  • Not clearing input on Escape
//  • Mixing "keydown" logic with input value incorrectly

//* ✅ Success Criteria

//  You are done when:
//  • Typing updates text live
//  • Enter submits correctly
//  • Escape clears input and resets

//# 🤔 Reflection Before Coding

//  Which event do you think is better for:
//  • Real-time typing display
//  • Detecting Enter
//  (Hint: they might not always be the same 👀)
//  Answer: The "input" for real-time typing display, and keydown or keyup for detecting Enter. input fires whenever the field’s value changes, while Enter is a keyboard action that you detect by checking "event.key === 'Enter'" in a keyboard event handler.

//! Feedback

//TODO  Let’s review both parts carefully.
//  This is excellent work — both your reflection and your implementation show real understanding 👏

//? 🧠 1. Reflection Assessment

//  Your Answer:
//  • “The input for real-time typing… and keydown/keyup for Enter…”

//* ✅ This is 100% correct

//  You nailed the distinction:
//  ✔️ Real-time typing → input
//  • Fires when the value actually changes
//  • Works with typing, paste, delete, etc.

//  ✔️ Detecting Enter → keydown / keyup
//  • Keyboard-specific action
//  • Requires checking:    e.key === 'Enter'

//* 🔥 Why This Is Important

//  You understood something many beginners miss:
//  • Not all user input comes from the keyboard
//  👉 input is about value changes
//  👉 keydown is about physical key actions

//? 🧠 2. Code Review

//  Your Code

inputField.addEventListener('input', (e) => {
    liveInput.textContent = `You typed: ${e.target.value}`;
});

//  ✔️ Perfect
//  ✔️ Correct event
//  ✔️ Correct property (value)
//  ✔️ Real-time update

inputField.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') liveInput.textContent = `Submitted: ${e.target.value}`;
    else if (e.key === 'Escape') liveInput.textContent = 'Cancelled';
    else return;
});

//  ✔️ Correct key detection
//  ✔️ Clean logic
//  ✔️ Proper use of e.target.value

//! ⚠️ Small Missing Piece (Important)

//  👉 Requirement:
//  • Escape → clear input + show "Cancelled"

//  ❌ Current behavior:
//  • Shows "Cancelled"
//  • But input still contains text

//  ✅ Fix

if (e.key === 'Escape') {
    e.target.value = '';
    liveInput.textContent = 'Cancelled';
}

//* 🔥 Optional Improvement (Polish)

//  Prevent unnecessary return:

if (e.key === 'Enter') {
    liveInput.textContent = `Submitted: ${e.target.value}`;
} else if (e.key === 'Escape') {
    e.target.value = '';
    liveInput.textContent = 'Cancelled';
}

//* 🧠 What You Just Demonstrated

//  You combined:
//  • ✅ input event (real-time updates)
//  • ✅ keydown (specific key detection)
//  • ✅ Event object (e)
//  • ✅ DOM updates
//  • ✅ State control (input value)
//  👉 This is real application logic

//# 🤔 Reflection

//  Why would not "keydown" alone be enough for real-time typing display?
//  (Hint: think about paste or autocomplete)
//  Answer: When I use the keyboard to type something in a field, the "keydown" is used for real-time typing. This operation is not enough because I can use the copy&paste option to add text or the field has autocomplete that will be visible in the browser.

//! Feedback

//TODO  Excellent — this is a strong and accurate reflection 👏
//  You have clearly understood the limitation. Let’s refine it slightly to make it developer-level precise.

//? 🧠 Your Answer
//  “keydown is not enough because I can use copy & paste or autocomplete…”

//* ✅ What You Got Right

//  ✔️ You identified paste (Ctrl+V)
//  ✔️ You identified autocomplete
//  ✔️ You understand that not all input comes from key presses
//  👉 This is the core idea — very good

//* 🔧 Small Improvement (Precision Upgrade)

//  Let’s sharpen your explanation slightly:

//* 🎯 Stronger Version

//  The "keydown" is not enough for real-time typing because it only detects physical key presses. It does not handle other ways the input value can change, such as pasting text, autocomplete, drag-and-drop, or browser suggestions. The input event is better because it fires whenever the value of the field changes, regardless of how the change happened.

//* 🧠 Key Insight (Very Important)
//  👉 keydown = user pressed a key
//  👉 input = the value actually changed

//* 🔥 Big Concept You Now Understand

//  Always choose events based on what you care about
//  • Care about keys → use "keydown"
//  • Care about value changes → use "input"

//* 📊 Assessment
//  • Concept understanding → 9.5/10
//  • Real-world awareness → Excellent
//  • Precision → Very good (now improved)
//  👉 This is strong developer-level reasoning

//TODO 🚀 Step 2: Harder Keyboard Challenge (Real-World)

//  Now we level up.

//? 🧩 Challenge: Command Input System

//* 🎯 Goal
//  Build an input that behaves like a mini command console

//* 🧱 Behavior
//  User types commands:
//  | Input   | Result                   |
//  | ------- | ------------------------ |
//  | `hello` | "Hello there 👋"         |
//  | `clear` | Clears output            |
//  | `help`  | Shows available commands |

//* 💻 HTML can be found include in index.html

//* 🧠 Requirements
//  Use:
//  • input → for live typing feedback (optional)
//  • keydown → detect Enter

//* ⚙️ Logic
//  When user presses Enter:
//  • Read input value
//  • Match command
//  • Show result
//  • (Optional) clear input

//# 💡 Hint

if (e.key === 'Enter') {
    const value = e.target.value;
}

//* ✅ Success Criteria
//  • Enter triggers command
//  • Correct output per command
//  • Input resets (optional but recommended)

//# 🤔 Reflection

//  Why is this similar to:
//  • Terminal commands
//  • Chat commands
//  • Search systems
//  Answer: The created structure is essentially a miniature command-line interface (CLI). It mimics how terminals and chat bots work because it follows the same core pattern: Input → Processing → Output.

//! Feedback

//TODO  Let’s review it properly and push it to a professional level.
//  This is excellent work again — both your reflection and your solution show real progress 👏

//? 🧠 1. Reflection Assessment

//  Your Answer:
//  “It mimics a CLI: Input → Processing → Output”

//* ✅ This is spot on
//  You identified the exact pattern:   User Input → Logic → Result
//  ✔️ Terminal → commands
//  ✔️ Chat → messages
//  ✔️ Search → queries
//  👉 Same core structure

//* 🔥 Stronger Version (Refined)
//  It is similar because all these systems take user input, process it using predefined logic or rules, and return a result. This pattern is the foundation of command-line interfaces, chat systems, and search functionality.

//* 🧠 Key Insight
//  You are now thinking in "patterns", not just code.
//  👉 That’s a big step forward.

//? 🧠 2. Code Review

//  Your Code

commandInput.addEventListener('keydown', (e) => {
    const userInput = e.target.value.toLowerCase().trim();

    if (e.key === 'Enter' && userInput === 'hello') {
        commandOutput.textContent = 'Hello there 👋';
    } else if (e.key === 'Enter' && userInput === 'clear') {
        commandOutput.textContent = '';
    } else if (e.key === 'Enter' && userInput === 'help') {
        commandOutput.textContent = 'Shows available commands';
    }

    e.target.value = '';
});

//* ✅ What You Did Well
//  ✔️ Correct use of keydown
//  ✔️ Correct use of e.key === 'Enter'
//  ✔️ Input normalization (toLowerCase().trim()) → excellent
//  ✔️ Clean conditional logic
//  👉 This is very solid

//! ⚠️ Important Issue (Behavior Bug)

e.target.value = '';

//  👉 This runs on every key press

//* ❌ What happens:
//  • You type "h" → input clears
//  • You type "e" → clears again
//  • You cannot actually type properly

//? ✅ Fix

//  Move it inside the Enter condition:

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

//? 🔥 Why This Is Better

//  👉 Early exit:  if (e.key !== 'Enter') return;
//  ✔️ Cleaner
//  ✔️ Prevents unnecessary checks
//  ✔️ Fixes input clearing bug

//# 🧠 Optional Upgrade (Real-World Pattern)

const commands = {
    hello: 'Hello there 👋',
    help: 'Available commands: hello, clear, help'
};

if (userInput === 'clear') {
    commandOutput.textContent = '';
} else {
    commandOutput.textContent = commands[userInput] || 'Unknown command';
}

//  👉 This scales much better

//? 📊 Assessment
//  • Logic → 9/10
//  • Structure → 8.5/10 (due to bug)
//  • Thinking → 9.5/10
//  👉 You’re very close to writing production-style code

//# 🤔 Final Reflection

//  Why is this better:
if (e.key !== 'Enter') return;
//  instead of checking e.key === 'Enter' in every condition?
//  Answer: In this case "e.key" is used as a guard clause. A guard clause simplifies the logic by immediately exiting the function for irrelevant keys, keeping command checks clean and unnested. A guard clause prevents deep nesting and redundant checks by "failing fast," allowing to focus purely on command logic without repeatedly verifying the "Enter" key. The "Enter" key was transformed from a repeated requirement into a single "gatekeeper" that protects the rest of the code.
