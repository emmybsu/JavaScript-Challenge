// from data.js to a descriptive variable
var sightings = data;

// select the button
var button = d3.select('#filter-btn');
// select the form 
var form = d3.select('form');

//create event handlers
button.on('click', runEnter);
form.on('submit', runEnter);

// complete the event handler function for the form
function runEnter() {

var list = d3.select('tbody');

list.html('');

// prevent the page from refreshing
  d3.event.preventDefault() 
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  var inputCity = d3.select("#city");
  var inputState = d3.select("#state");
  var inputCountry = d3.select('#country');
  var inputShape = d3.select('#shape')

  // Get the value property of the input element
  var dateValue = inputElement.property("value");
  var cityValue = inputCity.property("value");
  var stateValue = inputState.property("value");
  var countryValue = inputCountry.property('value');
  var shapeValue = inputShape.property('value');

  

  if (dateValue) {
    filteredData = sightings.filter(ufoSightings => ufoSightings.datetime === dateValue)
  } else if (cityValue) {

    filteredData = sightings.filter(ufoSightings => ufoSightings.city === cityValue);
  } else if (stateValue) {
    filteredData = sightings.filter(ufoSightings => ufoSightings.state === stateValue);
  } else if (countryValue) {
    filteredData = sightings.filter(ufoSightings => ufoSightings.country === countryValue);
  } else if (shapeValue) {
    filteredData = sightings.filter(ufoSightings => ufoSightings.shape === shapeValue);
  };

  

//referenced from https://www.youtube.com/watch?v=XmdOZ5NSqb8
createTable(filteredData)

function createTable(filteredData) {
    console.log("createTable") 
    console.log(filteredData)
    var table = document.getElementById('table-body')

    for (var i = 0; i < filteredData.length; i++ ){
        var row = `<tr>
                       <td> ${filteredData[i].datetime}</td> 
                       <td> ${filteredData[i].city}</td> 
                       <td> ${filteredData[i].state}</td> 
                       <td> ${filteredData[i].country}</td> 
                       <td> ${filteredData[i].shape}</td> 
                       <td> ${filteredData[i].durationMinutes}</td> 
                       <td> ${filteredData[i].comments}</td> 
          
                   </tr>`
        table.innerHTML += row
        console.log(row)
        
    }
 
   
    }
};
