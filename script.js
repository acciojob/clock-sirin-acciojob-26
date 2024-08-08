function updateTime() {
    const timerElement = document.getElementById("timer");

    const currentDate = new Date();
    const options = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
    };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);

    timerElement.innerHTML = formattedDate;
}

// Update the timer every second
setInterval(updateTime, 1000);

// Call the function immediately to avoid initial delay
updateTime();
