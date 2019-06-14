<?php

//IF THERE ARE BLANK RUN SESSIONS, DELETE THEM
$user_id = $_SESSION['user_data']['id'];

$delete_item_query = "DELETE FROM `run_stats` WHERE `time` = 0 AND `distance` = 0.00
                      AND `user_id` = $user_id
";

$delete_item_result = mysqli_query($conn, $delete_item_query);

?>
