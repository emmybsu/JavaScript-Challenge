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
  var inputValue = inputElement.property("value");
  var inputCity = inputCity.property("value");
  var inputState = inputState.property("value");
  var inputCountry = inputCountry.property('value');
  var inputShape = inputShape.property('value');


  var filteredData = sightings.filter(ufoSightings => ufoSightings.datetime === inputValue);
  
  if (inputCity) {
    filteredData = filteredData.filter(ufoSightings => ufoSightings.city === inputCity);
  };

  if (inputState) {
    filteredData = filteredData.filter(ufoSightings => ufoSightings.state === inputState);
  };

  if (inputCountry) {
    filteredData = filteredData.filter(ufoSightings => ufoSightings.country === inputCountry);
  };

  if (inputShape) {
    filteredData = filteredData.filter(ufoSightings => ufoSightings.shape === inputShape);
  };

//referenced from https://www.youtube.com/watch?v=XmdOZ5NSqb8
createTable(filteredData)

function createTable(filteredData) {
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
        
    }
 
   
    }
};
