// from data.js
var tableData = data;

// select tbody 
var tbody = d3.select('tbody')


function table_visual(data) {

    tbody.text("")

    data.forEach(UFO_data => {
        var row = tbody.append('tr');
        Object.entries(UFO_data).forEach(([key, value]) => {
            var cell = row.append('td');

            cell.text(value);
        });
    });
};

table_visual(tableData);

//select the user's input and the filter button
var date_UFO = d3.select('#datetime');
var button = d3.select('#filter-btn');

// filter data with date
function searchDate() {
    d3.event.preventDefault();
    console.log(date_UFO.property("value"));
    var input_table_info = tableData.filter(UFO_data => UFO_data.datetime === date_UFO.property("value"));
    table_visual(input_table_info);
};
date_UFO.on("change", searchDate);