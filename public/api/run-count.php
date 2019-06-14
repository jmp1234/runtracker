<?php
require_once('functions.php');
require_once('config.php');
require_once('mysqlconnect.php');
require_once('checkuserloggedin.php');
set_exception_handler('handleError');

$id = 1;
// $run_id = $_GET['id'];
// $id = $_SESSION['user_data']['id'];

$output = [
  'success'=> false
];


$totalCountQuery = "SELECT COUNT(`id`) as count
FROM `run_stats`
WHERE `user_id` = $id 
  ";

$totalCountResult = mysqli_query($conn, $totalCountQuery);


if (!$totalCountResult) {
    throw new Exception('invalid query: ' . mysqli_error($conn));
}

$row = mysqli_fetch_assoc($totalCountResult);

$monthCountQuery = "SELECT count(`date`)
FROM `run_stats`
WHERE `date` BETWEEN NOW() - INTERVAL 30 DAY AND NOW()
AND `user_id` = $id
";

$monthResult = mysqli_query($conn, $monthCountQuery);

if (!$monthResult) {
    throw new Exception('invalid query: ' . mysqli_error($conn));
};

$monthRow = mysqli_fetch_assoc($monthResult);


$weekCountQuery = "SELECT count(`date`)
FROM `run_stats`
WHERE `date` BETWEEN NOW() - INTERVAL 7 DAY AND NOW()
AND `user_id` = $id
";

$weekResult = mysqli_query($conn, $weekCountQuery);

if (!$weekResult) {
    throw new Exception('invalid query: ' . mysqli_error($conn));
};


$weekRow = mysqli_fetch_assoc($weekResult);

$output = [
    'success' => true,
    'totalCount' => (int)$row['count'],
    'monthCount' => (int)$monthRow['count(`date`)'],
    'weekCount' => (int)$weekRow['count(`date`)']
];

print(json_encode($output));

?>
