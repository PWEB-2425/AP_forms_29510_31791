document.addEventListener('DOMContentLoaded', function () {
  fetch('loc.json')
    .then(response => response.json())
    .then(data => {
      const select = document.getElementById('country');
      data.forEach(country => {
        const option = document.createElement('option');
        // Troca 'code' e 'name' por 'iso_code' e 'country' se for esse o formato do teu loc.json!
        option.value = country.code || country.iso_code;
        option.textContent = country.name || country.country;
        select.appendChild(option);
      });
    })
    .catch(error => {
      console.error('Erro ao carregar países:', error);
    });
});
