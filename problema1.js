document.addEventListener("DOMContentLoaded", function() {
    var select = document.getElementById("select_region");

    // Obtener Regiones y agregarlas como opciones
    fetch("data.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(function(region) {
            var option = document.createElement("option");
            option.value = region.region;
            option.text = region.region;
            select.appendChild(option);
        });
    });

    // Evento Listener para el botón para mostrar el grafico
    document.getElementById("show_graphic").addEventListener("click", function() {
        graphic();
    });
});

function graphic() {
    var selectedRegions = Array.from(document.getElementById("select_region").selectedOptions).map(option => option.value);

    var datasets = {};
    var dates = [];

    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        var chartsContainer = document.getElementById("graphics");
        chartsContainer.innerHTML = "";

        selectedRegions.forEach(regionName => {
            var regionData = data.find(region => region.region === regionName);

            var color = '#' + (Math.random().toString(16) + '000000').substring(2,8);

            Object.keys(regionData).forEach(section => {
                if (Array.isArray(regionData[section])) {
                    if (!datasets[section]) {
                        datasets[section] = [];
                    }

                    var values = regionData[section].map(entry => parseInt(entry.value));
                    var sectionDates = regionData[section].map(entry => entry.date);
                    dates = dates.concat(sectionDates);

                    datasets[section].push({
                        label: regionName,
                        data: values,
                        fill: false,
                        borderColor: color,
                        tension: 0.8
                    });
                }
            });
        });
    });
}