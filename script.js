function OpenSubMenus(evt,menuValue)
{
	
	var i, submenus, menus;


	submenus = document.getElementsByClassName("submenus");
	for (i = 0; i < submenus.length; i++)
	{
		submenus[i].style.display = "none";
	}

	
	menus = document.getElementsByClassName("menus");
	for (i = 0; i < menus.length; i++)
	{
		menus[i].className = menus[i].className.replace(" active", "");
	}

	
	document.getElementById(menuValue).style.display = "block";
	evt.currentTarget.className += " active";
} 

function CloseSubMenus(evt)
{
	
	document.getElementById('a').style.display = "none";
	evt.currentTarget.className += " ";
	document.getElementById('b').style.display = "none";
	evt.currentTarget.className += " ";
	document.getElementById('c').style.display = "none";
	evt.currentTarget.className += " ";
	document.getElementById('d').style.display = "none";
	evt.currentTarget.className += " ";
}