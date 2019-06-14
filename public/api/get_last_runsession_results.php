<?php
require_once('functions.php');
require_once('config.php');
require_once('mysqlconnect.php');
set_exception_handler('handleError');


$id = $_SESSION['user_data']['id'];

$output = [
  'success'=> false
];


$query = "SELECT r.`id`, r.`distance`, r.`time`, r.`calories`, r.`pace`, m.`mileage` AS `miles`, m.`time` AS `permiletime`
FROM `run_stats` AS r
JOIN `miles` as m
ON r.`id` = m.`run_id`
WHERE `user_id` = $id
ORDER BY r.`id` DESC
  ";



$result = mysqli_query($conn, $query);

if (!$result) {
    throw new Exception('invalid query: ' . mysqli_error($conn));
}

$output['success'] = true;


while($row = mysqli_fetch_assoc($result)) {
    $minutes = round((int)$row['time']/60 , 2);
    $output['sessionData'][] = [
        'id' => (int)$row['id'],
        'time' => (int)$minutes,
        'distance' => (int)$row['distance'],
        'calories' => (int)$row['calories'],
        'pace' => (int)$row['pace'],
        'perMile'=> [
            'currentMile' => (int)$row['miles'],
            'perMileTime' => (int)$row['permiletime']
        ]
    ];
  };

print(json_encode($output));

?>
