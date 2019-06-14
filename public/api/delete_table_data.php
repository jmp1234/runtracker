<?php
require_once('functions.php');
require_once('config.php');
require_once('mysqlconnect.php');
set_exception_handler('handleError');

$json_input = file_get_contents("php://input");
$input = json_decode($json_input, true);

$output = [
'success'=> false
];

$run_id = (int)$input['run_id'];

$delete_item_query = "DELETE FROM `run_stats` WHERE `id` = $run_id
";

$delete_item_result = mysqli_query($conn, $delete_item_query);

if(!$delete_item_result){
    throw new Exception(mysqli_error($conn));
}
if(mysqli_affected_rows($conn) === 0){
    throw new Exception('Failed to delete item');
}

$output = [
    'success' => true,
];

print(json_encode($output));


?>
