<?php

		require_once 'core/phpClass.php';
		require_once 'core/App.php';
		require_once 'Test.php';
		



echo("flashX Conv PHP\n");

echo("1:Base Class Test\n");




$test = new Test();

$a=123;
$b=456;
$re=$test->add($a,$b);

echo($re);

