<?php
$azon =$_POST["azon"];
$datum=$_POST["datum"];	
$osszeg =$_POST["osszeg"];
require_once './databaseconnect.php';
$sql = "INSERT INTO befiz (datum, osszeg) VALUES (?, ?) Where azon=?";
$stmt = $connection->prepare($sql);
$stmt->bind_param("sii", $datum, $osszeg, $azon);  
if ($stmt->execute()) {
    http_response_code(201);
    $message=array("message" =>'Sikeresen hozzáadva');
    return json_encode($message);
} else {
    http_response_code(404);
    $message=array("message" =>'Nem sikerült hozzáadni');
    return json_encode($message);
}