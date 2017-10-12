<?php
	class Db
	{
		private $connection;
		private $selectdb;
		private $lastQuery;
		private $hostname;
		private $username;
		private $password;
		private $database;
		private $prefix;
		private $connector;
		
		function __construct($parms){
			$this->hostname = !empty($parms["hostname"]) ? $parms["hostname"] : "localhost";
			$this->username = !empty($parms["username"]) ? $parms["username"] : "root";
			$this->password = !empty($parms["password"]) ? $parms["password"] : "";
			$this->database = !empty($parms["database"]) ? $parms["database"] : "nrg";
			$this->prefix = !empty($parms["prefix"]) ? $parms["prefix"] : "";
			$this->connector = "mysqli";
		}
		
		function __destruct(){
		}
		
		public function openConnection(){
			try{
				$this->connection = mysqli_connect($this->hostname, $this->username, $this->password);
				$this->selectdb = mysqli_select_db($this->connection, $this->database);
			}
			catch(exception $e){
				echo $e;
			}
		}
		
		public function closeConnection(){
			try{
				mysqli_close($this->connection);			
			}
			catch(exception $e){
				echo $e;			
			}		
		}
		
		public function query($query){
			$query = str_replace("}", "", $query);
			$query = str_replace("{", $this->prefix, $query);			
			try{
				if(empty($this->connection)){
					$this->openConnection();
					$this->lastQuery = mysqli_query($this->connection, $query);
					$this->closeConnection();
					return $this->lastQuery;					
				}
				else {
					$this->lastQuery = mysqli_query($this->connection, $query);
					return $this->lastQuery;			
				}			
			}
			catch(exception $e){
				return $e;			
			}
		}
		
		public function insert_query($query){
			$query = str_replace("}", "", $query);
			$query = str_replace("{", $this->prefix, $query);
			try{
				if(empty($this->connection)){
					$this->openConnection();
					$result=mysqli_query($this->connection, $query);
					if (!$result)
						$this->lastQuery = mysqli_error($this->connection);
					else
						$this->lastQuery = mysqli_insert_id($this->connection);
				$this->closeConnection();
				}
				else{
					$result=mysqli_query($this->connection, $query);
					if (!$result)
						$this->lastQuery = mysqli_error($this->connection);
					else
						$this->lastQuery = mysqli_insert_id($this->connection);
				}
				return $result;
			}
			catch(exception $e){
				$this->lastQuery = $e;
				return false;
			}
		}
		
		public function lastQuery(){
			return $this->lastQuery;		
		}	
		
		public function fetchArray($result){
			try{
				return mysqli_fetch_array($result, MYSQLI_ASSOC);
			}	
			catch(exception $e){
				return $e;			
			}	
		}
		
		public function getArrayResult($query){
			$numberOfRows = 0;
			$rows = array();
			try {
				$queryResult = $this->query($query);
				if (!$this->lastQuery) {
					$errorArray["error"]=$query.mysqli_error($this->connection);
					$rows[$numberOfRows]=$errorArray;
				}
				else{
					while ($row = $this->fetchArray($queryResult)) {
						$rows[$numberOfRows] = $row;
						$numberOfRows++;
					}
				}
				$queryResult->close();
				return $rows;
			}
			catch(exception $e){
				$errorArray["error"]=mysqli_error($this->connection);
				$rows[$numberOfRows]=$errorArray;
				return $rows;
			}
		}
	}
	
	class LocalData{
		private $postcodes;
		private $aantalPostcodes;
		private $apparaten;
		private $aantalApparaten;
		private $metingen;
	
		function __construct($db){
			$this->postcodes = $this->vulPostcodes($db);
			$this->aantalPostcodes=count($this->postcodes);
			$this->apparaten = $this->vulApparaten($db);
			$this->aantalApparaten = count($this->apparaten);
			$this->metingen = $this->vulMetetingen($db);
		}
	
		function __destruct(){
		}
	
		function vulPostcodes($db){
			$opdracht="SELECT postcode, minnumber, maxnumber, numbertype FROM postcode";
			$result=$db->getArrayResult($opdracht);
			return $result;
		}
			
		function vulApparaten($db){
			$opdracht="SELECT id FROM apparaat";
			$result=$db->getArrayResult($opdracht);
			return $result;
		}

		function vulMetetingen($db){
			$opdracht="SELECT id FROM apparaat_huishouden";
			$result=$db->getArrayResult($opdracht);
			return $result;
		}
	
		public function getValidRandomAddress(){
			$postcode=$this->postcodes[rand(0,$this->aantalPostcodes-1)];
			$result["postcode"]=$postcode["postcode"];
			$factor= ($postcode["numtype"]="mixed" ? 1 : 2);
			$aantalNummers = ($postcode["maxnumber"] - $postcode["minnumber"])/$factor;
			$result["huisnummer"] = $postcode["minnumber"] + rand(0,$aantalNummers)*$factor;
			return $result;
		}
	
		public function getValidApparaatId(){
			return $this->apparaten[rand(0,$this->aantalApparaten-1)]["id"];
		}
	}
?>