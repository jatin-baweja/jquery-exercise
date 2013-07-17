$(document).ready(function() {
  $menuItems = $('#nav li');
  $menuItems.hover(function() {
    $this = $(this);
    $this.children().toggleClass('hover');
  });
});