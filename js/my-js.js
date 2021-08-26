(function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.one').slideToggle();
      // Close one dropdown when selecting another
      $('.one').not($(this).siblings()).hide();
      e.stopPropagation();
    });

     // If a link has a dropdown, add sub menu toggle.
    $('.sec-list a').hover(function(e) {
      $(this).siblings('.two').css("display" ,"block");
      // Close one dropdown when selecting another
     
      e.stopPropagation();
    });

$('.two').hover(function(e) {
      $(".two").css("display" ,"block");
      // Close one dropdown when selecting another
     
      e.stopPropagation();
    });

    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').toggle("slide");

var y = document.getElementById("re-show");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }


   var z = document.getElementById("re-hide");
  if (z.style.display === "block") {
    z.style.display = "none";
  } else {
    z.style.display = "block";
  }



    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.slideToggle('300');
    });
  }); // end DOM ready
})(jQuery); // end jQuery