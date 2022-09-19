window.onload = function () {
  var city = document.querySelector('#inputvalue');
  var submit = document.querySelector('#button');
  var timezoneval = document.querySelector('.timezone');
  var timeval = document.querySelector('.time');
  var spinner = document.querySelector('.spinners');
  var timeZoneOfCity;
  var Fulltime;
  var timeT;
  submit.addEventListener('click', function () {
    spinner.style.display = 'block';
    $.ajax({
      method: 'GET',
      url: 'https://api.api-ninjas.com/v1/timezone?city=' + city.value,
      headers: { 'X-Api-Key': '7PZbGPZ2fWRutbB/LZYc/Q==vpiX6muvVcNRyhRU' },
      contentType: 'application/json',
      success: function (result) {
        console.log(result);
        timeZoneOfCity = result['timezone'];
        console.log(timeZoneOfCity);
        timezoneval.innerHTML = timeZoneOfCity;
        var settings = {
          "url": "https://worldtimeapi.org/api/" + timeZoneOfCity,
          "method": "GET",
          "timeout": 0,
        };

        $.ajax(settings).done(function (response) {
          console.log(response);
          Fulltime = response['datetime'];
          console.log(Fulltime);
          const myDateArr = Fulltime.split("T");
          timeT = myDateArr[1];
          const timeArr = timeT.split(".");
          console.log(timeArr[0]);
          var time = timeArr[0];
          timeval.innerHTML = time;
        });

      },
      error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
      }
    });
  }); 
}
