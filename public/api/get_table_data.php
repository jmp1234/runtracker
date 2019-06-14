<?php
require_once('functions.php');
require_once('config.php');
require_once('mysqlconnect.php');
require_once('checkuserloggedin.php');
set_exception_handler('handleError');
require_once('delete_blank_runsessions.php');

$output = [
  'success'=> false
];


$user_id = $_SESSION['user_data']['id'];

$query = "SELECT `id`, `date`, `distance`, `time`, `pace`, `calories` FROM `run_stats`
  WHERE `user_id` = $user_id
  ORDER BY `date` DESC
  ";

$result = mysqli_query($conn, $query);


$output['success'] = true;
$output['tableItems'] = [];

while($row = mysqli_fetch_assoc($result)) {
  $date= new DateTime($row['date']);

  $output['tableItems'][] = [
  'date' => ltrim($date->format('m/d/Y'), '0'),
  'distance' => (float)$row['distance'],
  'time' => gmdate('H:i:s', $row['time']),
  'pace' => (int)$row['pace'],
  'id' => (int)$row['id'],
  'calories' => (int)$row['calories']
  ];
};

print(json_encode($output));


?>
