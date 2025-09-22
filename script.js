document.addEventListener('DOMContentLoaded', function () {
    const questionElement = document.getElementById('question');
    const punchlineElement = document.getElementById('punchline');
    const revealBtn = document.getElementById('revealBtn');
    const newJokeBtn = document.getElementById('newJokeBtn');
    const loadingElement = document.getElementById('loading');
    const errorElement = document.getElementById('error');
    const emojiElement = document.querySelector('.emoji');
    const jokeCountElement = document.getElementById('jokeCount');

    let currentJoke = null;
    let jokeCount = 0;

    // Function to fetch a random joke from the API
    function fetchJoke() {
        // Show loading, hide other elements
        loadingElement.style.display = 'block';
        errorElement.style.display = 'none';
        punchlineElement.style.display = 'none';
        revealBtn.style.display = 'none';
        questionElement.textContent = '';
        emojiElement.textContent = '🔍';

        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(joke => {
                currentJoke = joke;
                displayQuestion();
                loadingElement.style.display = 'none';
                jokeCount++;
                jokeCountElement.textContent = jokeCount;
            })
            .catch(error => {
                console.error('Error fetching joke:', error);
                loadingElement.style.display = 'none';
                errorElement.style.display = 'block';
                questionElement.textContent = 'Failed to access the joke vault. Try again!';
                emojiElement.textContent = '😵';
            });
    }

    // Function to display the question part of the joke
    function displayQuestion() {
        questionElement.textContent = currentJoke.setup;
        punchlineElement.textContent = currentJoke.punchline;
        revealBtn.style.display = 'flex';
        emojiElement.textContent = '🤔';
    }

    // Function to reveal the punchline
    function revealPunchline() {
        punchlineElement.style.display = 'block';
        revealBtn.style.display = 'none';
        emojiElement.textContent = '😂';
        emojiElement.classList.add('glow');
    }

    // Event listeners for buttons
    newJokeBtn.addEventListener('click', fetchJoke);
    revealBtn.addEventListener('click', revealPunchline);

    // Fetch a joke when the page loads
    fetchJoke();
});