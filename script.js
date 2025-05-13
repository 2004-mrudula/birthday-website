document.addEventListener('DOMContentLoaded', function() {
    // Get the audio element
    const birthdaySong = document.getElementById('birthdaySong');

    // Surprise Page Functionality
    const blowButton = document.getElementById('blowButton');
    const cakeWithCandles = document.getElementById('cake');
    const cakeWithoutCandles = document.getElementById('cakeWithoutCandles');
    const confettiContainer = document.getElementById('confetti-container');

    if (blowButton) {
        blowButton.addEventListener('click', function() {
            cakeWithCandles.style.display = 'none';
            cakeWithoutCandles.style.display = 'block';
            blowButton.style.display = 'none';
            startConfetti();
        });
    }

    function startConfetti() {
        const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107', '#ff9800', '#ff5722'];
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confetti.style.animationDuration = Math.random() * 2 + 2 + 's';
            confettiContainer.appendChild(confetti);
        }
        // You might want to stop the confetti animation after some time
        setTimeout(() => {
            confettiContainer.innerHTML = ''; // Clear confetti
        }, 5000);
    }

    // Balloon Animation (Introduction Page) - Already handled in CSS

    // Ensure audio plays on page load (might need user interaction on some browsers)
    if (birthdaySong) {
        birthdaySong.play().catch(error => {
            console.log("Autoplay prevented:", error);
            // Optionally display a message to the user to interact with the page to play the music
        });
    }
});
