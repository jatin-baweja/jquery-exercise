$(document).ready(function() {
  $blogDiv = $('#blog');
  //Add onclick listener and show excerpt paragraphs for clicked headings
  $blogDiv.delegate('h3', 'click', function(event) {
    event.preventDefault();
    $blogDiv.find('h3').not($(this)).siblings('p').slideUp();
    $(this).siblings('p').slideDown();
  });
});