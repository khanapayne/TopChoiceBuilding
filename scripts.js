document.addEventListener("DOMContentLoaded", function () {
    const announcements = [
        "🚨 February Sale - 5% OFF! 🚨",
        "💝 Valentine's Special Deals! 💝",
        "🎉 Happy Day! Celebrate with us! 🎉",
        "🌹 Today is another day, let's celebrate Valentine's Day! 🌹"
    ];

    let index = 0;
    const announcementText = document.getElementById("announcement-text");

    function changeAnnouncement() {
        index = (index + 1) % announcements.length;
        announcementText.style.opacity = "0"; // Fade out

        setTimeout(() => {
            announcementText.textContent = announcements[index];
            announcementText.style.opacity = "1"; // Fade in
        }, 500);
    }

    setInterval(changeAnnouncement, 4000); // Change every 4 seconds

    // Handle responsive menu toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
});

// Function to update the digital clock
function updateClock() {
    const clock = document.getElementById("digital-clock");
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately when the page loads
updateClock();
