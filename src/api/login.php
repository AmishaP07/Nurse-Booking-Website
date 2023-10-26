<?php 

session_start();

	include("connection.php");
	include("function.php");


	if($_SERVER['REQUEST_METHOD'] == "POST")
	{
		//something was posted
		$email = $_POST['email'];
		$pass = $_POST['password'];

		if(!empty($email) && !empty($pass))
		{

			//read from database
			$query = "select * from `login` where email = '$email' limit 1";
			$result = mysqli_query($con, $query);

			if($result)
			{
				if($result && mysqli_num_rows($result) > 0)
				{

					$user_data = mysqli_fetch_assoc($result);
					
					if($email['password'] === $pass)
					{

						$_SESSION['id'] = $user_data['id'];
						header("Location: index.php");
						die;
					}
				}
			}
			
			echo "wrong username or password!";
		}else
		{
			echo "wrong username or password!";
		}
	}

?>