var $form = $('form#test-form');
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
  }).success(
    alert("Successful")
  );
});


(function(){
               
    //https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values
    //1MuyZ8kxM0NTH70n86UEqYf3bp5Y3taRCMUSzZNVpshI
    //1MHgOkIz5kYUchwfSIaR3e2kIcaABryZfb414Iv-DP7k
    //https://script.google.com/macros/s/AKfycbzFmJqg8OvbstzIroc5PVAnSn6k4pNJzDqTR2Qn8wwRe8a_lbQ/exec
    var url = 'https://sheets.googleapis.com/v4/spreadsheets/1MHgOkIz5kYUchwfSIaR3e2kIcaABryZfb414Iv-DP7k/values/Sheet1?key=AIzaSyAccjOIRBqXHMf5YW_0HMwFBCk-z8f-gv8';

    $.ajax({
        url: url,
        method: "GET",
        dataType:"JSONP",
        success: function(data){
           
            var myArrayData = data.values;
            var claimsInfo = $("#claimsInfo");
            if(myArrayData.length > 1){
                var customer = {};
                //skip first index
                
                for(var item = 1; item < myArrayData.length; item++){
                    var breakOutPoint = myArrayData.length + 1;
                    var arrayData = myArrayData[item];
                    for(var value = 0; value < arrayData.length; value++){
                            if(arrayData[value] == "000000002"){
                                customer = {};
                                item = breakOutPoint;
                            }
                            updateJson(customer,value,arrayData[value])
                            console.log(arrayData[value]);
                    }
                }
                
            }
            var customerInfo = "<p id='policyNumber'>"+ "Policy Number: "+ customer.policyNumber +"</p>";
            customerInfo += "<p id='firstName'>"+ "Name: "+ customer.firstName +" "+ customer.lastName+"</p>";
            customerInfo += "<p id='age'>"+ "Age: "+ customer.age +"</p>";
            customerInfo += "<p id='phoneNumber'>"+ "phoneNumber: "+ customer.phoneNumber +"</p>";
            customerInfo += "<p id='email'>"+ "Email: "+ customer.email +"</p>";
            customerInfo += "<p id='wearingSeatBelt'>"+ "Seat Belt: "+ customer.wearingSeatBelt +"</p>";
            customerInfo += "<p id='numberOfPassengers'>"+ "Passengers #: "+ customer.numberOfPassengers +"</p>";
            customerInfo += "<p id='dateAndTimeOfAccident'>"+ "Date and Time: "+ customer.dateAndTimeOfAccident +"</p>";
            customerInfo += "<p id='speedAtTimeOfAccidentMph'>"+ "Speed(MPH): "+ customer.speedAtTimeOfAccidentMph +"</p>";
            customerInfo += "<p id='pointOfImpact'>"+ "Point of Impact: "+ customer.pointOfImpact +"</p>";
            customerInfo += "<p id='warningLightsUsedPriorToAccident'>"+ "Were warning lights used: "+ customer.warningLightsUsedPriorToAccident +"</p>";
            customerInfo += "<p id='onPhoneDuringAccident'>"+ "On Phone during accident: "+ customer.onPhoneDuringAccident +"</p>";
            claimsInfo.append(customerInfo);
        },
        error:function(res){
            alert("Bad thing happend! " + res.statusText);
        }
      });

      function updateJson(objectInfo, index, value){

        switch(index){
            case 0: objectInfo.policyNumber = value;
                    break;
            case 1: objectInfo.firstName = value;
                    break;
            case 2: objectInfo.lastName = value;
                    break;
            case 3: objectInfo.age = value;
                    break;
            case 4: objectInfo.wearingSeatBelt = value;
                    break;
            case 5: objectInfo.numberOfPassengers = value;
                    break;
            case 6: objectInfo.dateAndTimeOfAccident = value;
                    break;
            case 7: objectInfo.speedAtTimeOfAccidentMph = value;
                    break;
            case 8: objectInfo.pointOfImpact = value;
                    break;
            case 9: objectInfo.warningLightsUsedPriorToAccident = value;
                    break;
            case 10: objectInfo.onPhoneDuringAccident = value;
                    break;
            case 11: objectInfo.phoneNumber = value;
                    break;
            case 12: objectInfo.email = value;
                    break;
            default:
                    break;
        }
      }

})();
