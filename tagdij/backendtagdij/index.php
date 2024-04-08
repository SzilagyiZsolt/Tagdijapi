<?php
switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        require_once 'backendtagdij/gettagdij.php';
        break;
    case 'POST':
        require_once 'backendtagdij/posttagdij.php';
        break;
    case 'DELETE':
        require_once 'backendtagdij/deletetagdij.php';
        break;
    case 'PUT':
        require_once 'backendtagdij/puttagdij.php';
        break;
    default:
        break;
}