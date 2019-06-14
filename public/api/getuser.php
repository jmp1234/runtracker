<?php

require_once('functions.php');
require_once('config.php');
require_once('mysqlconnect.php');
require_once('checkuserloggedin.php');
set_exception_handler('handleError');

$id = $_SESSION['user_data']['id'];

$query = "SELECT `first_name`, `last_name`, `height`, `weight`, `email`, `password` FROM `users` WHERE `id` = $id";

$result = mysqli_query($conn, $query);

if (!$result) {
    throw new Exception('invalid query: ' . mysqli_error($conn));
}

if (mysqli_num_rows($result) === 0) {
    throw new Exception("no user");
};

$data = mysqli_fetch_assoc($result);

print_r(json_encode($data));
