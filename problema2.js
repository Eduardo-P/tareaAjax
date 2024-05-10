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
        });
    });
}