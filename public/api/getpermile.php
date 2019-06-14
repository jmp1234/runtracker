<?php
require_once('functions.php');
require_once('config.php');
require_once('mysqlconnect.php');
require_once('checkuserloggedin.php');
set_exception_handler('handleError');


$output = [
    'success' => false,
];


$json_input = file_get_contents("php://input");
$input = json_decode($json_input, true);

$run_stats_id = (int)$input['run_id'];


$query = "SELECT `time`, `mileage`, `id` FROM `miles`
WHERE `run_id` = $run_stats_id
";


$result = mysqli_query($conn, $query);

if (!$result) {
    throw new Exception(mysqli_error($conn));
}

if (mysqli_num_rows($result) === 0) {
    throw new Exception("no user");
};




$data['mileTime'] = [];
while($row = mysqli_fetch_assoc($result)){
    $data['mileTime'][] = [
        'mile' => (int)$row['mileage'],
        'time' => gmdate('H:i:s', $row['time']),
        'id' => (int)$row['id'],
    ];
}

print_r(json_encode($data));
