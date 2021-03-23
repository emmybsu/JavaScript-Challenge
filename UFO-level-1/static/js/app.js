// from data.js to a descriptive variable
var sightings = data;

// select the button
const button = d3.select('#filter-btn');
// select the form 
var form = d3.select('#filters');

//create event handlers
button.on('click', runEnter);
form.on('submit', runEnter);


function createTable(filteredData) {
  var table = document.getElementById('ufo-table')
  tbody.html('');   
  filteredData.forEach((dataRow)=>{ 
    var row = tbody.append('tr');
    Object.values(dataRow).forEach((val)=> {
      let cell = row.append('td');
      cell.text(val);
    })
  })
};
// complete the event handler function for the form
function runEnter() {


// prevent the page from refreshing
  d3.event.preventDefault() 
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  
//   console.log(inputValue);
//   console.log(people);
  var filteredData = sightings.filter(ufoSightings => ufoSightings.datetime === inputValue);

  if (inputValue){filteredData = filteredData.filter(ufoSightings => ufoSightings.datetime === inputValue);}

  console.log(filteredData)
 
//referenced from https://www.youtube.com/watch?v=XmdOZ5NSqb8
createTable(filteredData)};



    // for (var i = 0; i < filteredData.length; i++ ){
    //     var row = `<tr>
    //                    <td> ${filteredData[i].datetime}</td> 
    //                    <td> ${filteredData[i].city}</td> 
    //                    <td> ${filteredData[i].state}</td> 
    //                    <td> ${filteredData[i].country}</td> 
    //                    <td> ${filteredData[i].shape}</td> 
    //                    <td> ${filteredData[i].durationMinutes}</td> 
    //                    <td> ${filteredData[i].comments}</td> 
          
    //                </tr>`
    //     table.innerHTML += row

        
        // var list = d3.select('tbody');
        // list.html('');

     //}
  // Then, select the unordered list element by class name
  //var list = d3.select(".table table-striped");

    //};

