
setInterval(function() {
    var reg = /\{[\s\S]+\}/;
    var mrt = {};
    var sta = $("#station").val();
    var sta_name = $("#station option:selected").text();
    $("#sta_name").text(sta_name);

    var $stationSouthArrival = $('#output .station-south-arrival');
    var $stationSouthDescr = $('#output .station-south-descr');
    var $stationSouthNext = $('#output .station-south-next');

    var $stationNorthArrival = $('#output .station-north-arrival');
    var $stationNorthDescr = $('#output .station-north-descr');
    var $stationNorthNext = $('#output .station-north-next');

    var url = 'https://data.kaohsiung.gov.tw/Opendata/MrtJsonGet.aspx?site=' + sta;

    $.ajax({
      type: 'GET',
      url: url,
      success: function(station) {
        mrt = JSON.parse(reg.exec(station)[0]);
        console.log('success !',mrt);
        $stationSouthArrival.text(mrt.MRT[0].arrival);
        $stationSouthDescr.text(mrt.MRT[0].descr);
        $stationSouthNext.text(mrt.MRT[0].next_arrival);

        $stationNorthArrival.text(mrt.MRT[1].arrival);
        $stationNorthDescr.text(mrt.MRT[1].descr);
        $stationNorthNext.text(mrt.MRT[1].next_arrival);
      }
    });
  }, 5000
);
