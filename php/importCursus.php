<?php


if ($_FILES["file"]["error"]>0)
  {
  echo "Error: " . $_FILES["file"]["error"] . "<br />";
  }
else
  {
  echo "Upload: " . $_FILES["file"]["name"] . "<br />";
  echo "Type: " . $_FILES["file"]["type"] . "<br />";
  echo "Size: " . ($_FILES["file"]["size"] / 1024) . " Kb<br />";
  echo "Stored in: " . $_FILES["file"]["tmp_name"];
  }

$filename = $_FILES['file']['tmp_name'];
//input_csv($filename);
if (file_exists("../csv/" . $_FILES["file"]["name"]))
{
      echo $_FILES["file"]["name"] . " already exists. ";
}
    else
 {
      move_uploaded_file($_FILES["file"]["tmp_name"],
      "../csv/" . $_FILES["file"]["name"]);
 echo "Stored in: " . "../csv/" . $_FILES["file"]["name"];}


require("database.php");
$handle = fopen($filename, 'r'); 
$etudiant = fgets($handle);
$array_etudiant = explode(";;;;;;;;",$etudiant);

$id=explode(";",$array_etudiant[0]);

$numero = $id[1];
$nom1= explode(";",$array_etudiant[1]);
$nom= $nom1[1];
$prenom1=explode(";",$array_etudiant[2]);
$prenom=$prenom1[1];
$ad1=explode(";",$array_etudiant[3]);
$ad = $ad1[1];
$filliere=explode(";",$array_etudiant[4]);
$fil=$filliere[1];
$insert= insertID($numero,$nom,$prenom,$ad,$fil);
$label = fgets($handle);
$array_label= explode(";",$label);
echo $label;
$ue = array();

   while (!feof($handle)){
       $ue[] = fgets($handle);
        }
        for($i=0;$i<count($ue)-1;$i++){
         $ligne = explode (";",$ue[$i]);
         $ligne[0]=$numero;
      
        $inserer = insertUE($ligne);
        }  



 //$len_result = count($result);
 
 
 function insertID($numero,$nom,$prenom,$ad,$fil){
     $link = mysqli_connect("localhost","root","root","projet");
     $sql_id_cursus = "insert into etudiant values('$numero','".$nom."','".$prenom."','".$ad."','".$fil."')";
     $do = mysqli_query($link , $sql_id_cursus);
     if(!$do){
         echo"operation false";
     }
     else{
     echo "yes" ;}
 }
 
 function insertUE($ligne){
      $link = mysqli_connect("localhost","root","root","projet");
     $sql_ue_csv = "insert into ue values(0,'".$ligne[0]."','".$ligne[1]."','".$ligne[2]."','".$ligne[3]."','".$ligne[4]."','".$ligne[5]."','".$ligne[6]."','".$ligne[7]."','".$ligne[8]."','".$ligne[9]."')";
              $ue_csv = mysqli_query($link, $sql_ue_csv);
              if(!$ue_csv)
              {
                   echo "votre operation est faux! La sigle d'UE est trop long ou vous avez choisi cet UE dans votre cursus...";
              }
              else
              {
                         echo "votre operation est reussi! Ce cursus est deja ajoute";
                   
              }
 }