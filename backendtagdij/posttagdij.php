<?php
$azon =$_POST["azon"];
$nev=$_POST["nev"];	
$szuldatum =$_POST["szuldatum"];
$irszam =$_POST["irszam"];
$orsz =$_POST["orsz"];
require_once './databaseconnect.php';
$sql = "INSERT INTO ugyfel(azon, nev, szuldatum, irszam, orsz) VALUES (?, ?, ?, ?, ?)";
$stmt = $connection->prepare($sql);
$stmt->bind_param("isiis", $azon, $nev, $szuldatum, $irszam, $orsz);  
if ($stmt->execute()) {
    http_response_code(201);
    $message=array("message" =>'Sikeresen hozzáadva');
    return json_encode($message);
} else {
    http_response_code(404);
    $message=array("message" =>'Nem sikerült hozzáadni');
    return json_encode($message);
}