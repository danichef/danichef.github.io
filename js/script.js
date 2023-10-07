// script.js
document.addEventListener("DOMContentLoaded", function() {
    const bars = document.querySelectorAll('.bars .bar');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2, // Change this threshold as needed
    };

    const callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    bars.forEach((bar) => {
        observer.observe(bar);
    });
});
