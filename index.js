// Get references to the HTML elements
const timDepanGidit = document.getElementById('TimedepanGidit');
const timeBelakangGidit = document.getElementById('TimebelakangGidit');
const sunIcon = document.getElementById('siang');
const moonIcon = document.getElementById('malam');

// Function to update the clock and check day/night
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
   
    // Ensure two-digit format
    hours =  (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;

    // Update the HTML content
    timDepanGidit.textContent = hours;
    timeBelakangGidit.textContent = minutes;

    // Check if it's daytime or nighttime and update the icon
    if (hours >= 1 && hours <= 16) {
        sunIcon.style.display = 'inline';
        moonIcon.style.display = 'none';
    } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline';
    }
}

// Update the clock initially
updateClock();

// Set up a timer to update the clock every second
setInterval(updateClock, 1000);
