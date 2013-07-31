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
  $('#filter-menu input').bind('change', function(event) {
    var $this = $(this);
    $selector = $('#grid img');
    $selector.hide();
    //Brands Checked Boxes
    var filterString = "";
    var $brandsChecked = $('#select-brands input:checked');
    if ($brandsChecked.length > 0) {
      $brandsChecked.each(function(index){
        var $this = $(this);
        filterString += (index == 0 ? "" : ", ") + "[data-brand='" + $this.attr('data-filter') + "']";
      });
      $selector = $selector.filter(filterString);
    }
    filterString = "";
    var $colorsChecked = $('#select-colors input:checked');
    if ($colorsChecked.length > 0) {
      $colorsChecked.each(function(index){
         var $this = $(this);
         filterString += (index == 0 ? "" : ", ") + "[data-color='" + $this.attr('data-filter') + "']";
       });
       $selector = $selector.filter(filterString);
    }
    filterString = "";
    $availability = $('#select-availability input:checked');
    if ($availability.attr('data-filter') == "0") {
      filterString = "[data-sold-out='" + $availability.attr('data-filter') + "']";
      $selector = $selector.filter(filterString);
    }
    $selector.show();
  });
});