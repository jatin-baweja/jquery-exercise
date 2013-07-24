$(document).ready(function() {
  //Set container div
  var $containerDiv = $('#stack-container');
  //Set counter to 1
  var counter = 1;
  //Bind a click event to add item button
  $("#add-item").bind('click', function() {
    $containerDiv.prepend($('<div class="stacked_div">' + counter++ + '</div>'));
  });
  //Highlight item on selection
  $containerDiv.delegate('.stacked_div', 'click', function() {
    $(this).toggleClass('highlight');
  });
  //Remove last item on stack
  $containerDiv.delegate('.stacked_div:first-child', 'click', function(){
    $(this).remove();
    counter--;
  });
});