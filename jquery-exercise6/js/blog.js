$(document).ready(function() {
  var $blogDiv = $('#blog');
  //Add onclick listener and show excerpt paragraphs for clicked headings
  $blogDiv.delegate('h3', 'click', function(event) {
    $blogDiv.find('h3').not($(this)).siblings('p').slideUp();
    $(this).siblings('p').slideDown();
    event.preventDefault();
  });
});