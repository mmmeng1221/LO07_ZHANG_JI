<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$link=mysql_connect("localhost","root"."");
mysqli_select_db($link, "projetlo07");
if($_FILES["file"]["type"] != "application/vnd.ms-excel"){
	die("Ce n'est pas un fichier de type .csv");
}
elseif(is_uploaded_file($_FILES['file']['tmp_name'])){
$handle = fopen($_FILES['file']['tmp_name']);
$ligne=explode($_FILES);
while($data=fgetcsv($handle,10000,";")!== false){
    $row = 1;
    for($row=1;$row<6;$row++){
    if($dataname[1]=id){
        
    }
        } 
        
        fclose($handle);
    }
        
        
        
}
