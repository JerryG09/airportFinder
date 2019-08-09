class UI {
  constructor() {
    this.display = document.getElementById("displayRow");
  }

  showResults(data) {
    const results = data.airports;
    console.log(results);

    let output = "";
    for (let index = 0; index < results.length; index++) {
      output += "<tr>";

      output += "<td>" + results[index].name + "</td>";
      output += "<td>" + results[index].iata + "</td>";
      output += "<td>" + results[index].state + "</td>";
      output += "<td>" + results[index].city + "</td>";
      output += "<td>" + results[index].state.name + "</td>";
      output += "<td>" + results[index].country.name + "</td>";

      output += "</tr>";
    }

    console.log(output);
  }
}

export const ui = new UI();
