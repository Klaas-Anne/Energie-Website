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

<Form action="CreateHuishoudens.php" method="POST">
	Aantal huishoudens 1:
	<br><input type="text" class="TxtBox" name="Aantal" value="100">
	<br>Maximum aantal apparaten per huishouden:
	<br> <input type="text" class="TxtBox" name="Max" value="3">
	<br>Gebruiker:
	<br> <input type="text" class="TxtBox" name="User" value="root">
	<br>Wachtwoord:
	<br> <input type="text" class="TxtBox" name="Password" value="">
	<br>Database:
	<br> <input type="text" class="TxtBox" name="Database" value="nrg">
	<br>Database locatie:
	<br> <input type="text" class="TxtBox" name="Hostname" value="localhost">

	<Input type="submit" value="Execute">
</Form>
</body>
</html>

