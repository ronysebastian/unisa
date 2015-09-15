<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<link rel="stylesheet" type="text/css" href="../css/Mainbody.css" />
 <link href="../css/jquery-ui.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="../css/800px.css" media="screen and (max-width : 800px)" />
<link rel="stylesheet" type="text/css" href="../css/Menu.css" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
      <script type="text/javascript" src="../js/jquery-ui.min.js"></script>
      <script type="text/javascript" src="../js/listmenu.js"></script>

<title>Layout Tutorial</title>
<style type="text/css">
	body {
		margin-left: 0px;
		margin-top: 0px;
		margin-right: 0px;
		margin-bottom: 0px;
	}
</style>

</head>
<body>
	<div id="Container">
		<div id="Header"></div>
		<div id="Menu">
		 
		 <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
		 </ul>
          

		</div>
		<div id="SideBar">
			<ul id='menu_links'>
  
<!--     <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
    <li><a href="#">Help</a></li>
    <li><a href="#">Feedback</a></li> -->

  </ul>
			
		</div>
		<div id="MainBody"></div>
		<div id="Footer"></div>


	</div>
	
	<script type="text/javascript">
	
	$(document).ready(function() {
		

		var listMenuConfig={
				startTabIndex : 10,
				menus : [ {
							name : " Inbox",
						    click : function(event) {
							       // HCM.mail.loadDataTable(cObj,' Inbox');
							       alert("test");
							},
						 },
					     {
							name : " Sent",
							click : function(event) {
							        // HCM.mail.loadDataTable(cObj,' Sent');
							        alert("test");
							 },
						 },
				         {
						  name : " Drafts",
						   click : function(event) {
							       //HCM.mail.loadDataTable(cObj,' Drafts');
							       alert("test");
						  },
						 },
				       
						 
					
					
				]
			};

			_$listmenu = $("#menu_links");
			_$listmenu.listmenu(listMenuConfig);

		});

	
	
	
	</script>

</body>

</html>