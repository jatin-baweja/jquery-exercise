$(function() {
  //List of ratings
  var ratings = ["Love it", "Like it", "No Views", "Dislike it", "Abhor it"];
  var $ratingsContainer = $('#rating-values').before($('<div id="empty-div"></div>'));
  //Create Rating Divs
  $.each(ratings, function(index, value) {
    $ratingsContainer.append($('<div class="rating" id="' + value.toLowerCase().replace(/ /g, '-') + '">' + value + '</div>'));
  });
  //Sample data for drinks
  var drinks = ["Coffee", "Tea", "Sodas"];
  //Function to create a new row for a product
  var  newRow = function(productName) {
    var $containerDiv = $('<div id="' + productName.toLowerCase().replace(/ /g, '-') + '-rating"></div>').appendTo($('#product-ratings'));
    $containerDiv.append($('<div id="' + productName.toLowerCase().replace(/ /g, '-') + '" class="product">' + productName + '</div>'));
    for (var i = 0, j = ratings.length; i < j; i++) {
      $containerDiv.append($('<div class="radio-box"><input class="' + ratings[i].toLowerCase().replace(/ /g, '-') + '" type="radio" name="' + productName.toLowerCase().replace(/ /g, '-') + '-rating" disabled /></div>'));
    }
  }
  $.each(drinks, function(index, value) {
    newRow(value);
  });
  //Selection of a row
  $rowSelect = $('#product-ratings').delegate('.product', 'click', function() {
    var $this = $(this);
    //Toggle highlight class on clicks and remove highlight from other products
    $this.toggleClass('highlight');
    $('.product').not($this).removeClass('highlight');
    //Remove highlight from ratings
    $ratingsContainer.children('.highlight').removeClass('highlight');
  });
  var $products = $('.product');
  $ratingsContainer.delegate('.rating', 'click', function() {
    var $this = $(this);
    //Toggle highlight class and remove highlight class from other ratings
    $this.toggleClass('highlight').siblings().removeClass('highlight');
    //If a product is selected, check its corresponding radio button and disable all others for that product
    if ($products.hasClass('highlight')) {
      $('[name="' + $products.filter('.highlight').attr('id') + '-rating"]').attr('disabled', true).filter('.' + $this.attr('id')).attr('disabled', false).prop('checked', true);
    }
  });
});