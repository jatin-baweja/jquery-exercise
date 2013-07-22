$(document).ready(function() {
  var $modules = $('div.module');
  //Hide all modules
  $modules.hide();
  //Create unordered list
  var $unorderedList = $('<ul></ul>').insertBefore($modules.eq(0));
  //Iterate over the modules and add h2 text to li element. Also, link related module to li using data()
  $modules.each(function() {
    var $this = $(this);
    $unorderedList.append($('<li></li>').append($this.find('h2').text()).data('relatedModule', $this.attr('id')));
  });
  //Bind a click event to li element that shows related module and hides other modules
  $unorderedList.delegate('li', 'click', function() {
    var $this = $(this);
    $modules.hide();
    $this.addClass('current').siblings().removeClass('current');
    $('#' + $this.data('relatedModule')).show();
  });
  //Show the first tab
  var firstTab = $unorderedList.children('li').first().addClass('current');
  $('#' + firstTab.data('relatedModule')).show();
});