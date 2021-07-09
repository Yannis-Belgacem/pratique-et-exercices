var mymap = L.map('mapid').setView([48.573, 7.752], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZWxjdWVybjAiLCJhIjoiY2tnYnc3bzY5MGwwYjJzczV0bXM5MThrYiJ9.W91-XTZ1oeDcycRwSMFgag'
}).addTo(mymap);

var myIcon = L.icon({
    iconUrl: 'img/elan.jpg',
    iconSize: [40, 40],
    popupAnchor: [0, -15],
});

var marker = L.marker([48.557687, 7.747626], {icon:myIcon}).addTo(mymap);


var circle = L.circle([48.557687, 7.747626], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.3,
    radius: 100
}).addTo(mymap);

marker.bindPopup("<strong>Elan Formation</strong>,<br> <em>202 Avenue de Colmar</em>").openPopup();
circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a polygon.");

var popup = L.popup();

var centres = {
    "Strasbourg" : {
        "adresse": "202 Avenue de Colmar, 67100",
        "coordonnees" : [48.557687, 7.747626]
    },
    "Haguenau" : {
        "adresse": "32 Avenue du Professeur René Leriche, 67500",
        "coordonnees": [48.801403, 7.773540]
    },
    "Saverne" : {
        "adresse": "16 Rue du Zornhoff, 67700",
        "coordonnees" : [48.744257, 7.369499]
    },
    "Sélestat" : {
        "adresse": "46 Rue des Chevaliers, 67600",
        "coordonnees" : [48.259895, 7.455223]
    },
    "Mulhouse" : {
        "adresse" : "Rue Salomon Grumbach, 68200",
        "coordonnees" : [47.744525, 7.293839]
    },
    "Colmar" : {
        "adresse" : "Place du Capitaine Dreyfus, 68000",
        "coordonnees" : [48.075775, 7.344567]
    },
    "Metz" : {
        "adresse" : "92 Boulevard Solidarité, 57070",
        "coordonnees" : [49.108395, 6.232976]
    }
}

for (centre in centres){
    console.log(centres[centre].coordonnees);

    var marker = L.marker((centres[centre].coordonnees), {icon:myIcon}).bindPopup(centres[centre].adresse).addTo(mymap);
    var popup = L.popup();
    
}
