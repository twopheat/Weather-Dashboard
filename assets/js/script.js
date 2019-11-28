function wQueryURL() {
  // queryURL is the API url
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast?";
// api.openweathermap.org/data/2.5/forecast?q=Riverside,CA&appid=1583681dac81837eff11223ef03cd809
  // Begin building an object to contain our API call's query parameters
  // Set the API key
  var queryParams = { "appid": "1583681dac81837eff11223ef03cd809" };
  
  // Add the user input into the queryParams object
  queryParams.q = $("#city-field")
    .val().trim();


  // Logging the URL so we have access to it for troubleshooting
  console.log(queryURL + $.param(queryParams));
  return queryURL + $.param(queryParams);
}


/**
 * takes API data (JSON/object) and turns it into elements on the page
 * @param {object} wData - object containing NYT API data
 */
function updatePage(wData) {
  // Get from the form the number of results to display
  // API doesn't have a "limit" parameter, so we have to do this ourselves
  var numCities = $("7").val();

  // Log wData to console
  console.log(wData);

  // Loop through and build elements for the defined number of articles

    // Get specific city info for current index
    var city = wData.response.city[i];

    // Increase the cityCount (track city # - starting at 1)
    var cityCount = i + 1;

    // Create the  list group to contain the citys and add the city content for each
    var $cityList = $("<ul>");
    $cityList.addClass("list-group");

    // Add the newly created element to the DOM
    $("#city-list").append($cityList);

    // log and append city name to $cityList
    var cityName = city.name;
    var $cityListItem = $("<li class='list-group-item'>");
    console.log(cityName);
    $cityListItem.append(
      "<span class='label label-primary'>" +
        "</span>" +
        "<strong> " +
        city.name +
        "</strong>"
    );


    // If the city has a byline, log and append to $cityList
   /* var byline = city.byline;

    if (byline && byline.original) {
      console.log(byline.original);
      $cityListItem.append("<h5>" + byline.original + "</h5>");
    }

    // Log section, and append to document if exists
    var section = city.section_name;
    console.log(city.section_name);
    if (section) {
      $cityListItem.append("<h5>Section: " + section + "</h5>");
    }

    // Log published date, and append to document if exists
    var pubDate = city.pub_date;
    console.log(city.pub_date);
    if (pubDate) {
      $cityListItem.append("<h5>" + city.pub_date + "</h5>");
    }

    // Append and log url
    $cityListItem.append("<a href='" + city.web_url + "'>" + city.web_url + "</a>");
    console.log(city.web_url);

    // Append the city
    $cityList.append($cityListItem);*/
  }


// Function to empty out the citys
function clear() {
  $("#city-section").empty();
}

// CLICK HANDLERS
// ==========================================================

// search
$("#city-search").on("click", function(event) {

  event.preventDefault();

  
  //clear();

  // Build the query URL
  var queryURL = wQueryURL();

  // Make the AJAX request to the API - GETs the JSON data at the queryURL.
  // The data then gets passed as an argument to the updatePage function
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(updatePage);
});

//  .on("click") function associated with the clear button
$("#clear-all").on("click", clear);