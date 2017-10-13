<html>
<head>
<title>Energie Website Vulprogramma</title>
<style>
h1  { color:#000066; }
h3  { color:#666600; }
pre { background-color:#FFFFE0; padding:5px; border:1px solid #666600; }
</style>
</head>
<body>
<h1>Tester</h1>
<?php
	$parms["aantal"] = $_POST["Aantal"];
	$parms["maxApparaten"] = $_POST["Max"];
	$dbconfig["hostname"] = $_POST["Hostname"];
	$dbconfig["username"] = $_POST["User"];
	$dbconfig["password"]    = $_POST["Password"];
	$dbconfig["database"] = $_POST["Database"];
	
	CreateHuishoudens($parms, $dbconfig);
	
	function CreateHuishoudens($parms, $dbconfig)
	{
		require_once("classDb.php");//../WAD41/
		//Maak de verbinding met de database
		$db = new Db($dbconfig);
		$db->openConnection();
		$aangemaakt=vulDatabase($db,$parms);
		echo"Er zijn ".$aangemaakt["huishoudens"]." huishoudens, " . $aangemaakt['metingen'] . " metingen en ".$aangemaakt["apparaten"]." apparaten aangemaakt";
		$db->closeConnection();
	}

	function vulDatabase($db,$parms){
		$localData=new LocalData($db);
		for($i=0;$i<$parms["aantal"];$i++){
			$huisId=maakHuishouden($db, $localData);
			if ($huisId>0) {
				$result["huishoudens"]++;
				$result["apparaten"]+=voegApparatenToe($db, $parms["maxApparaten"], $localData, $huisId);
				$result["metingen"]+=voegMetingenToe($db, $localData);
			}
		}
		return $result;
	}

	function maakHuishouden($db, $localData){
		$huisAdres= $localData->getValidRandomAddress();
		$grootte=rand(1,8);
		$opdracht="INSERT INTO huishouden (postcode, huisnummer, grootte)"
				.'VALUES ("'.$huisAdres["postcode"].'", "'.$huisAdres["huisnummer"].'", "'.$grootte.'")';
		return ($db->insert_query($opdracht) ? $db->lastQuery() : -1);		
	}
	
	function voegApparatenToe($db, $maxApparaten, $localData, $huisId){
		$result=0;
		$numApparaten = rand(1,$maxApparaten);
		for($j=0;$j<$numApparaten;$j++){
			$apparaatId=$localData->getValidApparaatId();
			$opdracht="INSERT INTO apparaat_huishouden (huishouden_fk, apparaat_fk)"
					.'VALUES ("'.$huisId.'", "'.$apparaatId.'")';
			if ($db->insert_query($opdracht)) $result++;
		}
		return $result;
	}

	function voegMetingenToe($db, $localData){
		$randdomDatum = mt_rand(20000101, 20171010);
		$datum=date("Y:m:d", $randdomDatum);
		$tijd=0;
		$waarde=0; // TODO: Max app_hh
		$app_hh=$localData->getValidApparaatHuishoudenId();
		$opdracht="INSERT INTO meting (app_hh, datum, tijd, waarde)"
						.'VALUES ('.$app_hh.', "'.$datum.'", "'.$tijd.'", '.$waarde.')';

		return($db->insert_query($opdracht));
	}
?>	
</body>
</html>