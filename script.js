// Set the date we're counting down to (May 21, 2025)
const countDownDate = new Date("May 21, 2025 09:00:00").getTime();

// Update the countdown every 1 second
const countdownTimer = setInterval(function() {
    // Get today's date and time
    const now = new Date().getTime();
    
    // Find the distance between now and the countdown date
    const distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Format the numbers with leading zeros if needed
    const formattedDays = String(days).padStart(2, '0');
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    
    // Output the result in the respective elements
    document.getElementById("days").textContent = formattedDays;
    document.getElementById("hours").textContent = formattedHours;
    document.getElementById("minutes").textContent = formattedMinutes;
    document.getElementById("seconds").textContent = formattedSeconds;
    
    // If the countdown is over, display some text
    if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
        
        const eventTitle = document.querySelector(".event-title");
        if (eventTitle) {
            eventTitle.textContent = "The Event Has Started!";
        }
        
        const registerBtn = document.querySelector(".register-btn");
        if (registerBtn) {
            registerBtn.textContent = "Join Live Now";
        }
    }
}, 1000);

// Add a subtle animation to the countdown boxes
const countdownBoxes = document.querySelectorAll('.countdown-box');
countdownBoxes.forEach((box, index) => {
    setTimeout(() => {
        box.style.opacity = '1';
        box.style.transform = 'translateY(0)';
    }, 200 * index);
});