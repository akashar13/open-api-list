function login(event)
{
event.preventDefault();
	var usr= "admin";
	var pwd= "admin"
	var x = document.getElementById("user").value;
	var y = document.getElementById("pass").value;
	if(x == usr && y == pwd)
	{
	//alert("ok");
		// $('form').attr('action','F:\frugal\assignmentgrp.html');
		 //window.location= "./assignment5.html";
		 window.open ('./loginpage.html','_self',false)
	}
	else{alert("Incorrect password or username");}
}
function logout(event)
{
event.preventDefault();
	

	
		 window.open ('./login.html','_self',false);
}