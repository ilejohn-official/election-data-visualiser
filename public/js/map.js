var ng;
function getStateColor(APC,PDP) {
  if (APC>PDP){
    return 'green';
  } else if (PDP>APC){
    return 'red';
  }
}
function highlightFeature(e){
  var layer = e.target;

  layer.setStyle({
    weight: 3,
    color: 'black',
    fillOpacity: 0.2
  });

}

  function resetHighlight(e){
    ng.resetStyle(e.target);
  }

  function zoomToFeature(e){
    map.fitBounds(e.target.getBounds());
  }

  function ngOnEachFeature(feature,layer){
  var total = feature.properties.AAC+feature.properties.ADC+feature.properties.ADP+feature.properties.APC+feature.properties.PDP+feature.properties.SDP
   var display= '<table class="table">'+
                   '<thead>'+
                     '<tr>'+
                       '<th scope="col">#</th>'+
                       '<th scope="col">Party</th>'+
                       '<th scope="col">Votes</th>'+
                       '<th scope="col">Percentage</th>'+
                     '</tr>'+
                   '</thead>'+
                   '<tbody>'+
                     '<tr>'+
                       '<th scope="row">1</th>'+
                       '<td>AAC</td>'+
                       '<td>'+feature.properties.AAC+'</td>'+
                       '<td>'+(feature.properties.AAC*100/total).toFixed(2)+'%</td>'+
                     '</tr>'+
                     '<tr>'+
                       '<th scope="row">2</th>'+
                       '<td>ADC</td>'+
                       '<td>'+feature.properties.ADC+'</td>'+
                       '<td>'+(feature.properties.ADC*100/total).toFixed(2)+'%</td>'+
                     '</tr>'+
                     '<tr>'+
                       '<th scope="row">3</th>'+
                       '<td>ADP</td>'+
                       '<td>'+feature.properties.ADP+'</td>'+
                        '<td>'+(feature.properties.ADP*100/total).toFixed(2)+'%</td>'+
                     '</tr>'+
                     '<tr>'+
                       '<th scope="row">4</th>'+
                       '<td>APC</td>'+
                       '<td>'+feature.properties.APC+'</td>'+
                       '<td>'+(feature.properties.APC*100/total).toFixed(2)+'%</td>'+
                     '</tr>'+
                     '<tr>'+
                       '<th scope="row">5</th>'+
                       '<td>PDP</td>'+
                       '<td>'+feature.properties.PDP+'</td>'+
                       '<td>'+(feature.properties.PDP*100/total).toFixed(2)+'%</td>'+
                     '</tr>'+
                     '<tr>'+
                       '<th scope="row">6</th>'+
                       '<td>SDP</td>'+
                       '<td>'+feature.properties.SDP+'</td>'+
                       '<td>'+(feature.properties.SDP*100/total).toFixed(2)+'%</td>'+
                     '</tr>'+
                   '</tbody>'+
                 '</table>';
    layer.bindTooltip(
      'State: <b>'+feature.properties.state+'</b>,&nbsp; &nbsp; Capital: <b>'+
      feature.properties.capcity+'</b><br>'+
      'Winner: '+feature.properties.Winner+
      display,
      {
      noHide: true,
      direction: 'left'
      });
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: zoomToFeature,
    });
  }


 var map = L.map('map', {
	 center: [9.0820, 8.6753],
	 zoom:6.30,
	 maxZoom:12,
	 minZoom:6
  });


  var mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';

  function ngStyle(feature){
    return {
    fillColor: getStateColor(feature.properties.APC,feature.properties.PDP),
    weight: 1,
    color: 'white',
    opacity: 1,
    dashArray: 1,
    fillOpacity: 0.5
  }
}

  var Country = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; ' + mapLink,
    maxZoom: 12,
  }).addTo(map);

ng = L.geoJson(ngpresident,
  {
    style: ngStyle,
    onEachFeature: ngOnEachFeature
  }
  ).addTo(map);


