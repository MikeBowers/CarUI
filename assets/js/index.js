
// if(confirm("Simulate Accident? Ok=Yes Cancel=No")){
//     $(document).ready(function () {
//     $("#status1").text('Accident Detected!');
//       $("#status2").text('Please See Diagnostics Panel and submit claim.');
//       $("#frontOfCar").addClass("damaged");
//       $("#rightSide").addClass("damaged");
//       $("#damageListFront").append('<li>Front Panel</li><br/><li>Headlights</li><br/>');
//       $("#damageListRight").append('<li>Side Mirror</li><br/><li>Window Panel</li><br/>');
//       $("#frontIcon").remove();
//       $("#rightIcon").remove();
//       $("#engineLightIndicator").addClass("damagedLight");
//       $("#airbagIndicator").addClass("damagedLight");
// });
// }else{
// //alert("NO Accident!!!");
// }



function DisplayCurrentTime() {

var date = new Date();
var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
var am_pm = date.getHours() >= 12 ? "PM" : "AM";
hours = hours < 10 ? "0" + hours : hours;
var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
time = hours + ":" + minutes + ":" + seconds + " " + am_pm;
var lblTime = document.getElementById("time");
lblTime.innerHTML = time;
var timeout = setTimeout(DisplayCurrentTime, 1000);
};



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
