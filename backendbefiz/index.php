<?php
switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        require_once 'backendbefiz/getbefiz.php';
        break;
    case 'POST':
        require_once 'backendbefiz/postbefiz.php';
        break;
    default:
        break;
}