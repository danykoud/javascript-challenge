// from data.js
var tableData = data;

// YOUR CODE HERE!
var button = d3.select('#filter-btn')
var tbody = d3.select('tbody')
var date_UFO = d3.select('#datetime')





function UFO() {

    tableData.forEach(UFO_data => {
        var row = tbody.append('tr');
        Object.entries(UFO_data).forEach(([key, value]) => {
            var cell = row.append('td');

            cell.text(value);
        });
    });
}
UFO(tableData);
// // YOUR CODE HERE!

function searchDate() {
    d3.event.preventDefault();
    var date = date_UFO.property("value");

    filterDate = tableData.filter(tableData => tableData.datetime === date);

    tbody.html("");

    let res = {
        filterDate
    }

    if (res.filterDate.length !== 0) {

        UFO(filterDate);

    } else {
        tbody.append('tr').append('td').text('no result found! keep searching')
    }
};


button.on("click", searchDate)