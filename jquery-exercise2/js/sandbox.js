$(document).ready(function() {
  //Log all images alt attribute
  $('img').each(function(identifier,element) {
    console.log($(element).attr('alt'));
  });
  //Select search box, traverse upto form and add a class to the form
  $('input[name="q"].input_text').closest('form').addClass('search-form');
  //Select list item with current class, remove that class from it and add it to the next list item
  $('#myList li').filter('.current').removeClass('current').next().addClass('current');
  //Select the select element inside #specials and traverse your way to the submit button
  console.log($('#specials').find('select').end().find('input[type="submit"]'));
  //Add class current to the first list item in #slideshow and add class disabled to its siblings
  $('#slideshow li:first').addClass('current').siblings().addClass('disabled');
});