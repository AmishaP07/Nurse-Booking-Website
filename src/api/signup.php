<?php
    require_once "connection.php";

//     $email=$pass=$phoneno="";
//     $email_err=$pass_err="";
//     $param_phoneno=$phoneno;

//     if($_SERVER['REQUEST_METHOD']=="POST")
//     {
//         if(empty(trim($_POST["email"])))
//         {
//             $email_err="Email cannot be blank";
//         }
//         else{
//             $sql="SELECT id FROM `login` WHERE email=?";
//             $stmt=mysqli_prepare($con,$sql);
//             if($stmt)
//             {
//                 mysqli_stmt_bind_param($stmt,"s",$param_email);
//                 $param_email=trim($_POST['email']);
//                 if(mysqli_stmt_execute($stmt))
//                 {
//                     mysqli_stmt_store_result($stmt);
//                     if(mysqli_stmt_num_rows($stmt)==1)
//                     {
//                         $email_err="Email already used";
//                     }
//                     else{
//                         $email=trim($_POST['email']);
//                     }
//                 }
//                 else{
//                     echo "Something went wrong";
//                 }
//             }
//         }
//         mysqli_stmt_close($stmt);
  

//     if(empty(trim($_POST['pass'])))
//     {
//         $pass_err="Password cannot be blank";
//     }
//     elseif(strlen(trim($_POST['pass']))<5)
//     {
//         $pass_err="Password cannot be less than 5 characters";
//     }
//     else{
//         $pass=trim($_POST['pass']);
//     }

//     // if(empty(trim($_POST['phoneno'])))
//     // {
//     //     $phoneno_err="Password cannot be empty";
//     // }
//     // elseif(strlen(trim($_POST['phoneno']))<10 && strlen(trim($_POST['phoneno']))>10 )
//     // {
//     //     $phoneno_err="Phone number should be equal to 10";
//     // }
//     // else{
//     //     $phoneno=trim($_POST['phoneno']);
//     // }


//     if(empty($email_err) && empty($pass_err))
//     {
//         $sql="INSERT INTO `signup` ( `email`, `password`, `phonenumber`) VALUES ($email,$pass,$phoneno)"; 
//         $stmt=mysqli_prepare($con,$sql);
//         if($stmt)
//         {
//             mysqli_stmt_bind_param($stmt,"ss",$param_email,$param_pass);
//             $param_email=$email;
//             $param_pass=password_hash($pass,PASSWORD_DEFAULT);
//             // $param_phoneno=$phoneno;
//             if(mysqli_stmt_execute($stmt))
//             {
//                 header("Location: login.php");
//             }
//             else{
//                 echo "Something went wrong cannot redirect";
//             }
//         }
//         mysqli_stmt_close($stmt);
//     }
//     mysqli_close($con);
// }


    // $con=mysqli_connect("localhost","root","","nursebookingdb");
    // if(!$con){
    //     die("Sorry failed to connect:".mysqli_connect_error());
    // }
    // else{
    //     echo "Connection was successfull<br>";
    // }

    // session_start();
    // include("connection.php");
    // include("function.php");

    // $user_data=check_login($con);
    // if($_SERVER['REQUEST_METHOD']=="POST")
    // {
    //     $semail=$_POST['email'];
    //     $spass=$_POST['password'];
    //     $sphoneno=$_POST['phoneno'];

    //     if(!empty($semail) && !empty($spass) && !empty($sphoneno) && !is_numeric($semail))
    //     {
    //         $query="INSERT INTO `signup`( `email`, `password`, `phonenumber`) VALUES ('$semail','$spass','$sphoneno')";
    //         $signupres=mysqli_query($con,$query);

    //         header("Location: Login.jsx");
    //         die;
    //     }
    //     else{
    //         echo "Please enter valid information";
    //     }
    // }

    // $signupresult=$con->query("SELECT * FROM `signup`");





    $email=$_POST['email'];
    $pass=$_POST['password'];
    $phoneno=$_POST['phoneno'];

    $sql="INSERT INTO `signup`( `email`, `password`, `phonenumber`) VALUES ('$email','$pass','$phoneno')";

    $res=mysqli_query($con,$sql);

    if($res){
        echo "Success!!<br>";
    }
    else{
        echo "Record was not created successfully because of the error";
    }



    // session_start();

	// include("connection.php");
	// include("functions.php");


	// if($_SERVER['REQUEST_METHOD'] == "POST")
	// {
	// 	//something was posted
	// 	$email = $_POST['email'];
	// 	$pass = $_POST['password'];
    //     $phoneno = $_POST['phoneno'];

	// 	if(!empty($email) && !empty($pass) && !is_numeric($phoneno))
	// 	{

	// 		//save to database
	// 		$user_id = random_num(20);
	// 		$query = "insert into `signup` (email,password,phonenumber) values ('$email','$pass','$phoneno')";

	// 		mysqli_query($con, $query);

	// 		header("Location: login.php");
	// 		die;
	// 	}else
	// 	{
	// 		echo "Please enter some valid information!";
	// 	}
	// }
?>