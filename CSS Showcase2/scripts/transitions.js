// scripts/transitions.js
document.addEventListener("DOMContentLoaded", function() {
    const transitionBox = document.querySelector('.transition-box');
    const animationBox = document.querySelector('.animation-box');

    transitionBox.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#2ecc71';
        this.style.transform = 'scale(1.5)';
    });

    transitionBox.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#e74c3c';
        this.style.transform = 'scale(1)';
    });

    animationBox.addEventListener('mouseover', function() {
        this.style.animation = 'rotate360 2s linear infinite';
    });

    animationBox.addEventListener('mouseout', function() {
        this.style.animation = 'none';
    });
});