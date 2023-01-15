$(document).ready(function() {
    // Initialize tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Listen for click event on checkmark
    $('.checkmark').click(function() {
        $('#EarnApp-Modal').modal('show');
    });
})