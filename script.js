document.addEventListener('DOMContentLoaded', () => {
    const coin = document.getElementById('coin');
    const flipButton = document.getElementById('flip-button');
    const result = document.getElementById('result');

    flipButton.addEventListener('click', () => {
        // Add the flip class to start the animation
        coin.classList.add('flip');

        // After animation completes (0.6s), determine the result
        setTimeout(() => {
            // Remove the flip class and determine the result
            coin.classList.remove('flip');
            const outcome = Math.random() < 0.5 ? 'Heads' : 'Tails';
            coin.textContent = outcome;
            result.textContent = `It's ${outcome}!`;
        }, 600); // Matches the duration of the animation
    });
});
