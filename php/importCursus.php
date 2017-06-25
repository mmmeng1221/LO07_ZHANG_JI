
 <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title>Recherche d'un cursus</title>

    <!-- Bootstrap core CSS -->
    <link href="../include/css/bootstrap.min.css" rel="stylesheet">

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <link href="../../assets/css/ie10-viewport-bug-workaround.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="navbar.css" rel="stylesheet">

    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="../../assets/js/ie-emulation-modes-warning.js"></script>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>

    <div class="container">

      <!-- Static navbar -->
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="index.html">Home</a>
          </div>
          <div id="navbar" class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                         <li><a href="#">All</a></li>
              <li><a href="rechercheCursus.html">Recherche</a></li>
              <li class="active"><a href="#">Import</a></li>
              <li><a href="ajouterCursus.html">Créer un nouveau cursus</a></li>

              
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li class="active"><a href="./">Default <span class="sr-only">(current)</span></a></li>
              <li><a href="../navbar-static-top/">Static top</a></li>
              <li><a href="../navbar-fixed-top/">Fixed top</a></li>
            </ul>
          </div><!--/.nav-collapse -->
        </div><!--/.container-fluid -->
      </nav>

      <!-- Main component for a primary marketing message or call to action -->
      <div class="jumbotron">
        <h2>Success!</h2>
        <?php
error_reporting(E_ALL || ~E_NOTICE);
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
if (file_exists("../csv/" . $_FILES["file"]["name"]))
{
      echo $_FILES["file"]["name"];
}
    else
 {
      move_uploaded_file($_FILES["file"]["tmp_name"],
      "../csv/" . $_FILES["file"]["name"]);
 echo "Stored in: " . "../csv/" . $_FILES["file"]["name"];
 
 }


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

$base = new PDO('mysql:host=localhost;dbname=projet','root','root');
$requete2="SELECT count(cursus.id) from cursus";
$res = $base->query($requete2);
while ($row=$res->fetch()){
                 $final=$row[0];           
            }
  $resultat=$final+1;
 // echo $resultat;
     
$addCur = insertCursus($numero,$label,$resultat);


   //while (!feof($handle)){
       $ue[] = fgets($handle);
    //    }
        for($i=0;$i<count($ue)-1;$i++){
         $ligne = explode (";",$ue[$i]);
        $inserer = insertUE($ligne,$resultat);
        }  


  function insertCursus($numero,$label,$resultat){
        $link = mysqli_connect("localhost","root","root","projet");
     $sql_cursus = "insert into cursus values('$resultat','".$label."','".$numero."')";
     $do = mysqli_query($link , $sql_cursus);
    /* if(!$do){
         echo"operation false";
     }
     else{
     echo "good" ;}*/
   }
 
 function insertID($numero,$nom,$prenom,$ad,$fil){
     $link = mysqli_connect("localhost","root","root","projet");
     $sql_id_cursus = "insert into etudiant values('$numero','".$nom."','".$prenom."','".$ad."','".$fil."')";
     $do = mysqli_query($link , $sql_id_cursus);
     /*if(!$do){
         echo"operation false";
     }
     else{
     echo "yes" ;}*/
 }
 
 function insertUE($ligne,$resultat){
      $link = mysqli_connect("localhost","root","root","projet");
     $sql_ue_csv = "insert into ue values(0,'".$resultat."','".$ligne[1]."','".$ligne[2]."','".$ligne[3]."','".$ligne[4]."','".$ligne[5]."','".$ligne[6]."','".$ligne[7]."','".$ligne[8]."','".$ligne[9]."')";
              $ue_csv = mysqli_query($link, $sql_ue_csv);
              /*if(!$ue_csv)
              {
                   echo "votre operation est faux! La sigle d'UE est trop long ou vous avez choisi cet UE dans votre cursus...";
              }
              else
              {
                         echo "votre operation est reussi! Ce cursus est deja ajoute";
                   
              }*/
 } ?>
             
       
      </div>

    </div> <!-- /container -->


    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery.min.js"><\/script>')</script>
    <script src="../../dist/js/bootstrap.min.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="../../assets/js/ie10-viewport-bug-workaround.js"></script>
 </body>
</html>