// Newsletter form submission
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('newsletter-email').value;
    
    if (email === '') {
        alert('Please enter your email address');
        return false;
    }
    
    if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return false;
    }
    
    alert('Thank you for subscribing to our newsletter!');
    this.reset();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}