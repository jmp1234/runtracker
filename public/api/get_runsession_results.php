<?php
require_once('functions.php');
require_once('config.php');
require_once('mysqlconnect.php');
require_once('checkuserloggedin.php');
set_exception_handler('handleError');

$run_id = $_GET['id'];
$id = $_SESSION['user_data']['id'];

$output = [
  'success'=> false
];
$output['sessionData'] = [];

$query = "SELECT r.`id`, r.`distance`, r.`time`, r. `date`, r.`calories`,
r.`lat`, r.`lng`, r.`pace`, r.`city`, m.`mileage` AS `miles`, m.`time` AS `permiletime`
FROM `run_stats` AS r
JOIN `miles` as m
ON r.`id` = m.`run_id`
WHERE `user_id` = $id AND
r.`id` = $run_id
  ";


$result = mysqli_query($conn, $query);

if (!$result) {
    throw new Exception('invalid query: ' . mysqli_error($conn));
}


while($row = mysqli_fetch_assoc($result)) {
  $minutes = round((int)$row['time']/60 , 2);

  if((float)$row['miles'] === 0.00) {
    $pace = 0;
  } else if(floor((float)$row['miles']) === (float)$row['miles']) {
    $pace = (int)$row['permiletime'];
  } else {
    $pace = (int)$row['permiletime']/((float)$row['miles'] - floor((float)$row['miles']));
  };
  $parent = $row['date'];
  $timestamp = strtotime($parent);

  $date = date('l, M j', $timestamp);
  $time = date('h:i a', $timestamp);

  if((int)$row['time'] < 3600) {
    $hrs_min_sec = "i:s";
  } else {
    $hrs_min_sec = "H:i:s";
  }

  $output['city'] = $row['city'];

  $output['date'] = [
    'date' => $date,
    'time' => ltrim($time, '0')
  ];
  $output['coordinates'] = [
    'lat' => (float)$row['lat'],
    'lng' => (float)$row['lng']
  ];
  $output['secondsRan'] = (int)$row['time'];
  $output['minutesSecondsRan'] = gmdate($hrs_min_sec, (int)$row['time']);
  $output['distance'] = (float)$row['distance'];
  $output['sessionData'][] = [
    'time' => (int)$minutes,
    'distance' => (int)$row['distance'],
    'calories' => (int)$row['calories'],
    'pace' => (int)$row['pace'],
      'perMile'=> [
          'currentMile' => (float)$row['miles'],
          'perMileTime' => round((float)$pace, 0)
      ]
  ];
};

$output['success'] = true;

print(json_encode($output));

?>
