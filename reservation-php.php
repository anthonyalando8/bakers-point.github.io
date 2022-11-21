<?php
$Email = $_POST["email"];
$Surname = $_POST["SName"];
$FName = $_POST["FName"];
$LName = $_POST["LName"];
$PhoneNumber = $_POST["PNumber"];
$City = $_POST["City"];
$AddressOne = $_POST["Add1"];
$AddressTwo = $_POST["Add2"];
$CheckInDate = $_POST["Check-in-date"];
$CheckInTime = $_POST["Check-in-time"];
$CheckOutDate = $_POST["Check-out-date"];
$TablePreferences = $_POST["Table"];
$NumberOfGuests = $_POST["Number-of-guests"];

if(!empty($Email)||!empty($Surname)||!empty($FName)||!empty($PhoneNumber)||!empty($City )||!empty($AddressOne)||!empty($CheckInDate)||!empty($CheckInTime)||!empty($CheckOutDate)||!empty($TablePreferences)||!empty($NumberOfGuests))
{
    $host="localhost";
    $port=3306;
    $socket="";
    $user="root";
    $password="";
    $dbname="bakerspoint";
    //create sql connection
    $conn = new mysqli($host, $user, $password, $dbname, $port, $socket);
    if($conn->connect_error){
        die('Could not connect to the database server' . mysqli_connect_error());
    }
    else
    {
        $SELECT = "SELECT Email from ReservationDetails where Email = ? Limit 1";
        $INSERT = "INSERT Into ReservationDetails(Email, Surname, FName, LName, PhoneNumber,City,AddressOne,AddressTwo,CheckInDate,CheckInTime,CheckOutDate,TablePreferences,NumberOfGuests)values(?,?,?,?,?,?,?,?,?,?,?,?,?)";
        //prepare statement
        $stmt = $conn->prepare($SELECT);
        $stmt->bind_param("s", $Email);
        $stmt->execute();
        $stmt->bind_result($Email);
        $stmt->store_result();
        $rnum = $stmt->num_rows;
        if($rnum==0){
            $stmt->close();
            $stmt=$conn->prepare($INSERT);
            $stmt->bind_param("ssssisssssssi",$Email, $Surname, $FName, $LName, $PhoneNumber,$City,$AddressOne,$AddressTwo,$CheckInDate,$CheckInTime,$CheckOutDate,$TablePreferences,$NumberOfGuests);
            $stmt->execute();
            echo "New Record Inserted Successfully";
        }
        else
        {
            echo "Reservesation for same email placed already";
        }
        $stmt->close();
        $conn->close();
    }
}
else
{
    echo "All fields required";
    die();
}
?>