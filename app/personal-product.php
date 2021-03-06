<!DOCTYPE html>
<html lang="ru">

<head>

	<meta charset="utf-8">

	<title>Title</title>
	<meta name="description" content="">

	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

	<meta property="og:image" content="path/to/image.jpg">
	<link rel="shortcut icon" href="img/favicon/favicon.ico" type="image/x-icon">
	<link rel="apple-touch-icon" href="img/favicon/apple-touch-icon.png">
	<link rel="apple-touch-icon" sizes="72x72" href="img/favicon/apple-touch-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="114x114" href="img/favicon/apple-touch-icon-114x114.png">

	<!-- bootstrap-select -->
	<link rel="stylesheet" href="libs/bootstrap/bootstrap.min.css">
	<link rel="stylesheet" href="libs/bootstrap-select/bootstrap-select.css">
	<!-- bootstrap-select -->
	<link rel="stylesheet" href="libs/magnific-popup/dist/magnific-popup.css">

	<link rel="stylesheet" href="libs/bootstrap-grid/bootstrap-grid.css">
	<link rel="stylesheet" href="libs/font-awesome.min.css">
	<link rel="stylesheet" href="libs/owl.carousel/assets/owl.carousel.css">
	<!-- <link rel="stylesheet" href="libs/jquery-ui-1.12.1/jquery-ui.min.css"> -->
	<link rel="stylesheet" href="css/main.css">


	<!-- Chrome, Firefox OS and Opera -->
	<meta name="theme-color" content="#000">
	<!-- Windows Phone -->
	<meta name="msapplication-navbutton-color" content="#000">
	<!-- iOS Safari -->
	<meta name="apple-mobile-web-app-status-bar-style" content="#000">

</head>

<body>

	<?php require_once "include/header.php"; ?>
	<?php require_once "include/breadcrumbs.php"; ?>
	
	<section class="maincat">
	    <div class="container">
	    	<div class="row">
	    		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<span class="ah-lktitle">Личный кабинет</span>
	    		</div>
				<div class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
					<?php require_once "include/ah-sidebar.php"; ?>
				</div>
				<div class="col-lg-10 col-md-10 col-sm-10 col-xs-12">
					<?php require_once "include/az-personal-product.php"; ?>
				</div>
			</div>
		</div>
	</section>
	<?php require_once "include/ah-textbox.php"; ?>
	<?php require_once "include/footer.php"; ?>



	<script src="libs/jquery/dist/jquery.min.js"></script>

	<script src="libs/jquery-ui-1.12.1/jquery-ui.min.js"></script>
	<!-- bootstrap-select -->
	<script src="libs/bootstrap/bootstrap.min.js"></script>
	<script src="libs/bootstrap-select/bootstrap-select.js"></script>
	<!-- bootstrap-select -->
	<script src="libs/magnific-popup/dist/jquery.magnific-popup.min.js"></script>
	<script src="libs/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js"></script>

	<script src="libs/owl.carousel/owl.carousel.min.js"></script>
	<script src="js/scripts.js"></script>

</body>
</html>
