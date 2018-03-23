var $form = $('form#test-form');
var policyNumber = 0;
var url = 'https://script.google.com/macros/s/AKfycbxTJ4rpFX6BuTHHVlIfcw8eNEsthOIqoUDbdpiKiQA1XdO7DHUI/exec';
//var url ='https://script.google.com/macros/s/AKfycbzFmJqg8OvbstzIroc5PVAnSn6k4pNJzDqTR2Qn8wwRe8a_lbQ/exec';
//https://script.google.com/macros/s/AKfycbzFmJqg8OvbstzIroc5PVAnSn6k4pNJzDqTR2Qn8wwRe8a_lbQ/exec//
$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeArray()
  }).success(function(){

        //redirect to customer.html
        policyNumber = $("#policyNumber").val();
        // similar behavior as an HTTP redirect
        //window.location.replace("https://mikebowers.github.io/CarUI/Customer.html");
        window.location.replace("customer.html#" + policyNumber);
  });
});