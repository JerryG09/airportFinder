// Search Airport

const searchAirpot = document.getElementById("search");

// Add Event Listener
searchAirpot.addEventListener("keyup", e => {
  // Get User input
  const term = e.target.value;
  console.log(term);
});
