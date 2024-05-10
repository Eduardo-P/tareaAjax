var dates;

document.addEventListener("DOMContentLoaded", function() {
    graphic();
});

function graphic() {
    fetch('data.json')
    .then(response => response.json())
    .then(data => {

        var filteredRegions = data.filter(region => region.region !== "Lima" && region.region !== "Callao");

        var datasets = [];

        filteredRegions.forEach(region => {
            var confirmedValues = region.confirmed.map(entry => parseInt(entry.value));
            dates = region.confirmed.map(entry => entry.date);

            datasets.push({
                label: region.region,
                data: confirmedValues,
                fill: false,
                borderColor: '#' + (Math.random().toString(16) + '000000').substring(2,8), // Genera colores aleatorios
                tension: 0.4
            });
        });

        var chartsContainer = document.getElementById("graphics");
        chartsContainer.innerHTML = "";
    });
}