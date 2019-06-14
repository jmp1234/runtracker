<?php
require_once('functions.php');
require_once('config.php');
require_once('mysqlconnect.php');
require_once('checkuserloggedin.php');
set_exception_handler('handleError');

$userid = 1;

$runstats_query = "SELECT
s.`distance`, s.`time`, s.`pace`, s.`date`
FROM `run_stats` AS `s`
JOIN `users` ON users.`id` = s.`user_id`
WHERE users.`id` = $user_id ";

$result = mysqli_query($conn, $runstats_query);

if(!$result){
    throw new Exception('invalid query: '. mysqli_error($conn));
}

if(mysqli_num_rows($result) === 0){
    throw new Exception("no stats");
};

$data = mysqli_fetch_assoc($result);

print_r(json_encode($data));

?>
