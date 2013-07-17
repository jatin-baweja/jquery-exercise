$(document).ready(function() {
  //Store Search input
  var $searchBox = $('#search .input_text');
  //Store hint text for use later
  $searchBox.data('hintText', $searchBox.closest('form').find('label[for="' + $searchBox.attr("name") + '"]').text());
  $searchBox.val($searchBox.data('hintText'));
  //Add hint class
  $searchBox.addClass('hint');
  $searchBox.closest('form').find('label[for="' + $searchBox.attr("name") + '"]').remove();
  $searchBox.bind('focus', function() {
    $this = $(this);
    //Remove hint text only if search box class is hint and hint text string is present
    if (typeof $this.val() == "string" && $this.val() == $this.data('hintText') && $this.hasClass('hint')) {
      $this.val('');
      $this.removeClass('hint');
    }
  });
  $searchBox.bind('blur', function() {
    $this = $(this);
    //If empty string is there, add hint text on blur and add class hint
    if (typeof $this.val() == "string" && $this.val() == "") {
      $this.addClass('hint');
      $this.val($this.data('hintText'));
    }
  });
});