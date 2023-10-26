<?php
require_once "connection.php";
$name=$_POST['name'];
$phoneno=$_POST['phoneno'];
$gender=$_POST['gender'];
$age=$_POST['age'];
$address=$_POST['address'];
$time=$_POST['time'];
$date=$_POST['date'];

$sql="INSERT INTO `booking`(`name`, `phonenumber`, `gender`, `age`, `address`, `time`, `date`) VALUES ('$name','$phoneno','$gender','$age','$address','$time','$date')";
$result = $con->query($sql);
if ($result->num_rows == 1) {
    // $res=$con->query("INSERT INTO `login`(`email`, `password`) VALUES ('$email','$pass')");
    header("Location: Bookingconfirmed.js");
} else {
    echo "Fill all the details";
}
?>