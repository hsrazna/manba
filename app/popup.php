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

	
	<link rel="stylesheet" href="libs/bootstrap-grid/bootstrap-grid.css">
	<link rel="stylesheet" href="libs/font-awesome.min.css">
	<link rel="stylesheet" href="libs/owl.carousel/assets/owl.carousel.css">
  
  <!-- bootstrap-select -->
	<link rel="stylesheet" href="libs/bootstrap/bootstrap.min.css">
	<link rel="stylesheet" href="libs/bootstrap-select/bootstrap-select.css">
	<!-- bootstrap-select -->

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
	<?php require_once "include/header-bottom.php"; ?>
	

	<div class="az-basket-popup">
		<h2>Корзина</h2>
		<div class="az-basket-wrap">
			<div class="az-basket-item clearfix">
				<div class="az-basket-img">
					<img src="img/az-basket1.jpg" alt="Весенняя шерстяная жилетка дизайнерский крой">
				</div>
				<div class="az-basket-content">
					<div class="az-bc-title">
						<h3>Весенняя шерстяная жилетка дизайнерский крой</h3>
						<span>Артикул 127488</span>
					</div>
					<div class="az-bc-count">
						<div class="az-count-top">
							<a href="#" class="az-count-minus">-</a>
							<span class="az-count-num">10</span>
							<a href="#" class="az-count-plus">+</a>
							<a href="#" class="az-bascet-del">del</a>
						</div>
						<div class="az-count-bottom">Осталось всего 7 штук</div>
					</div>
					<div class="az-summ">
						5 784,00 TJS
					</div>
				</div>
			</div>
			<div class="az-basket-item clearfix">
				<div class="az-basket-img">
					<img src="img/az-basket2.jpg" alt="Весенняя шерстяная жилетка дизайнерский крой">
				</div>
				<div class="az-basket-content left">
					<div class="az-bc-title">
						<h3>Чашка керамическая Keep calm and drink coffee</h3>
					</div>
				</div>
				<div class="az-basket-subcontent">
					<div class="az-bc-title">
						<h3>350 мл, черная с красным</h3>
					</div>
					<div class="az-bc-count">
						<div class="az-count-top">
							<a href="#" class="az-count-minus">-</a>
							<span class="az-count-num">5</span>
							<a href="#" class="az-count-plus">+</a>
							<a href="#" class="az-bascet-del">del</a>
						</div>
					</div>
					<div class="az-summ">
						54,00 TJS + 3 бонуса
					</div>
				</div>
				<div class="az-basket-subcontent">
					<div class="az-bc-title">
						<h3>550 мл, красная</h3>
					</div>
					<div class="az-bc-count">
						<div class="az-count-top">
							<a href="#" class="az-count-minus">-</a>
							<span class="az-count-num">15</span>
							<a href="#" class="az-count-plus">+</a>
							<a href="#" class="az-bascet-del">del</a>
						</div>
					</div>
					<div class="az-summ">
						554,00 TJS
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="hidden">
		<form id="small-dialog" class="zoom-anim-dialog common-form">
			<div class="ah-upimg">
				<img src="img/ah-popimg.png" style="width: 110px; height: 120px;" alt="ah-popimg.png">
			</div>
			<span class="form-title">ОСТАВЬТЕ ЗАЯВКУ</span>
			<span class="form-subtitle">И НАШ МЕНЕДЖЕР СВЯЖЕТСЯ С ВАМИ В ТЕЧЕНИИ ОДНОЙ МИНУТЫ</span>
			<input type="text" class="phone" name="tel" placeholder="+7 (___) ___-__-__">
			<input type="submit" value="ОСТАВИТЬ ЗАЯВКУ">
		</form>
	</div>

	<script src="libs/jquery/dist/jquery.min.js"></script>
	<script src="libs/jquery-ui/jquery-ui.js"></script>

	<!-- bootstrap-select -->
	<script src="libs/bootstrap/bootstrap.min.js"></script>
	<script src="libs/bootstrap-select/bootstrap-select.js"></script>
	<!-- bootstrap-select -->

	<script src="libs/owl.carousel/owl.carousel.min.js"></script>
	<script src="js/scripts.js"></script>

</body>
</html>
