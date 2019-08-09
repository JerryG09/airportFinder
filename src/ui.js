class UI {
  constructor() {
    this.display = document.getElementById("displayRow");
    this.notify = document.getElementById("notification");
  }

  showResults(data) {
    const results = data.airports;
    console.log(results);

    let output = "";
    for (let index = 0; index < results.length; index++) {
      output += "<tr>";

      output += "<td>" + results[index].name + "</td>";
      output += "<td>" + results[index].iata + "</td>";
      output += "<td>" + results[index].state.type + "</td>";
      output += "<td>" + results[index].city + "</td>";
      output += "<td>" + results[index].state.name + "</td>";
      output += "<td>" + results[index].country.name + "</td>";

      output += "</tr>";
    }

    this.display.innerHTML = output;
  }

  showAlert(data) {
    console.log(data.message);

    this.notify.innerHTML = `
      <article class="message is-danger">
        <div class="message-body">
          ${data.message}
        </div>
      </article>
    `;

    // Create Time Out
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear Alert Message
  clearAlert() {
    const currentAlert = document.querySelector(".is-danger");
    if (currentAlert) {
      currentAlert.remove();
    }
  }
}

export const ui = new UI();
