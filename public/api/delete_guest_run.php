<?php
    require_once('functions.php');
    require_once('config.php');
    require_once('mysqlconnect.php');
    require_once('checkuserloggedin.php');
    set_exception_handler('handleError');

    $json_input = file_get_contents("php://input");
    $input = json_decode($json_input, true);

    $output = [
        'success'=> false,
    ];

    $query = "DELETE FROM `run_stats`
    WHERE `user_id` = 5 AND
     `date` > (
        SELECT MIN('2019-05-09 13:18:10')
        FROM (
            SELECT `date`
            FROM `run_stats`
            ORDER BY `date` DESC
        ) AS x
    )
    ";

    $result = mysqli_query($conn, $query);

    if (!$result) {
        throw new Exception('no matching id found: ' . mysqli_error($conn));
    }

    $output = [
        'success'=> true
    ];

    print(json_encode($output));

?>
