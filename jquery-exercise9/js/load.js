$(document).ready(function() {
  $('#blog h3').each(function(index) {
    var divId = "blogpost" + index;
    $(this).after($('<div id="' + divId + '"></div>')).data('divId', divId);
  });
  $('#blog').delegate('h3', 'click', function(event) {
    var contentLocation = './data/' + $(this).children('a').attr('href').replace('#',' #');
    $('#' + $(this).data('divId')).load(contentLocation, function(htmlResponse) {
    });
    event.preventDefault();
  });
});