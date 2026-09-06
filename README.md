# 🎮 Tic-Tac-Toe Game

A simple and interactive **Tic-Tac-Toe** game built using **HTML, CSS, and JavaScript**.

Players take turns placing **O** and **X** on a 3×3 grid. The first player to get three of their symbols in a row wins the game.

## ✨ Features

* 🎯 Two-player gameplay
* 🔄 Turn-based **O / X** system
* 🏆 Automatic winner detection
* 🚫 Prevents players from selecting an already-filled box
* 🎉 Displays a winner message
* 🔁 Reset/New Game functionality
* 📱 Simple and user-friendly interface

## 🛠️ Technologies Used

* **HTML** – Structure of the game
* **CSS** – Styling and layout
* **JavaScript** – Game logic and interactivity

## 📂 Project Structure

```text
tic-tac-toe/
│
├── index.html
├── style.css
├── app.js
└── README.md
```

## 🎮 How to Play

1. Open the game in your browser.
2. Player **O** starts the game.
3. Click on an empty box to place your symbol.
4. Player **X** takes the next turn.
5. Continue taking turns.
6. The first player to get three symbols in a row wins.

Winning combinations include:

```text
[0, 1, 2]    [3, 4, 5]    [6, 7, 8]

[0, 3, 6]    [1, 4, 7]    [2, 5, 8]

[0, 4, 8]    [2, 4, 6]
```

These represent the possible horizontal, vertical, and diagonal winning patterns.

## 🔄 Resetting the Game

Click the **Reset/New Game** button to:

* Clear all the boxes
* Enable all the boxes again
* Set the first turn back to **O**
* Hide the winner message
* Start a new game

## 🧠 Game Logic

The game uses JavaScript to keep track of the current player's turn.

```js
let turnO = true;
```

When `turnO` is `true`, **O** is placed. Otherwise, **X** is placed.

The game checks the board against predefined winning patterns:

```js
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6]
];
```

If all three positions in any pattern contain the same symbol, that player wins.

## 🚀 How to Run

### Option 1 — Open directly

Download or clone the project and open:

```text
index.html
```

in your web browser.

### Option 2 — Using VS Code

1. Open the project folder in **VS Code**.
2. Install the **Live Server** extension if you have it.
3. Right-click `index.html`.
4. Select **Open with Live Server**.
5. Start playing! 🎮

## 🔮 Future Improvements

Some features that could be added in the future:

* [ ] Draw/tie detection
* [ ] Score tracking
* [ ] Player name input
* [ ] Single-player mode against the computer
* [ ] Difficulty levels
* [ ] Sound effects
* [ ] Animations
* [ ] Responsive mobile design
* [ ] Dark/light mode

## 👨‍💻 Author
Priyanshu Singh 
Created as a JavaScript practice project to learn:

* DOM manipulation
* Event listeners
* JavaScript functions
* Arrays and loops
* Conditional statements
* Game logic

---

⭐ **If you enjoyed this project, consider giving it a star!**

🎮 **Have fun playing Tic-Tac-Toe!**
