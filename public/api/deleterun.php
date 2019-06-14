<?php
    require_once('functions.php');
    require_once('config.php');
    require_once('mysqlconnect.php');
    require_once('checkuserloggedin.php');
    set_exception_handler('handleError');

    $json_input = file_get_contents("php://input");
    $input = json_decode($json_input, true);

    $run_id = $input['id'];

    $output = [
        'success'=> false,
    ];

    $date_query ="SELECT `date` FROM `run_stats` WHERE `id` = $run_id";

    $date_result = mysqli_query($conn, $date_query);

    $date_data = mysqli_fetch_assoc($date_result);


    $date = strtotime($date_data['date']);
    $cutoff_date = strtotime('2019-05-09 13:18:10');


    $delete_query = "DELETE FROM `run_stats` WHERE `id` = $run_id";

    if($_SESSION['user_data']['id'] == 5) {
      if($date > $cutoff_date) {
        $result = mysqli_query($conn, $delete_query);
      } else {
      throw new Exception('you cannot delete preset guest runs');
      }
    } else {
      $result = mysqli_query($conn, $delete_query);
    }

    if (!$result) {
        throw new Exception('no matching id found: ' . mysqli_error($conn));
    }

    $output = [
        'success'=> true
    ];

    print(json_encode($output));

?>
