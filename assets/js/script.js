  // queryURL is the API url and Set the API key
  var wAppId = '1583681dac81837eff11223ef03cd809',
        wURL = 'https://api.openweathermap.org/data/2.5/forecast?'
  
  var readyData = function(units) {

    var cityName = $('#city-search').val()

    if (cityName && cityName != ''){
      cityName = cityName.trim()
      getData(wURL, cityName, wAppId, units)
    }
    else {
      alert('City field is empty!')
    }
   }

  $(document).ready(function() {
    $('.btn-imperial').click(function() {
       prepareData('imperial')
    })
    $('.btn-metric').click(function() {
     prepareData('metric')
    })
   })

  function getData(wURL, cityName, wAppId, units) {
    var request = $.ajax({
      url:url,
      dataType: "jsonp",
      data: {q: cityName, appid: appId, units:units},
      jsonpCallback: "fetchData",
      type:"GET"
    }).fail(function(error){
      console.error(error)
      alert('Error Sending Request')
    })
   }
  function fetchData (forecast) {
    console.log(forecast)
    var html = '',
      cityName = forecast.city.name,
    
    html += "<h3> Weather Forecast for ' + cityName + '</h3>"
    forecast.list.forEach(function(forecastEntry, index, list) {
      html += '<p>' + forecastEntry.dt_txt + ': ' + forecastEntry.main.temp + '</p>'
    })

    $('#log').html(html)
   }