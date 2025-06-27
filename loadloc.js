fetch("loc.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    const countryList = document.getElementById("country");
    data.forEach(country => {
      const option = document.createElement("option");
      option.textContent = country.name;
      option.value = country["alpha-2"]; // ou "country-code" se preferires
      countryList.appendChild(option);
    });
  })
  .catch(error => console.error("Error loading countries:", error));
