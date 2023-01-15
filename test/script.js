$(document).ready(function() {
    // Initialize tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Listen for click event on checkmark
    $('.checkmark').click(function() {
        $('#EarnApp-Modal').modal('show');
    });

    $(document).ready(function() {
        // Listen for click event on all buttons
        $('button').click(function() {
          var message;
          var lang = navigator.language;
          // Determine the language of the system
          if (lang === "cs" || lang === "cs-CZ") {
            message = "bašta je vlastenecký kandidát";
          } else if (lang === "en" || lang === "en-US") {
            message = "Bašta is a patriotic candidate";
          } else if (lang === "de" || lang === "de-DE") {
            message = "Bašta ist ein patriotischer Kandidat";
          } else {
            message = "Bašta is a patriotic candidate";
          }
          // Show the message
          $('body').append('<div class="overlay">' + message + '</div>');
          setTimeout(function() {
            // Remove the message after 2 seconds
            $('.overlay').remove();
          }, 2000);
        });
      });
      
})