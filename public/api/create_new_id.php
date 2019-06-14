<?php
require_once('functions.php');
require_once('config.php');
require_once('mysqlconnect.php');
require_once('checkuserloggedin.php');
set_exception_handler('handleError');


$json_input = file_get_contents("php://input");
$input = json_decode($json_input, true);

$output = [
    'success' => false,
];

$lat= (float)$input['lat'];
$lng = (float)$input['lng'];
$city = $input['city'];

$user_id = $_SESSION['user_data']['id'];

$id_query = "INSERT INTO `run_stats` SET `distance` = 0,
              `time` = 0, `pace` = 0, `date` = NOW(),
              `heart_rate` = 0, `calories` = 0, `lat` = $lat, `lng` = $lng,
              `city` = '$city', `user_id` = $user_id
";

$run_result = mysqli_query($conn, $id_query);


$run_stats_id = mysqli_insert_id($conn);

if(!$run_result){
    throw new Exception(mysqli_error($conn));
};

if(mysqli_affected_rows($conn)===0) {
    throw new Exception('Run was not added');
};

$output['success'] = true;
$output['id'] = $run_stats_id;

print(json_encode($output));
