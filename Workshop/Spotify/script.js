// Simple script to handle play button clicks
document.addEventListener('DOMContentLoaded', function() {
    const playButtons = document.querySelectorAll('[data-play]');
    
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            // In a real app, this would play the song
            console.log('Playing song:', this.dataset.song);
        });
    });
    
    // Current time animation for player progress
    const progressBar = document.querySelector('.bg-gray-400.w-1\\/3');
    let progress = 0;
    
    setInterval(() => {
        progress += 0.1;
        if (progress > 100) progress = 0;
        progressBar.style.width = `${progress}%`;
    }, 1000);
});