// Get the current count from local storage or set it to 0 if it doesn't exist
let count = localStorage.getItem("visits") || 0;

// Update the count by incrementing it by 1
count++;
localStorage.setItem("visits", count);

// Display the count on the page, assuming there is an element with an ID of "counter"
document.getElementById("counter").textContent = `Number of visits: ${count}`;
