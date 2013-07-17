$(document).ready(function() {
  $modules = $('div.module');
  //Hide all modules
  $modules.hide();
  //Create unordered list
  var $unorderedList = $('<ul></ul>').insertBefore($modules.eq(0));
  //Iterate over the modules and add h2 text to li element. Also, link related module to li using data()
  $modules.each(function() {
    $this = $(this);
    $listElement = $('<li></li>').append($this.find('h2').text());
    $listElement.data('relatedModule', $this);
    $unorderedList.append($listElement);
  });
  //Bind a click event to li element that shows related module and hides other modules
  $unorderedList.delegate('li', 'click', function() {
    $this = $(this);
    $modules.hide();
    $this.data('relatedModule').show();
    $this.siblings().removeClass('current');
    $this.addClass('current');
  });
  //Show the first tab
  $unorderedList.children('li').first().data('relatedModule').show();
  $unorderedList.children('li').first().addClass('current');
});