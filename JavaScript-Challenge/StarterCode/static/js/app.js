// from data.js
var tableData = data;

var tbody = d3.select("#table-display");
// Date
var submitButton = d3.select("#filter-btn-date");
var dateinput = d3.select("#datetime");
// City
var cityButton = d3.select("#filter-btn-city");
var cityinput = d3.select("#cityname");
// State
var stateButton = d3.select("#filter-btn-state");
var stateinput = d3.select("#statename");
// Country
var countryButton = d3.select("#filter-btn-country");
var countryinput = d3.select("#countryname");
// Shape 
var shapeButton = d3.select("#filter-btn-shape");
var shapeinput = d3.select("#shape");

data.forEach(obj => {
    // for each "element" in the object create a row
    var tRow = tbody.append("tr");
    //below "object" becomes the targetet array (element)
    Object.entries(obj).forEach(([key,value]) => {
        // console.log(`The key is: ${key} and the value is: ${value}`);
        var tData = tRow.append("td");
        // adds the "value" to each row in the table
        tData.text(value);
    });
});

submitButton.on("click", function() {
    tbody.html("");
    d3.event.preventDefault();
    console.log("You have clicked the date button");
    var input = dateinput.property("value");
    console.log(input);
    var inputchosen = data.filter(one => one.datetime === input);
    console.log(inputchosen);

    inputchosen.forEach((selection) => {
        // for each "element" create a row
        var row = tbody.append("tr");
        //below "object" becomes the targetet array (element)
        Object.entries(selection).forEach(([key,value]) => {
            var cell = row.append("td");
            // adds the "value" to each row in the table
            cell.text(value);
        });
    });      
});

cityButton.on("click", function() {
    // clears the data of the current table        
    tbody.html("");
    // stop the page from refresh
    d3.event.preventDefault();
    // print "You have just clicked the 'Filter Table' on console, for testing
    console.log("You have just clicked the 'City Filter Button'.");

    var cityinputElement = cityinput.property("value");
    // print value in console
    console.log(cityinputElement);
    // use the "field input" to filter the data by "date" only
    var cityinputchosen = data.filter(two => two.city === cityinputElement);  
    console.log(cityinputchosen)

    
    // display in the html file (appends it at the end, after displaying all original data)
    cityinputchosen.forEach((selects) => {
        // for each "element" create a row
        var city_row = tbody.append("tr");
        //below "object" becomes the targetet array (element)
        Object.entries(selects).forEach(([key,value]) => {
            var city_cell = city_row.append("td");
            // adds the "value" to each row in the table
            city_cell.text(value);
        });
    });      
});

stateButton.on("click", function() {
    // clears the data of the current table        
    tbody.html("");
    // stop the page from refresh
    d3.event.preventDefault();
    // print "You have just clicked the 'Filter Table' on console, for testing
    console.log("You have just clicked the 'State Filter Button'.");
    // select the "input element" and get the raw html node
    
    // get the value property of the "input" element 
    var stateinputElement = stateinput.property("value");
    // print value in console
    console.log(stateinputElement);
    // use the "field input" to filter the data by "state" only
    var stateinputchosen = data.filter(three => three.state === stateinputElement);   // var inputTypeArray = data.filter(one => one[chosen] === inputElement);
    console.log(stateinputchosen)

    
    // display in the html file (appends it at the end, after displaying all original data)
    stateinputchosen.forEach((selectss) => {
        // for each "element" create a row
        var state_row = tbody.append("tr");
        //below "object" becomes the targetet array (element)
        Object.entries(selectss).forEach(([key,value]) => {
            var state_cell = state_row.append("td");
            // adds the "value" to each row in the table
            state_cell.text(value);
        });
    });      
});


countryButton.on("click", function() {
    // clears the data of the current table        
    tbody.html("");
    // stop the page from refresh
    d3.event.preventDefault();
    // print "You have just clicked the 'Filter Table' on console, for testing
    console.log("You have just clicked the 'Country Filter Button'.");
    
    // get the value property of the "input" element 
    var countryinputElement = countryinput.property("value");
    // print value in console
    console.log(countryinputElement);
    // use the "field input" to filter the data by "country" only
    var countryinputchosen = data.filter(four => four.country === countryinputElement);   // var inputTypeArray = data.filter(one => one[chosen] === inputElement);
    console.log(countryinputchosen)

    
    // display in the html file (appends it at the end, after displaying all original data)
    countryinputchosen.forEach((selectsc) => {
        // for each "element" create a row
        var country_row = tbody.append("tr");
        //below "object" becomes the targetet array (element)
        Object.entries(selectsc).forEach(([key,value]) => {
            var country_cell = country_row.append("td");
            // adds the "value" to each row in the table
            country_cell.text(value);
        });
    });      
});

shapeButton.on("click", function() {
    // clears the data of the current table        
    tbody.html("");
    // stop the page from refresh
    d3.event.preventDefault();
    console.log("You have just clicked the 'Shape Filter Button'.");
    
    var shapeinputElement = shapeinput.property("value");
    // print value in console
    console.log(shapeinputElement);
    // use the "field input" to filter the data by "shape" only
    var shapeinputchosen = data.filter(five => five.shape === shapeinputElement);   // var inputTypeArray = data.filter(one => one[chosen] === inputElement);
    console.log(shapeinputchosen)

    
    // display in the html file (appends it at the end, after displaying all original data)
    shapeinputchosen.forEach((selectsh) => {
        // for each "element" create a row
        var shape_row = tbody.append("tr");
        //below "object" becomes the targetet array (element)
        Object.entries(selectsh).forEach(([key,value]) => {
            var shape_cell = shape_row.append("td");
            // adds the "value" to each row in the table
            shape_cell.text(value);
        });
    });      
});