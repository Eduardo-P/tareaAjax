document.addEventListener("DOMContentLoaded", function() {
    graphic();
});

function graphic() {
    fetch('data.json')
    .then(response => response.json())
    .then(data => {

        var filteredRegions = data.filter(region => region.region !== "Lima" && region.region !== "Callao");

        var datasets = [];
    });
}