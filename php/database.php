<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$serveur = 'localhost';
$utilisateur = 'root';
$mot_de_passe = 'root';
$bdd = 'projet';
$link = mysqli_connect($serveur,$utilisateur,$mot_de_passe,$bdd);

function input_csv($csv_file) {
    $result_arr = array ();
    $i = 0;
    while ($data_line = fgetcsv($csv_file, 10000)) {
        if($i == 0){
            $GLOBALS['csv_key_name_arr'] = $data_line;
            $i++;
            continue;
        }

        foreach($GLOBALS['csv_key_name_arr'] as $csv_key_num=>$csv_key_name){
            $result_arr[$i][$csv_key_name] = $data_line[$csv_key_num];
        }
        $i++;
    }
    return $result_arr;
}
