#GameZone
🎮 Game Zone Portal
Welcome to Game Zone — a responsive, interactive, and beautifully designed multi-game arcade portal built entirely with HTML, CSS, and JavaScript. This project brings together 6 mini-games into one portal, giving users a modern experience with professional UI/UX.

🧠 Features
🎮 Beautiful landing page with animated "Enter Game Portal" intro.

🕹️ Game menu with hover animations and glowing card effects.

🖥️ Each game opens in a separate embedded iframe for seamless transitions.

↩️ Custom Back to Game Menu button for each game.

✅ Works with existing JavaScript logic (no changes to game code).

📱 Fully responsive on desktop, tablet, and mobile.

📁 Project Structure
bash
Copy
Edit
GameZone/
│
├── index.html                  # Main landing page + game menu + iframe loader
├── games/
│   ├── tictactoe.html          # Tic Tac Toe game
│   ├── typingtest.html         # Typing Test game
│   ├── numberguesser.html      # Number Guesser game
│   ├── balloonshooter.html     # Balloon Shooter game
│   ├── rockpaperscissors.html  # Rock Paper Scissors game
│   └── galaxyshooter.html      # Galaxy Shooter game
│
├── js/
│   ├── tictactoejs.js
│   ├── typingtest.js
│   ├── numguess.js
│   ├── balloonjs.js
│   ├── rockpprscrcss.js
│   └── galaxyshooterjs.js
📝 Note: All CSS styles are written inline inside each HTML game file for simplicity and custom look. All JavaScript files are original and unchanged.

🚀 How It Works
Landing Page (index.html)
Users see a fullscreen background with an animated welcome message and a button: Enter Game Portal.

Game Menu Section
After clicking the button, the landing screen hides, and a game selection menu appears. Each game is presented as a stylish interactive card.

Launching a Game
Clicking a game card opens the game in an <iframe> inside the same page without refreshing.

Back to Menu
Each game page includes a <button id="backButton">⬅ Back to Game Menu</button> which:

Sends the user back to the main game menu (index.html)

Uses basic JavaScript:

js
Copy
Edit
document.getElementById('backButton').addEventListener('click', () => {
  window.location.href = 'index.html';
});
🧩 Games Included
Game	Description
Tic Tac Toe	Classic 2-player X vs O strategy game.
Typing Test	Test your typing speed in real-time.
Number Guesser	Guess a number between 1 to 10.
Balloon Shooter	Shoot falling balloons for points.
Rock Paper Scissors	Play against computer with score.
Galaxy Shooter	Canvas-based space shooter game.
