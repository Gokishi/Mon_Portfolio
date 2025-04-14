function initMap() {
    // Vérifiez si l'élément avec l'ID 'google-maps' existe
    var mapElement = document.getElementById('google-maps');
    if (!mapElement) {
        console.warn("L'élément avec l'ID 'google-maps' est introuvable.");
        return;
    }

    // Latitude et Longitude
    var myLatLng = {lat: -6.207690, lng: 106.985270};

    // Initialisation de la carte
    var map = new google.maps.Map(mapElement, {
        zoom: 17,
        center: myLatLng
    });

    // Ajout d'un marqueur
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'South Jakarta, INA' // Titre de l'emplacement
    });
}