$(document).ready(function() {
  //Store Search input
  var $searchBox = $('#search .input_text');
  var $searchBoxLabel = $searchBox.closest('form').find('label[for="' + $searchBox.attr("name") + '"]');
  var hintText = $searchBoxLabel.text();
  //Put hint text in search box
  $searchBox.val(hintText);
  //Add hint class
  $searchBox.addClass('hint');
  $searchBoxLabel.remove();
  $searchBox.bind('focus', function() {
    var $this = $(this);
    //Remove hint text only if search box class is hint and hint text string is present
    if (typeof $this.val() == "string" && $this.val() == hintText && $this.hasClass('hint')) {
      $this.val('').removeClass('hint');
    }
  });
  $searchBox.bind('blur', function() {
    var $this = $(this);
    //If empty string is there, add hint text on blur and add class hint
    if (typeof $this.val() == "string" && $this.val() == "") {
      $this.addClass('hint').val(hintText);
    }
  });
});