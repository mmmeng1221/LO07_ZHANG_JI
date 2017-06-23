<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$utilisateur = 'root';
$mot_de_passe = 'root';
$datasourcename = 'mysql:host=localhost;dbname=projet';

$numero=$_GET["nCursus"];
print_r($numero);
   try{
       $base = new PDO($datasourcename,$utilisateur,$mot_de_passe);
    if(isset($_GET["nCursus"])||isset($_GET["ue"])){
        if(isset($_GET["nCursus"])){
            $nCursur = $_GET["nCursus"];
            $requete="SELECT * FROM etudiant,ue,cursus WHERE etudiant.nEtu=cursus.nEtu and ue.idCursus=cursus.id=$nCursur";
            $resultat=$base->query($requete);
            while ($row=$resultat->fetch()){
                print_r($row);
            }
        }
       $resultat->closeCursor();
       
   }    
   }  
 catch (PDOException $e){
     die("Erreur!".$e->getMessage());
 }
    
