import { UI, ui } from "./ui";
import { multi } from "./air-port-codes-node";

// Search Airport
const searchAirpot = document.getElementById("search");

// Add Event Listener
searchAirpot.addEventListener("keyup", e => {
  // Get User input
  const term = e.target.value;
  if (term != "") {
    // Make an HTTP call to API
    const api = multi({
      key: "fd67fe9116",
      secret: "77dc97f50f0302c",
      limit: 20
    });

    api.request(term);

    // SUCCESS we found some airport
    api.onSuccess = data => {
      ui.showResults(data);
    };

    // FAIL no airport found
    api.onError = data => {
      console.log(data.message);
    };
  } else {
  }
});
