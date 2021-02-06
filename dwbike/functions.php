<?php 


// koneksi ke database
$conn = mysqli_connect("localhost","root", "","dw_bike" );

// ambildata
function query ($query) {
	global $conn;
	$result = mysqli_query ($conn, $query);
	$rows = [];
	while ($row = mysqli_fetch_assoc($result)) {
		$rows[] =$row;
	}
	return $rows;

}


function signup($data)
{
	global $conn;
	$query = "Insert INTO user
          VALUES
           ('','{$data['name']}', '{$data['email']}' , '{$data['password']}')
  ";

  $result = mysqli_query ($conn, $query);
  if ($result) {
	  header("Location: login.php");
	  exit;
  } 
  $error = true;
}

function login($data)
{
	global $conn;
	$query = "SELECT * from user WHERE email = '{$data['email']}' and password = '{$data['password']}';";

	$result = mysqli_query ($conn, $query);
	if (mysqli_num_rows($result) === 1) {
		header("Location: index.php");
		exit;
	}

	$error = true;

}



 ?>