<?php
require_once('functions.php');
require_once('config.php');
require_once('mysqlconnect.php');
require_once('checkuserloggedin.php');
set_exception_handler('handleError');
require_once('delete_blank_runsessions.php');

$user_id = $_SESSION['user_data']['id'];

$query = "SELECT `date`, `id`, `distance`, `city` FROM `run_stats`
  WHERE `user_id` = $user_id
  ORDER BY `date` DESC
  ";

$result = mysqli_query($conn, $query);

if (!$result) {
  throw new Exception('invalid query: ' . mysqli_error($conn));
}

$output['success'] = true;
$output['dates'] = [];

while ($row = mysqli_fetch_assoc($result)) {
  $parent = $row['date'];
  $timestamp = strtotime($parent);

  $date = date('n/j/y', $timestamp);
  $time = date('h:i a', $timestamp);

  $output['dates'][] = [
    'date' => $date,
    'time' => ltrim($time, '0'),
    'miles' => $row['distance'],
    'city' => $row['city'],
    'id' => $row['id']
  ];

};

print_r(json_encode($output));
