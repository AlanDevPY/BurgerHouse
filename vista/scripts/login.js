$("#frmAcceso").on('submit', function(e)
{
	e.preventDefault();
	username=$("#username").val();
	password=$("#password").val();

	$.post("../controlador/usuario_controller.php?op=verificar",
        {"username":username, "password":password},
        function(data)
        {
           if (data!="null")
            {
            	$(location).attr("href","escritorio.php");
            }else{
            	bootbox.alert("Usuario y/o Password incorrectos");
            }
        });
})