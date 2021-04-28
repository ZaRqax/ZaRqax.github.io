ymaps.ready(init);

function init(){
      var myMap = new ymaps.Map("map", {
      center: [54.7348, 55.9579],
      zoom: 14,
      controls: ['zoomControl','geolocationControl'],
      behaviors: ['drag']
      });

      myMap.events.add('click', function (e) {
            var i = 0;
            var coords = e.get('coords');
            var placemark = new ymaps.Placemark([coords[0], coords[1]], {

            });
            myMap.geoObjects.add(placemark);
            localStorage.setItem(String(i), placemark); 
        });
}