var markers = new Array();
  $('#party').on('change', function(){
  var $this = $(this),
      $value = $this.val();

      L.geoJson(ngpresident,{
        onEachFeature: function (feature, layer) {
          markers.push(
            L.circleMarker(
              layer.getBounds().getCenter(),
              {
                radius: 0.0,
                opacity: 0.0,
                fillOpacity: 0
              }
            )
          );
          var markersCount = markers.length;
          markers[markersCount - 1].bindTooltip(
            feature.properties.ADC,{noHide: true}
          );
          markers[markersCount - 1].addTo(map);
      }

});
});





 var marker;

  $('#state').on('change', function(){
  var $this = $(this),
      $value = $this.val();

switch ($value) {

  case 'Abia': {

    marker = L.marker([5.532003041,	7.486002487]).addTo(map);
    map.flyTo([5.532003041,	7.486002487],8);

  }
    break;

    case 'Adamawa': {

      var marker = L.marker([10.2703408,	13.2700321]).addTo(map);
      map.flyTo([10.2703408,	13.2700321],8);
    }
    break;

    case 'Akwa-Ibom': {

      var marker = L.marker([5.007996056,	7.849998524]).addTo(map);
      map.flyTo([5.007996056,	7.849998524],8);
    }
      break;

    case 'Anambra': {

    var marker = L.marker([6.210433572,	7.06999711]).addTo(map);
    map.flyTo([6.210433572,	7.06999711],8);
    }
      break;


    case 'Bauchi': {

      var marker = L.marker([11.68040977,	10.19001339]).addTo(map);
            map.flyTo([11.68040977,	10.19001339],8);
          }
    break;

    case 'Ekiti': {

    var marker = L.marker([7.630372741,	5.219980834]).addTo(map);
          map.flyTo([7.630372741,	5.219980834],8);
        }
      break;

    case 'Osun': {

          var marker = L.marker([7.629959329,	4.179992634]).addTo(map);
                map.flyTo([7.629959329,	4.179992634],8);
              }
    break;

    case 'FCT': {

    var marker = L.marker([9.083333149,	7.533328002]).addTo(map);
              map.flyTo([9.083333149,	7.533328002],8);
            }
      break;

    case 'Oyo': {
     var marker = L.marker([8.490010192,	4.549995889]).addTo(map);
           map.flyTo([8.490010192,	4.549995889],8);
         }
   break;

   case 'Nasarawa': {

       var marker = L.marker([8.490423603,	8.5200378]).addTo(map);
             map.flyTo([8.490423603,	8.5200378],8);
           }
     break;

     case 'Kogi': {

         var marker = L.marker([7.800388203,	6.739939737]).addTo(map);
               map.flyTo([7.800388203,	6.739939737],8);
             }
       break;

       case 'Gombe': {

           var marker = L.marker([10.29044293,	11.16995357]).addTo(map);
                 map.flyTo([10.29044293,	11.16995357],8);
               }
        break;

        case 'Ondo': {

            var marker = L.marker([7.250395934,	5.199982054]).addTo(map);
                  map.flyTo([7.250395934,	5.199982054],8);
                }
          break;

    case 'Yobe': {

        var marker = L.marker([11.74899608,	11.96600457]).addTo(map);
              map.flyTo([11.74899608,	11.96600457],8);
            }
      break;

      case 'Enugu': {

          var marker = L.marker([6.867034321,	7.383362995]).addTo(map);
                map.flyTo([6.867034321,	7.383362995],8);
              }
        break;

        case 'Niger': {

            var marker = L.marker([10.4003587,	5.469939737]).addTo(map);
                  map.flyTo([10.4003587,	5.469939737],8);
                }
          break;

      case 'Jigawa': {

          var marker = L.marker([11.7991891,	9.350334607]).addTo(map);
                map.flyTo([11.7991891,	9.350334607],8);
              }
        break;

      case 'Kaduna': {

        var marker = L.marker([11.0799813,	7.710009724]).addTo(map);
                  map.flyTo([11.0799813,	7.710009724],8);
                }
        break;

      case 'Lagos': {

        var marker = L.marker([6.443261653,	3.391531071]).addTo(map);
                  map.flyTo([6.443261653,	3.391531071],8);
                    }
        break;

      case 'Ogun': {

      var marker = L.marker([7.160427265,	3.350017455]).addTo(map);
                    map.flyTo([7.160427265,	3.350017455],8);
                      }
      break;

      case 'Edo': {

      var marker = L.marker([6.340477314,	5.620008096]).addTo(map);
                    map.flyTo([6.340477314,	5.620008096],8);
                      }
      break;

      case 'Benue': {

      var marker = L.marker([7.190399596,	8.129984089]).addTo(map);
                    map.flyTo([7.190399596,	8.129984089],8);
                      }
      break;

      case 'Imo': {

      var marker = L.marker([5.492997053,	7.026003588]).addTo(map);
                    map.flyTo([5.492997053,	7.026003588],8);
                      }
      break;

      case 'Plateau': {

      var marker = L.marker([9.929973978,	8.890041055]).addTo(map);
                    map.flyTo([9.929973978,	8.890041055],8);
                      }
      break;

      case 'Kano': {

      var marker = L.marker([11.99997683,	8.5200378]).addTo(map);
                    map.flyTo([11.99997683,	8.5200378],8);
                      }
      break;

      case 'Katsina': {

      var marker = L.marker([11.5203937,	7.320007689]).addTo(map);
                    map.flyTo([11.5203937,	7.320007689],8);
                      }
      break;

      case 'Taraba': {

      var marker = L.marker([7.870409769,	9.780012572]).addTo(map);
                    map.flyTo([7.870409769,	9.780012572],8);
                      }
      break;

      case 'CrossRiver': {

      var marker = L.marker([4.960406513,	8.330023558]).addTo(map);
                    map.flyTo([4.960406513,	8.330023558],8);
                      }
      break;

      case 'Borno': {

      var marker = L.marker([10.62042279,	12.18999467]).addTo(map);
                    map.flyTo([10.62042279,	12.18999467],8);
                      }
      break;

      case 'Delta': {

      var marker = L.marker([5.890427265,	5.680004434]).addTo(map);
                    map.flyTo([5.890427265,	5.680004434],8);
                      }
      break;

      case 'Bayelsa': {

      var marker = L.marker([4.867777,5.898714],8).addTo(map);
                    map.flyTo([4.867777,5.898714],8);
                      }
      break;

      case 'Sokoto': {

      var marker = L.marker([13.06001548,	5.240031289]).addTo(map);
                    map.flyTo([13.06001548,	5.240031289],8);
                      }
      break;

      case 'Kebbi': {

      var marker = L.marker([12.45041445,	4.199939737]).addTo(map);
                    map.flyTo([12.45041445,	4.199939737],8);
                      }
      break;

      case 'Zamfara': {

      var marker = L.marker([12.1704057,	6.659996296]).addTo(map);
                    map.flyTo([12.1704057,	6.659996296],8);
                      }
      break;

      case 'Rivers': {

      var marker = L.marker([4.810002257,	7.010000772]).addTo(map);
                    map.flyTo([4.810002257,	7.010000772],8);
                      }
      break;

      case 'Kwara': {

      var marker = L.marker([8.490010192,	4.549995889]).addTo(map);
                    map.flyTo([8.490010192,	4.549995889],8);
                      }
      break;

      case 'Ebonyi': {

      var marker = L.marker([6.25,	8.083333]).addTo(map);
                    map.flyTo([6.25,	8.083333],8);
                      }
      break;

  default:

}

});

