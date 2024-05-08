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

function graphic() {}