function updateMap() {
    fetch("https://corona-api.com/countries")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.coordinates.latitude;
                longitude = element.coordinates.longitude;

                deaths = element.latest_data.deaths;
                confirmed = element.latest_data.confirmed;
                recovered = element.latest_data.recovered;
                critical = element.latest_data.critical;

                cases = deaths + critical;

                if ( cases > 255) {
                    color = "rgb(255, 0, 0)";

                }
                else {
                    color = `rgb(${cases},0,0)`;
                }



                // mark on the map
                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map);

            });
        })
}
updateMap();