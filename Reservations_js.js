function InvalidNumberOfGuests(){
    var NumberofGuests = document.getElementById("Number-of-guests").value;
    if(isNaN(NumberofGuests) || NumberofGuests < 1 || NumberofGuests > 10)
    {
        document.getElementById("Number-of-guests").style.border = "0.5px solid red";
        window.alert("A maximum of 10 guests required"); 
        document.getElementById("Number-of-guests").value = " ";
    }
    else
    {
        document.getElementById("Number-of-guests").style.border = "0.5px solid greenyellow";
    }
}
function ReservationBookingDateCondition(){
    
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    if(day > 29 || (day >= 28 && month != 1))
    {
        
        if(month == 11)
        {
            year++;
        }
        month++;
    }
    date.setDate(day + 3);
    var minBookDay = new Date();
    minBookDay.setFullYear(year, month, day);
    var checkInDate = new Date();
    checkInDate.setFullYear(document.getElementById("Check-in-date").value);
    var checkOutDate = new Date();
    checkOutDate.setFullYear(document.getElementById("Check-out-date").value);
    if(checkInDate >= minBookDay)
    {
        if(checkOutDate < checkInDate)
        {
            window.alert("Invalid Check Out Date");
            document.getElementById("Check-out-time").value = " ";
            document.getElementById("Check-out-time").style.border = "0.5px solid red";
        }
    }
    else{
        window.alert("Booking should be done atleast three days early. Confirm check in date");
    }
    
}

function upperLeftSection(){
    var upperLeft_part1 = ["Nation wide Shipping","Cathering Giftings and Events","Delivery and Pick Up Options"];
    var loop;
    setTimeout(function(){
      for(loop = 0;loop < upperLeft_part1.length;loop++){
        document.getElementById("right-part1").innerHTML = upperLeft_part1[loop];
    }
    if(loop == 3){
        upperLeftSection();
    }  
    },100)
    
}
