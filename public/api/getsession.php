<?php

session_start();

$key = $_GET['key'];
$value = $_GET['value'];

$_SESSION[$key] = $value;

echo '<h1> Session Set</h1><pre>';
print_r($_SESSION);
echo '</pre>';