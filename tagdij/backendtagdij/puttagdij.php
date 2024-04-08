<?php
$putdata = fopen('php://input', "r");
$raw_data= "";
while($chunk = fread($putdata, 1024)){
    $raw_data.= $chunk;
}
fclose($putdata);
$adatJson = json_decode($raw_data);
$azon=$adatJson->azon;
$nev=$adatJson->nev;
$szuldatum=$adatJson->szuldatum;
$irszam=$adatJson->irszam;
$orsz=$adatJson->orsz;
require_once './databaseconnect.php';
$sql = "UPDATE ugyfel SET nev=?, szuldatum=?, irszam=?, orsz=? WHERE azon=?";
$stmt = $connection->prepare($sql);
$stmt->bind_param("siisi", $nev, $szuldatum, $irszam, $orsz, $azon);  
if ($stmt->execute()) {
    http_response_code(201);
    echo 'Sikeresen módosítva';
} else {
    http_response_code(404);
    echo 'Nem sikerült módosítani';
}