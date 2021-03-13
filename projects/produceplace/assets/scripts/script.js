
$(function() {

    // contact form animations
    $('#contactButton').click(function() {
      $('#contactForm').fadeToggle();
      $('#cover').fadeToggle();
    })
    $(document).mouseup(function (e) {
      var container = $("#contactForm");
      var cover = $("#cover")
      if (!container.is(e.target) // if the target of the click isn't the container...
          && container.has(e.target).length === 0) // ... nor a descendant of the container
      {
          container.fadeOut();
          cover.fadeOut();

      }
    });
    
  });
  $(function() {

    // contact form animations
    $('#closeButton').click(function() {
        $('#contactForm').fadeToggle();
        $('#cover').fadeToggle();
      })
      $(document).mouseup(function (e) {
        var container = $("#contactForm");
        var cover = $("#cover")
        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            container.fadeOut();
            cover.fadeOut();
  
        }
    });
    
  });