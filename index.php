<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
$kereSzoveg = explode('/', $_SERVER['QUERY_STRING']);
if ($kereSzoveg[0]=== "tagdij") {
    require_once 'backendtagdij/index.php';
}
else if($kereSzoveg[0]=== "befiz") {
    require_once 'backendbefiz/index.php';
}
else {
    http_response_code(405);
    $errorJson = array('message' =>'Nincs ilyen API');
    return json_encode($errorJson);
}