$(document).ready(function() {
  //Put #slideshow on top
  var $slideshow = $('#slideshow').prependTo($('body'));
  $slideshow.children().hide();
  //Get total number of slides
  $numberOfSlides = $slideshow.children().length;
  //Present index of Slide
  $index = 0;
  //Insert Navbar to display present slide number and total number of slides
  $navbar = $('<div id="nav"></div>').insertAfter($slideshow);
  //Get Next Slide in the slideshow
  function getNextSlide($nextSlide) {
    var $newSlideshow = $slideshow;
    //Display slide number
    $navbar.text(($index + 1) + " of " + $numberOfSlides);
    $nextSlide.fadeIn(1000).delay(1000).fadeOut(1000, function() {
      $index++;
      //Check if on the last slide
      if ($index < $numberOfSlides) {
        getNextSlide($(this).next());
      }
      else {
        $index = 0;
        getNextSlide($newSlideshow.children().first());
      }
    });
  }
  //Call function with first slide
  getNextSlide($slideshow.children().first());
});