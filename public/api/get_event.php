<?php
require_once('functions.php');
require_once('config.php');
require_once('mysqlconnect.php');
require_once('checkuserloggedin.php');
set_exception_handler('handleError');

$user_id = $_SESSION['user_data']['id'];

$query = "SELECT `eventName`, `eventDate` FROM `event`
  WHERE `id` = $user_id
  ";

$result = mysqli_query($conn, $query);

if (!$result) {
  throw new Exception('invalid query: ' . mysqli_error($conn));
}

$output['success'] = true;
$output[] = [];

$row = mysqli_fetch_assoc($result);
$eventDate = new DateTime($row['eventDate']);

  $output[] = [
    'eventDay' => $eventDate,
    'eventName'=> $row['eventName']
  ];


print(json_encode($output));
