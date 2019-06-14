<?php

session_start();

$output = [
    'success' => false
];

if (!empty($_SESSION['user_data'])) {
    $output['success'] = true;
}

print json_encode($output);
