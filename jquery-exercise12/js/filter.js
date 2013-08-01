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
  var filterBy = function(criteria, selector) {
    var filterString = "";
    var checkedCriteria = $('#select-' + criteria + ' input[data-filter]:checked');
    if (checkedCriteria.length > 0) {
      checkedCriteria.each(function(index){
        var $this = $(this);
        filterString += (index == 0 ? "" : ", ") + "[data-" + criteria + "='" + $this.attr('data-filter') + "']";
      });
      selector = selector.filter(filterString);
    }
    return selector;
  }
  $('#filter-menu input').bind('change', function(event) {
    var $this = $(this);
    $selector = $('#grid img');
    $selector.hide();
    //Filter By each criteria
    $selector = filterBy('brand', $selector);
    $selector = filterBy('color', $selector);
    $selector = filterBy('sold-out', $selector);
    $selector.show();
  });
});