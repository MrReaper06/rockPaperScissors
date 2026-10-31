<h1 align="center">Rock Paper Scissors</h1>

<p>
  A browser-based Rock Paper Scissors game written in vanilla JavaScript.<br>
  Play five rounds against the computer — the final score decides the winner.
</p>

> **Status:** The game currently runs in the browser's developer console. A graphical interface is planned (see [Roadmap](#roadmap)).

---

## Table of Contents

- [How to Play](#how-to-play)
- [Rules](#rules)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [Roadmap](#roadmap)
- [Technologies](#technologies)
- [Getting Started](#getting-started)

---

## How to Play

1. Open `index.html` in any modern web browser.
2. Open the developer console:
   - **Chrome / Edge / Firefox:** press `F12` (or `Ctrl+Shift+J` for windows / `Cmd+Option+J` for mac) and select the **Console** tab.
3. A prompt will appear asking for your choice. Type `Rock`, `Paper`, or `Scissor` (By default `Rock` will be selected) and click **OK**.
4. The result of each round and the running score are printed to the console.
5. After 5 rounds, the final result is displayed.

Input is case-insensitive, so `rock`, `ROCK`, and `Rock` all work.

### Example Output

```
You win! Rock beats Scissor.

    computerScore: 0
    humanScore: 1

It's a tie.

    computerScore: 0
    humanScore: 1

...

    You won the game!
    computerScore: 2
    humanScore: 3
```

---

## Rules

| Your choice | Beats    | Loses to |
|-------------|----------|----------|
| Rock        | Scissor  | Paper    |
| Paper       | Rock     | Scissor  |
| Scissor     | Paper    | Rock     |

- A tie does not award a point to either side.
- The player with the higher score after 5 rounds wins. Equal scores result in a tied game.

---

## Project Structure

```
.
├── index.html     # Page markup; loads the script
├── javascript.js  # Game logic
└── README.md
```

---

## How It Works

The game logic lives in `javascript.js` and is split into small functions:

| Function | Description |
|----------|-------------|
| `main()` | Initializes the scores, starts the game, and announces the winner once all rounds are finished. |
| `playGame(humanScore, computerScore)` | Runs the 5-round loop, updates the scores, and returns them as `[humanScore, computerScore]`. |
| `playRound(humanChoice, computerChoice)` | Normalizes the player's input, compares both choices, logs the result, and returns `1` (human wins), `0` (computer wins), or nothing on a tie. |
| `getComputerChoice()` | Generates a random number between 0 and 1 and maps it to Rock, Paper, or Scissor. |
| `getHumanChoice()` | Uses `prompt()` to ask the player for their choice. |

---

## Roadmap

- [ ] Validate player input and handle invalid choices
- [ ] Add buttons for Rock, Paper, and Scissor instead of using `prompt()`
- [ ] Display scores and round results on the page instead of the console
- [ ] Add UI and styling
- [ ] Add a "Play Again" button

---

## Technologies

- HTML5
- JavaScript (ES6)

---

## Getting Started

No build tools or dependencies are required.

```bash
git clone https://github.com/MrReaper06/rockPaperScissors.git
cd rockPaperScissors
```

Then open `index.html` in your browser.
