
function initMap() {
  const florianopolisCoordinates = { lat: -27.5954, lng: -48.5480 }
  const urubiciCoordinates = { lat: -28.0153, lng: -49.5925 }
  const blumenauCoordinates = { lat: -26.9155, lng: -49.0709 }

  const map = new google.maps.Map(document.getElementById('map'), {
    center: florianopolisCoordinates,
    zoom: 8,
  });

  const locations = [
    {
      name: 'Florianópolis',
      position: florianopolisCoordinates,
      description: 'Capital of Santa Catarina, known for its beaches.',
    },
    {
      name: 'Urubici',
      position: urubiciCoordinates,
      description: 'Gateway to Serra Catarinense mountains.',
    },
    {
      name: 'Blumenau',
      position: blumenauCoordinates,
      description: 'Famous for Oktoberfest and German culture.',
    },
  ];

  locations.forEach(location => {
    new google.maps.Marker({
      position: location.position,
      map,
      title: location.name,
    });
  });
}


function loadMapScript() {
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=&callback=initMap`;
  script.defer = true;
  document.head.appendChild(script);
}


window.addEventListener('load', loadMapScript);