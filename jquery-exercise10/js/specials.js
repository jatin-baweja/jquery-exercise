$(document).ready(function() {
  //Set target div
  var $targetDiv = $('<div id="targetDiv"></div>').appendTo('#specials');
  //Specials Drop down Menu
  var $selectDropdown = $('#specials select[name="day"]');
  //Add one time event handler so that json is loaded only once
  $selectDropdown.one('change', function(event) {
    var contentUrl = './data/specials.json';
    $.ajax({
      url : contentUrl,
      type : "GET",
      dataType : 'json',
      success : function(json) {
        var recievedJSON = json;
        //Don't change target div if Select is selected
        if (typeof event.target.value == "string" && event.target.value != "") {
          var currentSpecial = recievedJSON[event.target.value];
          var htmlToShow = "<h3>" + currentSpecial.title + "</h3><img src ='." + currentSpecial.image + "'/><p style='color:" + currentSpecial.color + "'>" + currentSpecial.text + "</p>";
          $targetDiv.html(htmlToShow);
        }
        $selectDropdown.bind('change', function(event) {
          if (typeof event.target.value == "string" && event.target.value != "") {
            var currentSpecial = recievedJSON[event.target.value];
            var htmlToShow = "<h3>" + currentSpecial.title + "</h3><img src='." + currentSpecial.image + "'/><p style='color:" + currentSpecial.color + "'>" + currentSpecial.text + "</p>";
            $targetDiv.html(htmlToShow);
          }
          //Empty target div if Select is selected
          else {
            $targetDiv.html("");
          }
        });
      }
    });
  });
  //Remove submit button
  $('#specials .buttons').remove();
});