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
	

	<div class="az-approvement clearfix">
		<div class="az-approvement-wrap">
			<h2>Подтверждение аккаунта</h2>
			<p>Для подтверждения аккаунта тебе будет отправлена смс с кодом.</p>
			<p>Введи свой номер мобильного телефона:</p>
			<div class="az-approve-phone">
				<div class="az-approve-phone-left">
					<div class="az-order-select">
						<select class="ah-catselect">
						  <option>+992</option>
						  <option>+991</option>
						  <option>+990</option>
						</select>
					</div>
				</div>
				<div class="az-approve-phone-right">
					<input type="text" placeholder="99 999 99 99">
				</div>
			</div>
			<input type="submit" value="Далее">
		</div>
	</div>

	<div class="az-approvement clearfix">
		<div class="az-approvement-wrap">
			<h2>Ты уверен, что хочешь прервать подтверждение аккаунта?</h2>
			<p>Ты не сможешь создавать и редактировать свои объявления :(</p>
			<p>Рекомендую тебе пройти подтверждение, это займет меньше 1 минуты.</p>
			<input type="submit" value="Продолжить подтверждение">
			<div><a href="#">Прервать подтверждение</a></div>
		</div>
	</div>

	<div class="az-approvement style2 clearfix">
		<div class="az-approvement-wrap">
			<h2>Подтверждение аккаунта</h2>
			<p>Введите код из смс, отправленой на номер<br> <strong>+992 9999 9 99 99:</strong></p>
			<div><a href="#">Изменить номер телефона</a></div>
			<div class="az-approve-cod">
				<input type="text" maxlength="4">
			</div>
			<p>Код должен прийти в течении 1 минуты.</p>
			<input type="submit" value="Далее">
		</div>
	</div>

	<div class="az-approvement style3 clearfix">
		<div class="az-approvement-wrap">
			<h2>Ваш аккаунт подтвержден!</h2>
			<p>Спасибо, что доверяете нам!</p>
		</div>
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
