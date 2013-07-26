$(function() {
  var recievedJSON = null;
  var $grid = $('#grid');
  var image_path = 'images/';
  //Make checkboxes and radio boxes unchecked
  $('input[type="checkbox"], input[type="radio"]').prop('checked', false);
  $.ajax({
    url : 'data/product.json',
    dataType : 'json',
    success : function(json) {
      recievedJSON = json;
      for (var i in recievedJSON) {
        //Added class for color, brand and availability
        $('<img src="' + image_path + recievedJSON[i].url + '" />').appendTo($grid).attr('data-brand', recievedJSON[i].brand).attr('data-color', recievedJSON[i].color).attr('data-sold-out', recievedJSON[i].sold_out);
      }
    },
    error : function() {
      console.log("Error");
    }
  });
  var $selector = $('#grig img'), brandsChecked = [], colorsChecked = [], availability = "[data-sold-out='2']";
  $('#filter-menu input').bind('change', function(event) {
    var $this = $(this);
    $selector = $('#grid img');
    $selector.hide();
    //Add to corresponding array if checked
    if ($this.prop('checked')) {
      switch($this.parent().attr('id')) {
        case "select-brands" : console.log("[data-brand='" + $this.attr('data-filter') + "']");
        brandsChecked.push("[data-brand='" + $this.attr('data-filter') + "']");
          break;
        case "select-colors" : colorsChecked.push("[data-color='" + $this.attr('data-filter') + "']");
          break;
        case "select-availability" : availability = "[data-sold-out='" + $this.attr('data-filter') + "']";
          break;
      }
    }
    //Remove from corresponding array if unchecked
    else if (!$this.prop('checked')) {
      switch($this.parent().attr('id')) {
        case "select-brands" : brandsChecked.splice(brandsChecked.indexOf("[data-brand='" + $this.attr('data-filter') + "']"),1);
          break;
        case "select-colors" : colorsChecked.splice(colorsChecked.indexOf("[data-color='" + $this.attr('data-filter') + "']"),1);
          break;
      }
    }
    //Filter by each filter
    if (brandsChecked.length > 0) {
      $selector = $selector.filter($(brandsChecked.join(", ")));
    }
    if (colorsChecked.length > 0) {
      $selector = $selector.filter($(colorsChecked.join(", ")));
    }
    if (availability != "[data-sold-out='2']") {
      $selector = $selector.filter($(availability));
    }
    console.log($selector.show());
  });
});