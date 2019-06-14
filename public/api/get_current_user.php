<?php
require_once('functions.php');
require_once('config.php');
require_once('mysqlconnect.php');
require_once('checkuserloggedin.php');
set_exception_handler('handleError');

$output['success'] = false;

$user_id = $_SESSION['user_data']['id'];

$query = "SELECT `first_name` FROM `users`
  WHERE `id` = $user_id
  ";

$result = mysqli_query($conn, $query);

if(!$result){
	throw new Exception( mysqli_error($conn) );
}

if(mysqli_num_rows($result) === 0){
	throw new Exception( "no user found");
}

$data = mysqli_fetch_assoc($result);

$output['success'] = true;
$output['first_name'] = $data['first_name'];

print(json_encode($output));
?>
