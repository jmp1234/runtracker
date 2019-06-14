<?php
require_once('functions.php');
require_once('config.php');
require_once('mysqlconnect.php');
require_once('checkuserloggedin.php');
set_exception_handler('handleError');

$output = [
    'success' => false,
];

$userid = $_SESSION['user_data']['id'];

$query = "SELECT
MAX(s. `distance`) AS `longestDistance`, MIN((s.`pace`)/(s.`distance`)) AS `maxDistance`, MAX(s.`date`) AS `lastDate`, MAX(s.`calories`) as `maxCalories`, MAX(s.`time`) as `longestTime`,
MIN(s. `time` / s. `distance`) AS `fastestpace`,
SUM(s.`distance`) AS `totalDistance`, SUM(`time`) AS `totalTime`, SUM(`calories`) AS `totalCalories`, SUM(`time`) AS `totalTime`
FROM `run_stats` AS `s`
JOIN `users` ON users.`id` = s.`user_id`
WHERE users.`id` = $userid";

$result = mysqli_query($conn, $query);

if(!$result){
	throw new Exception( mysqli_error($conn) );
}

if(mysqli_num_rows($result) === 0){
	throw new Exception( "no run data available");
}

$data = mysqli_fetch_assoc($result);


//GET THE INFORMATION FROM THE LAST RUN
$lastDateQuery = "SELECT `id`, `distance`, `time` FROM `run_stats` WHERE `user_id` = $userid
                  ORDER BY `date` DESC LIMIT 0, 1";

$lastDateResult = mysqli_query($conn, $lastDateQuery);

if(!$lastDateResult ){
	throw new Exception( mysqli_error($conn) );
}
if(mysqli_num_rows($lastDateResult) === 0){
	throw new Exception( "no run data available");
}

$lastDateData = mysqli_fetch_assoc($lastDateResult);


//GET THE DATE OF THE LONGEST RUN
$longestRunQuery = "SELECT `date`, `id` FROM `run_stats` WHERE `user_id` = $userid
                  ORDER BY `distance` DESC LIMIT 0, 1";

$longestRunResult = mysqli_query($conn, $longestRunQuery);

if(!$longestRunResult){
	throw new Exception( mysqli_error($conn) );
}

if(mysqli_num_rows($longestRunResult) === 0){
	throw new Exception( "no run data available");
}

$longestRunDateData = mysqli_fetch_assoc($longestRunResult);

$longestRunDate = new DateTime($longestRunDateData['date']);
$formattedLongestRunDate = $longestRunDate->format('m-d-Y');



//GET THE DATE OF THE HIGHEST CALORIES
$highestCalorieQuery = "SELECT `date`, `id` FROM `run_stats` WHERE `user_id` = $userid
                  ORDER BY `calories` DESC LIMIT 0, 1";

$highestCalorieResult = mysqli_query($conn, $highestCalorieQuery);

if(!$highestCalorieResult){
	throw new Exception( mysqli_error($conn) );
}

if(mysqli_num_rows($highestCalorieResult) === 0){
	throw new Exception( "no run data available");
}

$highestCalorieDateData = mysqli_fetch_assoc($highestCalorieResult);

$highestCalorieDate = new DateTime($highestCalorieDateData['date']);
$formattedHighestCalorieDate = $highestCalorieDate->format('m-d-Y');


//get the date of the last run
$date = new DateTime($data['lastDate']);
$formattedDate = $date->format('m/d/Y');

//find the time of the last run
$parent = $data['lastDate'];
$timestamp = strtotime($parent);
$time = date('h:i a', $timestamp);


$output = [];

$output['success'] = true;
$hours_or_minutes_format = (int)$lastDateData['time'] > 3600 ? "h:i:s" : "i:s";

$output['latestRunInformation'] = [
  'id' => (int)$lastDateData['id'],
  'distance' => (float)$lastDateData['distance'],
  'time' => gmdate($hours_or_minutes_format, (int)$lastDateData['time']),
];

$output['lastRunDate'] = $formattedDate;
$output['lastRunTime'] = $time;


$output['mostCalories'] = (int)$data['maxCalories'];
$output['longestRun'] = (float)$data['longestDistance'];
$output['longestRunDate'] = $formattedLongestRunDate;
$output['highestCalorieDate'] = $formattedHighestCalorieDate;
$output['highestCalorieId'] = (int)$highestCalorieDateData['id'];
$output['longestRunId'] = (int)$longestRunDateData['id'];



$output['totalDistance'] = (float)$data['totalDistance'];
$output['totalCalories'] = (int)$data['totalCalories'];
$output['longestTime'] = (int)$data['longestTime'];



$totalTimeInSec = (int)$data['totalTime'];
$hours = floor($totalTimeInSec / 3600) < 10 ? 0 . floor($totalTimeInSec / 3600) : floor($totalTimeInSec / 3600);
$minutes = floor(($totalTimeInSec / 60) % 60) < 10 ? 0 . floor(($totalTimeInSec / 60) % 60) : floor(($totalTimeInSec / 60) % 60);
$seconds = $totalTimeInSec % 60 < 10 ? 0 . $totalTimeInSec % 60 : $totalTimeInSec % 60;

$output['totalTime'] = "$hours:$minutes:$seconds";

if((float)$data['totalDistance'] === 0.00) {
  $pace_in_seconds = 0;
} else {
  $pace_in_seconds = round((int)$data['totalTime'] / (float)$data['totalDistance']);
}

$hours_or_minutes_format = (int)$pace_in_seconds > 3600 ? "h:i:s" : "i:s";

$output['averagePace'] = gmdate($hours_or_minutes_format, (int)$pace_in_seconds);



print(json_encode($output));
