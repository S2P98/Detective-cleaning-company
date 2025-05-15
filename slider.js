// Testimonial slider functionality
document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active');
        });
        testimonials[index].classList.add('active');
    }

    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : testimonials.length - 1;
        showTestimonial(currentIndex);
    });

    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
        showTestimonial(currentIndex);
    });

    // Auto-rotate testimonials every 5 seconds
    setInterval(function() {
        currentIndex = (currentIndex < testimonials.length - 1) ? currentIndex + 1 : 0;
        showTestimonial(currentIndex);
    }, 5000);

    // Show first testimonial initially
    showTestimonial(currentIndex);
});