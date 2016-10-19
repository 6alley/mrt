var getData108 = function() {
  var reg = /\{[\s\S]+\}/;
  var mrt = {};

  var $stationSouthArrival108 = $('#output108 .station-south-arrival');
  var $stationSouthDescr108 = $('#output108 .station-south-descr');
  var $stationSouthNext108 = $('#output108 .station-south-next');

  var $stationNorthArrival108 = $('#output108 .station-north-arrival');
  var $stationNorthDescr108 = $('#output108 .station-north-descr');
  var $stationNorthNext108 = $('#output108 .station-north-next');

  $.ajax({
    type: 'GET',
    url: 'https://data.kaohsiung.gov.tw/Opendata/MrtJsonGet.aspx?site=108',
    success: function(station) {
      mrt = JSON.parse(reg.exec(station)[0]);
      console.log('success 108',mrt);
      $stationSouthArrival108.text(mrt.MRT[0].arrival);
      $stationSouthDescr108.text(mrt.MRT[0].descr);
      $stationSouthNext108.text(mrt.MRT[0].next_arrival);

      $stationNorthArrival108.text(mrt.MRT[1].arrival);
      $stationNorthDescr108.text(mrt.MRT[1].descr);
      $stationNorthNext108.text(mrt.MRT[1].next_arrival);
    }
  });
};

getData108();

var getData114 = function() {
  var reg = /\{[\s\S]+\}/;
  var mrt = {};

  var $stationSouthArrival114 = $('#output114 .station-south-arrival');
  var $stationSouthDescr114 = $('#output114 .station-south-descr');
  var $stationSouthNext114 = $('#output114 .station-south-next');

  var $stationNorthArrival114 = $('#output114 .station-north-arrival');
  var $stationNorthDescr114 = $('#output114 .station-north-descr');
  var $stationNorthNext114 = $('#output114 .station-north-next');

  $.ajax({
    type: 'GET',
    url: 'https://data.kaohsiung.gov.tw/Opendata/MrtJsonGet.aspx?site=114',
    success: function(station) {
      mrt = JSON.parse(reg.exec(station)[0]);
      console.log('success 114',mrt);
      $stationSouthArrival114.text(mrt.MRT[0].arrival);
      $stationSouthDescr114.text(mrt.MRT[0].descr);
      $stationSouthNext114.text(mrt.MRT[0].next_arrival);

      $stationNorthArrival114.text(mrt.MRT[1].arrival);
      $stationNorthDescr114.text(mrt.MRT[1].descr);
      $stationNorthNext114.text(mrt.MRT[1].next_arrival);
    }
  });
};

getData114();

setInterval(getData108, 5000);
setInterval(getData114, 5000);
