<<<<<<< HEAD
var $form = $('form#test-form');
var url = 'https://script.google.com/macros/s/AKfycbxTJ4rpFX6BuTHHVlIfcw8eNEsthOIqoUDbdpiKiQA1XdO7DHUI/exec';
// submit below
=======
var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbxTJ4rpFX6BuTHHVlIfcw8eNEsthOIqoUDbdpiKiQA1XdO7DHUI/exec'
// submit form below
>>>>>>> c14c2d93b9edf2d30f59a243cfd85873f718ddf1
$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
<<<<<<< HEAD
    data:  $form.serializeArray()
=======
    data: $form.serialize()
>>>>>>> c14c2d93b9edf2d30f59a243cfd85873f718ddf1
  }).success(
    alert("Successful")
  );
});
