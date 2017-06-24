<?php

/*
if ($_FILES["file"]["error"])
  {
  echo "Error: " . $_FILES["file"]["error"] . "<br />";
  }
else
  {
  echo "Upload: " . $_FILES["file"]["name"] . "<br />";
  echo "Type: " . $_FILES["file"]["type"] . "<br />";
  echo "Size: " . ($_FILES["file"]["size"] / 1024) . " Kb<br />";
  echo "Stored in: " . $_FILES["file"]["tmp_name"];
  }*/
include_once('database.php');
$filename = $_FILES['file']['tmp_name'];
input_csv($filename);
if( empty ($filename)){
    echo "false";
}
if (file_exists("../csv/" . $_FILES["file"]["name"]))
{
      echo $_FILES["file"]["name"] . " already exists. ";
}
    else
 {
      move_uploaded_file($_FILES["file"]["tmp_name"],
      "../csv/" . $_FILES["file"]["name"]);
 echo "Stored in: " . "../csv/" . $_FILES["file"]["name"];}



 $handle = fopen($filename, 'r'); 
$etudiant =fgets($handle);
$array_etudiant = explode(";;;;;;;;",$etudiant);
$id=explode(";",$array_etudiant[0]);
$numero=$id[1];
$insert->insertID($numero);

$label=fgets($myfile);

 $len_result = count($result);
 
 
 
 function insertID($numero){
     $sql_id_cursus = "insert into cursus value(".$numero.")";
     $do=mysql_query($link,$sql_id_cursus);
     if(!$do){
         echo"operation false";
     }
     else
        echo "yes" ;
 }