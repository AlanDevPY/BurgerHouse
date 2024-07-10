<?php
session_start();
require_once "../modelo/usuario.php";
switch ($_GET["op"]) {
    case 'verificar':
        //validar si el usuario tiene acceso al sistema
        $username=$_POST['username'];
        $password=$_POST['password'];
    
        //Hash SHA256 en la contraseña
        $clavehash=hash("SHA256", $password);
        
        $rspta=$usuario->verificar($username, $clavehash);
    
        $fetch=$rspta->fetch_object();
        if (isset($fetch)) {
            # Declaramos la variables de sesion
            $_SESSION['idusuario']=$fetch->idusuario;
            $_SESSION['nombre']=$fetch->nombre;
            $_SESSION['imagen']=$fetch->imagen;
            $_SESSION['login']=$fetch->login;
    
            //obtenemos los permisos
            $marcados=$usuario->listarmarcados($fetch->idusuario);
    
            //declaramos el array para almacenar todos los permisos
            $valores=array();
    
            //almacenamos los permisos marcados en al array
            while ($per = $marcados->fetch_object()) {
                array_push($valores, $per->idpermiso);
            }
    
            //determinamos lo accesos al usuario
            in_array(1, $valores)?$_SESSION['escritorio']=1:$_SESSION['escritorio']=0;
            in_array(2, $valores)?$_SESSION['almacen']=1:$_SESSION['almacen']=0;
            in_array(3, $valores)?$_SESSION['compras']=1:$_SESSION['compras']=0;
            in_array(4, $valores)?$_SESSION['ventas']=1:$_SESSION['ventas']=0;
            in_array(5, $valores)?$_SESSION['acceso']=1:$_SESSION['acceso']=0;
            in_array(6, $valores)?$_SESSION['consultac']=1:$_SESSION['consultac']=0;
            in_array(7, $valores)?$_SESSION['consultav']=1:$_SESSION['consultav']=0;
    
        }
        echo json_encode($fetch);
    
    
        break;
        case 'salir':
           //limpiamos la variables de la secion
        session_unset();
    
          //destruimos la sesion
        session_destroy();
              //redireccionamos al login
        header("Location: ../index.php");
        break;
}
?>