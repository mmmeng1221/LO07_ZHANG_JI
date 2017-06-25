<?php
include '../cursus/calcul.php';
$regle="future";
include '../cursus/form_function.php';
include '../cursus/sum_function.php';
include "../cursus/inf_etu_function.php";

include "forme_html/head.html";
include "forme_html/body1.html";
titre($numero, $nom, $prenom, $branch, $seq,$regle);


include "forme_html/forme.html";
for ($i = 1; $i <= $nombre_semestre; $i++) {
    ligne_chaque_sem($semestre[$i], $i, $branch, $ls_sem,$filiere_arr);
}
 totale($credit,$regle);


include "forme_html/fin_forme.html";
?>
