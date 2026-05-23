// YES, I AI-ED THE CODE FOR THE JS BECAUSE I DON'T WANA SUFFER WRITING JS'

function updateClockAndDate() {
    const now = new Date();

    // 1. Format the Time (24-hour format: HH:MM:SS)
    // If you prefer 12-hour format, change 'hour12: false' to 'hour12: true'
    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    document.getElementById('clock').textContent = now.toLocaleTimeString([], timeOptions);

    // 2. Format the Date (e.g., "Saturday, May 23")
    const dateOptions = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    };
    document.getElementById('date').textContent = now.toLocaleDateString([], dateOptions);
}

// Run the function immediately so the clock is correct right away
updateClockAndDate();

// Update the clock every 1000 milliseconds (1 second)
setInterval(updateClockAndDate, 1000);
