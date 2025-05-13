document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rating = document.getElementById('rating').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !rating || !message) {
        alert('Please fill in all required fields!');
        return;
    }

    if (rating < 1 || rating > 5) {
        alert('Rating must be between 1 and 5!');
        return;
    }

    alert('Thank you for your feedback!');
    this.reset();
});