/*
Ebonyi
var locations =
[
["Abia",	5.532003041,	7.486002487],
["Adamawa",	10.2703408,	13.2700321],
["AkwaIbom",	5.007996056,	7.849998524],
["Anambra",	6.210433572,	7.06999711],
["Bauchi",	11.68040977,	10.19001339],
["Benue",	7.190399596,	8.129984089],
["Borno",	10.62042279,	12.18999467],
["CrossRiver",	4.960406513,	8.330023558],
["Delta",	5.890427265,	5.680004434],
["Edo",	6.340477314,	5.620008096],
["Ekiti",	7.630372741,	5.219980834],
["Enugu",	6.867034321,	7.383362995],
["FCT",9.083333149,	7.533328002],
["Gombe",	10.29044293,	11.16995357],
["Imo",	5.492997053,	7.026003588],
["Jigawa",	11.7991891,	9.350334607],
["Kaduna",	11.0799813,	7.710009724],
["Kano",	11.99997683,	8.5200378],
["Katsina",	11.5203937,	7.320007689],
["Kebbi",	12.45041445,	4.199939737],
["Kogi",	7.800388203,	6.739939737],
["Kwara",	8.490010192,	4.549995889],
["Lagos",	6.443261653,	3.391531071],
["Nassarawa",	8.490423603,	8.5200378],
["Niger",	10.4003587,	5.469939737],
["Ogun",	7.160427265,	3.350017455],
["Ondo",	7.250395934,	5.199982054],
["Osun",	7.629959329,	4.179992634],
["Oyo",	7.970016092,	3.590002806],
["Plateau",	9.929973978,	8.890041055],
["Rivers",	4.810002257,	7.010000772],
["Sokoto",	13.06001548,	5.240031289],
["Taraba",	7.870409769,	9.780012572],
["Yobe",	11.74899608,	11.96600457],
["Zamfara",	12.1704057,	6.659996296],
];
for (var i = 0; i < locations.length; i++) {
			marker = new L.marker([locations[i][1],locations[i][2]])
				.bindPopup('<b>'+locations[i][0]+'</b>')
				.addTo(map);
		}
*/
