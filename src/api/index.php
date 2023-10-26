<?php
require_once "connection.php";
// $con=new mysqli("localhost","root","","nursebookingdb");
// if(!$con){
//     die("Sorry failed to connect:".mysqli_connect_error());
// }
// else{
//     echo "Connection was successfull<br>";
// }



// session_start();
//     include("connection.php");
//     include("function.php");

    // $user_data=check_login($con);

// $loginresult=$con->query("SELECT * FROM `login`");



foreach($result as $value)
{
    echo $value['id'];
    echo "<br>";
    echo $value['email'];
    echo "<br>";
    echo $value['password'];
    echo "<br>";
}

// $lemail=$_POST['email'];
// $lpass=$_POST['password'];

// $sql="INSERT INTO `login`(`email`, `password`) VALUES ('$lemail','$lpass')";



$email=$_POST['email'];
$pass=$_POST['password'];


// if(isset($_POST['submit']))
// {
    // $res=$con->query("INSERT INTO `login`(`email`, `password`) VALUES ('$email','$pass')");
    // $loginres=mysqli_query($con,$sql);
    $sql="INSERT INTO `login`(`email`, `password`) VALUES ('$email','$pass')";


    // $sql = "SELECT * FROM `signup` WHERE `email`='$email' AND `password`='$pass'";
    


// }


$result = $con->query($sql);
if ($result->num_rows == 1) {
    // $res=$con->query("INSERT INTO `login`(`email`, `password`) VALUES ('$email','$pass')");
    header("Location: Home.js");
} else {
    echo "Incorrect email or password.";
}
// $sql = "SELECT * FROM `signup` WHERE `email`='$email'";
// $result = $con->query($sql);
// if ($pass === $pass) {
//         //  $res=$con->query("INSERT INTO `login`(`email`, `password`) VALUES ('$email','$pass')");
//         header("Location: Home.js");
//     } else {
//         echo "Incorrect email or password.";
//     }



if($res){
    echo "Success!!<br>";
}
else{
    echo "Record was not created successfully because of the error";
}






// $data=json_decode(file_get_contents("php://input"));

// $email=$data->email;
// $password=$data->password;

// $con=mysqli_connect("localhost","root","");
// mysqli_select_db($con,"nursebookingdb");

// $sql="insert into login(
//     email,password) 
    
//     values('$email','$password')";

// $res=mysqli_query($con,$sql);
// if($res){
//     $response['data']=array(
//         'status'=>'valid'
//     );
//     echo json_encode($response);

// }   
// else{
//     $response['data']=array(
//         'status'=>'invalid'
//     );
//     echo json_encode($response);
// } 

// session_start();

// 	include("connection.php");
// 	include("functions.php");

// 	$user_data = check_login($con);
//     echo $user_data['email'];


?>
