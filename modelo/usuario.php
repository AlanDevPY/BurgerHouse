<?php 
//incluir la conexion de base de datos
require "../config/Conexion.php";
class Usuario{


	//implementamos nuestro constructor
public function __construct(){

}
//funcion que verifica el acceso al sistema

public function verificar($username,$password){

	$sql="SELECT idusuario,nombre,tipo_documento,num_documento,telefono,email,cargo,imagen,login FROM usuario WHERE login='$login' AND clave='$clave' AND condicion='1'";
	 return ejecutarConsulta($sql);

}
}

 ?>