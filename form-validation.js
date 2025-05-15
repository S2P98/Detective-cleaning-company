// Contact form validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all required fields');
        return false;
    }
    
    if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return false;
    }
    
    // Form is valid, proceed with submission
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}