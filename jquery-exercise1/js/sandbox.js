$(document).ready(function() {
  //Divs with class module
  alert("No. of Divs with class module : " + $('div.module').length);
  //3 ways of selecting 3rd list item
  alert("First Way of Selecting 3rd list item :\n" + $('#myList li').eq(2).html());
  alert("Second Way of Selecting 3rd list item :\n" + $('#myList li:contains("item 3")').html());
  //This is the best way as it uses identifier which are unique and thus, returns a single result, which may not be the case for others
  alert("Third(Best) Way of Selecting 3rd list item :\n" + $('#myListItem').html());
  //Search Box
  alert("Search Box Name: " + $('input[type="text"]').attr("name"));
  //No. of hidden elements
  alert("No. of hidden elements : " + $(':hidden').length);
  //No. of images with alt attribute
  alert("No. of images with alt attribute : " + $('img[alt]').length);
  //No. of odd table rows
  alert("No. of odd table rows in the table body : " + $('tr:odd').length);
});