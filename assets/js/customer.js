var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbw8rrMNRZlKncOJxFg3Jaa8GjmQvEwP5O6u8VQoXpF13c95NXc/exec'

$('#customerData').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})
