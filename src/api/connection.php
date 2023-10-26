<?php

$dbhost="localhost";
$dbuser="root";
$dbpass="";
$dbname="nursebookingdb";

$con=mysqli_connect($dbhost,$dbuser,$dbpass,$dbname);
if($con==false)
{
    die("Failed to connect");
}