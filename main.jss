document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent!');
});

const colors = ['#f4a261', '#2a9d8f', '#e9c46a', '#e76f51', '#264653'];
const colorButton = document.getElementById('color-flip-button');

colorButton.addEventListener('click', function() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
