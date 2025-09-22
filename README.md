#Joke Vault 🕶️

A sleek, modern web application that fetches and displays jokes from the [Official Joke API](https://github.com/15Dkatz/official_joke_api). It features a dark, "vault-like" user interface where users can get a new joke and reveal its punchline on demand.


## ✨ Features

*   **Dynamic Joke Fetching**: Fetches random jokes from the Official Joke API.
*   **Two-Step Reveal**: Displays the joke's setup first, with a button to reveal the punchline.
*   **Sleek UI**: A modern, responsive, dark-themed interface with smooth transitions and a "glowing" effect.
*   **State Indicators**: Clear loading and error messages to inform the user of the application's state.
*   **Joke Counter**: Keeps track of how many jokes you've "unlocked".
*   **Responsive Design**: Looks great on both desktop and mobile devices.

## 🛠️ Technologies Used

*   **HTML5**: For the structure and content of the application.
*   **CSS3**: For styling, layout (Flexbox), animations, and responsive design.
*   **JavaScript (ES6+)**: For application logic, DOM manipulation, and interacting with the Joke API using the `fetch` method.

## 🚀 Getting Started

### Prerequisites

You only need a modern web browser (like Chrome, Firefox, or Edge) to run this project.

### Installation & Usage

1.  Clone the repository or download the files to your local machine.
    ```sh
    git clone https://github.com/your-username/dark-joke-vault.git
    ```
2.  Navigate to the project directory.
    ```sh
    cd dark-joke-vault
    ```
3.  Open the `index.html` file in your web browser.

That's it! You can now start getting jokes.

## 📂 File Structure

```
dark-joke-vault/
├── index.html      # The main HTML file with the page structure.
├── style.css       # All the styles for the application.
├── script.js       # The JavaScript logic for fetching and displaying jokes.
└── README.md       # This file.
```

## 💡 How It Works

1.  When the page loads (or when the "Get New Joke" button is clicked), the `fetchJoke()` function in `script.js` is called.
2.  A request is sent to the `https://official-joke-api.appspot.com/random_joke` endpoint.
3.  While waiting for the response, a "Decrypting..." loading message is displayed.
4.  Once the joke data is received, the setup is displayed on the joke card, and the "Reveal Punchline" button appears.
5.  Clicking the "Reveal Punchline" button displays the punchline and adds a fun glowing effect to the emoji.
6.  If the API call fails, an error message is shown to the user.


