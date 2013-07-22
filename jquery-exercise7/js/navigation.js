$(document).ready(function() {
  var $menuItems = $('#nav li');
  $menuItems.hover(function() {
    var $this = $(this);
    $this.children().toggleClass('hover');
  });
});