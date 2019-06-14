<?php
require_once('functions.php');
set_exception_handler('handleError');
require_once('config.php');
require_once('mysqlconnect.php');

$output = [
    'success' => false,
];

$json_input = file_get_contents("php://input");

$input = json_decode($json_input, true);


$email = $input['email'];
$password = $input['password'];

$email = addslashes($email);
$hashedPassword = sha1($password);

unset($input['password']);

$query = "SELECT `id`, `first_name`, `last_name` FROM `users`
    WHERE `email` = '$email' AND `password` = '$hashedPassword'
";

$result = mysqli_query($conn, $query);

if (!$result) {
    throw new Exception(mysqli_error($conn));
};

if (mysqli_num_rows($result) !== 1) {
    throw new Exception('Invalid username or password');
};

//no error

$data = mysqli_fetch_assoc($result);

$token = $email . $data['id'] . microtime(); //microtime gives time in micro seconds, puts it after the pw so that it hashes
$token = sha1($token);

$connect_query = "INSERT INTO `user_connections` SET
    `token` = '$token',
    `users_id` = {$data['id']},
    `created` = NOW(),
    `ip_address` = '{$_SERVER['REMOTE_ADDR']}'
";

$connect_result = mysqli_query($conn, $connect_query);

if (!$connect_result) {
    throw new Exception(mysqli_error($conn));
};

if (mysqli_affected_rows($conn) !== 1) {
    throw new Exception('Could not log you in: connection not saved');
};

$firstname = $data['first_name'];
$lastname = $data['last_name'];

$_SESSION['user_data'] = [
    'users_id' => $data['id'],
    'username' => $firstname . ' ' . $lastname,
    'token' => $token
];

$output['success'] = true;
$output['username'] = $firstname . ' ' . $lastname;
$output['token'] = $token;

$json_output = json_encode($output);

print($json_output);
