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
        $('<img src="' + image_path + recievedJSON[i].url + '" />').appendTo($grid).addClass(recievedJSON[i].brand.toLowerCase().replace(' ','-')).addClass(recievedJSON[i].color.toLowerCase()).addClass(recievedJSON[i].sold_out == 1 ? "all" : "available all");
      }
    },
    error : function() {
      console.log("Error");
    }
  });
  var $selector = $('.all'), brandsChecked = [], colorsChecked = [], availability = ".all";
  $('#filter-menu input').bind('change', function(event) {
    var $this = $(this);
    $selector = $('.all');
    $selector.hide();
    //Add to corresponding array if checked
    if ($this.prop('checked')) {
      switch($this.parent().attr('id')) {
        case "select-brands" : brandsChecked.push("." + $this.attr('id'));
          break;
        case "select-colors" : colorsChecked.push("." + $this.attr('id'));
          break;
        case "select-availability" : availability = "." + $this.attr('id');
          break;
      }
    }
    //Remove from corresponding array if unchecked
    else if (!$this.prop('checked')) {
      switch($this.parent().attr('id')) {
        case "select-brands" : brandsChecked.splice(brandsChecked.indexOf("." + $this.attr('id')),1);
          break;
        case "select-colors" : colorsChecked.splice(colorsChecked.indexOf("." + $this.attr('id')),1);
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
    $selector = $selector.filter($(availability));
    $selector.show();
  });
});