$(document).ready(function() {
    $(".search").click(function() {
      $(this).addClass("active");
    });
    $(document).click(function(e) {
      if (!$(e.target).closest(".search").length) { //another way to do this is to stop event propagation
        $(".search.active").removeClass('active');
      }
    });
  });


  $("#search-button").on("click", function() {

    // Storing our Open Weather API URL for query
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=bbea62cdba22465b7f7589c50dd2081e";
    

    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    console.log(queryURL);
    // After the data from the AJAX request comes back
      .then(function(response) {

      // Saving the image_original_url property
        var wData = response.data.list;
        var weatherData = $("<today-weather>");

        // Setting the weatherData src attribute to imageUrl
        weatherData.attr("list.main.temp", wData);
        weatherData.attr("list.wind.speed", "cat image");

        // Prepending the weatherData to the images div
        $("#").prepend(weatherData);
      });
  });
  

  