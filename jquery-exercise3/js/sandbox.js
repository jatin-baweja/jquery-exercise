$(document).ready(function() {
  var listItems = [];
  //Add to an array before appending to DOM to avoid multiple appends
  for (var i = 1; i <= 5; i++) {
    listItems.push("<li>Item " + i + "</li>");
  }
  //Add 5 new list items to #myList
  $('#myList').append(listItems.join(''));
  //Remove all odd list items
  $('#myList li:odd').remove();
  //Using single append to add new h2 and paragraph tags
  var anotherHeading = '<h2>New H2</h2>';
  var anotherParagraph = '<p>Another Paragraph</p>';
  $('div.module:last').append(anotherHeading + anotherParagraph);
  //Add another option to select element
  $('<option></option>').appendTo('select').val('Wednesday').text('Wednesday');
  //Insert a new div.module at the end of the last one and add existing image to it
  $('<div class="module" ></div>').insertAfter('div.module:last').append($('img:first').clone());
});