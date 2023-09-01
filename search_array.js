var services = [
    "Bygherrerådgivning",
    "Teknisk due Dilligence",
    "Energirådgivning",
    "Energimærkning",
    "Statiske beregninger",
    "Tilstandsvurdering",
    "Brandrådgivning",
    "Institutioner"
  ];

  document.querySelector(".searchForm").addEventListener("submit", function (e) {
    e.preventDefault();

    var searchTerm = document.querySelector(".searchForm_input").value.toLowerCase();

    var results = services.filter(function (service) {
        // Check if the service contains the search term (case insensitive)
        return service.toLowerCase().includes(searchTerm);
    });

    displayResults(results);
});

function displayResults(results) {
    var resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

    if (results.length === 0) {
        resultsContainer.innerHTML = "Ingen resultater fundet.";
    } else {
        var resultText = "Resultater: " + results.join(", ");
        resultsContainer.innerHTML = resultText;
    }
}
