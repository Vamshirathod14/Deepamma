document.getElementById('animateButton').addEventListener('click', function() {
    const animationArea = document.getElementById('animationArea');
    animationArea.innerHTML = ''; // Clear previous animations

    const apologyMessage = document.createElement('div');
    apologyMessage.innerText = "I promise to make it up to you!";
    apologyMessage.style.fontSize = '24px';
    apologyMessage.style.opacity = 0;
    apologyMessage.style.transition = 'opacity 2s';
    animationArea.appendChild(apologyMessage);

    // Trigger the animation
    setTimeout(() => {
        apologyMessage.style.opacity = 1;
        displayMessages();
    }, 100);
});

function displayMessages() {
    const messages = document.querySelectorAll('.message');
    const messagesContainer = document.getElementById('messagesContainer');
    messagesContainer.style.display = 'block'; // Show the messages container

    let delay = 0; // Initialize delay

    messages.forEach((message, index) => {
        setTimeout(() => {
            message.style.opacity = 1; // Make the message visible
            message.style.transition = 'opacity 1s'; // Add transition for smooth appearance
        }, delay);
        delay += 2000; // Increase delay for the next message (2 seconds)
    });
}