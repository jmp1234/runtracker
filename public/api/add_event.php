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

$event= $input['event'];
$date = $input['eventDate'];



$user_id = $_SESSION['user_data']['id'];

$id_query = "INSERT INTO `event`
    (`eventName`, `eventDate`, `id`)
    VALUES
    ('$event', '$date', '$user_id')
    ON DUPLICATE KEY UPDATE `eventName` = '$event', `eventDate` = '$date'
";


$result = mysqli_query($conn, $id_query);


if(!$result){
    throw new Exception(mysqli_error($conn));
};

if(mysqli_affected_rows($conn)===0) {
    throw new Exception('Run was not added');
};

$output['success'] = true;

print(json_encode($output));
