document.addEventListener('DOMContentLoaded', function() {
    // Tabs functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            // Hide all tab contents
            tabContents.forEach(content => content.classList.remove('active'));
            // Show selected tab content
            document.getElementById(this.dataset.target).classList.add('active');
        });
    });

    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.md:hidden');
    const navLinks = document.querySelector('.md:flex');
    
    mobileMenuButton.addEventListener('click', function() {
        navLinks.classList.toggle('hidden');
    });

    // Smooth scroll for view all buttons
    const viewAllButtons = document.querySelectorAll('[data-scroll]');
    viewAllButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.dataset.scroll;
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
