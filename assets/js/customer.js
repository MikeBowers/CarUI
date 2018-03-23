var policyNumber = 0;
if(window.location.hash) {
policyNumber = window.location.hash.substring(1); //Puts hash in variable, and removes the # character   
}

(function(){
               
    //https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values
    //1MuyZ8kxM0NTH70n86UEqYf3bp5Y3taRCMUSzZNVpshI
    //1MHgOkIz5kYUchwfSIaR3e2kIcaABryZfb414Iv-DP7k
    //https://script.google.com/macros/s/AKfycbzFmJqg8OvbstzIroc5PVAnSn6k4pNJzDqTR2Qn8wwRe8a_lbQ/exec
    var url = 'https://sheets.googleapis.com/v4/spreadsheets/1MHgOkIz5kYUchwfSIaR3e2kIcaABryZfb414Iv-DP7k/values/Sheet1?key=AIzaSyAccjOIRBqXHMf5YW_0HMwFBCk-z8f-gv8';
    //var url = 'https://sheets.googleapis.com/v4/spreadsheets/1MuyZ8kxM0NTH70n86UEqYf3bp5Y3taRCMUSzZNVpshI/values/Sheet1?key=AIzaSyAccjOIRBqXHMf5YW_0HMwFBCk-z8f-gv8';



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
                            if(arrayData[value] == policyNumber){
                                customer = {};
                                item = breakOutPoint;
                            }
                            updateJson(customer,value,arrayData[value])
                            console.log(arrayData[value]);
                    }
                }
                
            }
            var customerInfo = "<p id='policyNumber'>"+ "<span class='bold'>Policy Number:</span> "+ customer.policyNumber +"</p>";
            customerInfo += "<p id='firstName'>"+ "<span class='bold'>Name:</span> "+ customer.firstName +" "+ customer.lastName+"</p>";
            customerInfo += "<p id='age'>"+ "<span class='bold'>Age:</span> "+ customer.age +"</p>";
            customerInfo += "<p id='phoneNumber'>"+ "<span class='bold'>Phone Number:</span> "+ customer.phoneNumber +"</p>";
            customerInfo += "<p id='email'>"+ "<span class='bold'>Email:</span> "+ customer.email +"</p>";
            customerInfo += "<p id='wearingSeatBelt'>"+ "<span class='bold'>Seat Belt:</span> "+ customer.wearingSeatBelt +"</p>";
            customerInfo += "<p id='numberOfPassengers'>"+ "<span class='bold'>Passengers #:</span> "+ customer.numberOfPassengers +"</p>";
            customerInfo += "<p id='dateAndTimeOfAccident'>"+ "<span class='bold'>Date and Time:</span> "+ customer.dateAndTimeOfAccident +"</p>";
            customerInfo += "<p id='speedAtTimeOfAccidentMph'>"+ "<span class='bold'>Speed(MPH):</span> "+ customer.speedAtTimeOfAccidentMph +"</p>";
            customerInfo += "<p id='pointOfImpact'>"+ "<span class='bold'>Point of Impact:</span> "+ customer.pointOfImpact +"</p>";
            customerInfo += "<p id='warningLightsUsedPriorToAccident'>"+ "<span class='bold'>Were warning lights used:</span> "+ customer.warningLightsUsedPriorToAccident +"</p>";
            customerInfo += "<p id='onPhoneDuringAccident'>"+ "<span class='bold'>On Phone during accident:</span> "+ customer.onPhoneDuringAccident +"</p>";
            customerInfo += "<p id='repairShop'>"+ "<span class='bold'>Repair Shop:</span> "+ customer.repairShop +"</p>";
            claimsInfo.append(customerInfo);
        },
        error:function(res){
            console.log("Bad thing happenned! " + res.statusText);
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
            case 13: objectInfo.repairShop = value;
                    break;
            default:
                    break;
        }
      }

})(policyNumber);
