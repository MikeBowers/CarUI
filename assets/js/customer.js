var $form = $('form#test-form');
var url = 'https://script.google.com/macros/s/AKfycbxTJ4rpFX6BuTHHVlIfcw8eNEsthOIqoUDbdpiKiQA1XdO7DHUI/exec';

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeArray()
  }).success(
    alert("Successful")
  );
});
