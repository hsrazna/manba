<div class="az-add-product">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<h1 class="az-page">Добавление объявления</h1>
			</div>
			<div class="col-md-12">
				<div id="az-add-tabs">
					<div class="az-add-tab-wrap">
						<div class="az-add-tab-col">
							<h2 class="az-add-tab-pre">Добавить:</h2>
						</div>
						<div class="az-add-tab-col">
							<ul class="az-add-tabs">
								<li><a href="#tabs-1">товар</a></li>
								<li><a href="#tabs-2">услугу</a></li>
								<li><a href="#tabs-3">задание</a></li>
							</ul>
						</div>
					</div>
					<div class="az-add-tab-info">
						<div class="az-row">
							<div class="az-add-tab1">
								<p>Твой тарифный план Простой (максимум 5 объявлений).<br>
								Чтобы загрузить больше товаров, просим перейти на <a href="#">другой тарифный план</a></p>
								<p>Чтобы добавить несколько артикулов сразу, заполните таблицу, как в примере и загрузить её на сайт.</p>
							</div>
							<div class="az-add-tab2">
								<a href="#" class="ah-person-itemlink">Скачать пример</a><a href="#" class="ah-person-itemlink">Загрузить таблицу</a>
							</div>
						</div>
					</div>
					<div class="az-add-tabs-content">
						<div id="tabs-1">
							<div class="az-product-tab">
								<span class="az-product-tab-head">Для добавления одного товара заполни поля:</span>
								<form action="/">
									<h3>1 шаг из 4.  Описание товара</h3>
									<span class="az-product-notice">* — обязательные поля для заполнения</span>
									<div class="az-product-item">
										<input type="text" placeholder="Название товара*" maxlength="80" class="az-prod-item-count">
										<span class="az-prod-item-notice">Ввели <span class="az-prod-item-counted">0</span> из 80 символов</span>
									</div>
									<div class="az-product-item style2">
										<input type="text" placeholder="Артикул">
									</div>
									<div class="az-product-item">
										<div class="az-product-item style3">
											<div class="az-order-select">
												<select class="ah-catselect">
												  <option>Товары</option>
												  <option>Товары1</option>
												  <option>Товары2</option>
												</select>
											</div>
										</div>
										<div class="az-product-item style3">
											<div class="az-order-select">
												<select class="ah-catselect">
												  <option>Подкатегория*</option>
												  <option>Подкатегория*1</option>
												  <option>Подкатегория*2</option>
												</select>
											</div>
										</div>
									</div>
									<div class="az-product-item style2">
										<div class="az-order-select">
											<select class="ah-catselect">
											  <option>Производитель*</option>
											  <option>Производитель*1</option>
											  <option>Производитель*2</option>
											</select>
										</div>
									</div>
									<div class="az-product-item style2">
										<div class="az-order-select">
											<select class="ah-catselect">
											  <option>Состояние*</option>
											  <option>Состояние*1</option>
											  <option>Состояние*2</option>
											</select>
										</div>
									</div>
									<div class="az-product-item">
										<textarea name="" id="" cols="30" rows="10" placeholder="Описание товара"></textarea>
									</div>
									<h4>Фото товара</h4>
									<div class="az-product-item" id="az-galary">
										<a href="#" class="az-add-prod-photo" id="chooseGalleryImage">Добавить фотографию товара</a>
									</div>
									<h4>Товар находится</h4>
									<div class="az-product-item style2">
										<div class="az-order-select">
											<select class="ah-catselect">
											  <option>Страна</option>
											  <option>Страна1</option>
											  <option>Страна2</option>
											</select>
										</div>
									</div>
									<div class="az-product-item style2">
										<div class="az-order-select">
											<select class="ah-catselect">
											  <option>Область</option>
											  <option>Область1</option>
											  <option>Область2</option>
											</select>
										</div>
									</div>
									<div class="az-product-item style2">
										<div class="az-order-select">
											<select class="ah-catselect">
											  <option>Город</option>
											  <option>Город1</option>
											  <option>Город2</option>
											</select>
										</div>
									</div>
									<div class="az-product-item style4">
										<input type="submit" value="Далее">
									</div>
								</form>
								<form action="/">
									<h3>2 шаг из 4.  Формат продажи</h3>
									<div class="az-product-item">
										<input type="radio" name="radio" id="radio801">
										<label for="radio801">Аукцион</label>
										<div class="az-product-item-inner">
											<div class="az-pin-item">
												<label>Начальная стоимость</label>
												<input type="text" value="50">
												<span>TJS</span>
											</div>
											<div class="az-pin-item">
												<label>Продать сразу за</label>
												<input type="text" value="510">
												<span>TJS</span>
											</div>
											<div class="az-pin-item">
												<label>Сроки аукциона</label>
												<input type="text" value="20 март 2017" class="datepicker" data-date-format="dd MM yyyy">
											</div>
										</div>
									</div>
									<div class="az-product-item">
										<input type="radio" name="radio" id="radio802">
										<label for="radio802">Фиксированная цена</label>
										<div class="az-product-item-inner">
											<div class="az-pin-item">
												<input type="text" value="50">
												<span>TJS</span>
											</div>
										</div>
									</div>
									<h4>Дополнительные варианты продажи:</h4>
									<div class="az-product-item checkbox">
										<input type="checkbox" name="checkbox" id="check101">
										<label for="check101">Возможность покупателей торговаться</label>
									</div>
									<div class="az-product-item checkbox">
										<input type="checkbox" name="checkbox" id="check102">
										<label for="check102">В кредит</label>
									</div>
									<div class="az-product-item-inner style2">
										<div class="az-product-item checkbox">
											<textarea name="" id="" cols="30" rows="10" placeholder="Условия кредитирования"></textarea>
										</div>
									</div>
									<div class="az-product-item checkbox">
										<input type="checkbox" name="checkbox" id="check103">
										<label for="check103">В рассрочку</label>
									</div>
									<div class="az-product-item checkbox">
										<input type="checkbox" name="checkbox" id="check104">
										<label for="check104">За бонусы</label>
									</div>
									<div class="az-product-item-inner style3">
										<div class="az-product-item">
											<input type="radio" name="radio3" id="radio901">
											<label for="radio901">2,5%</label>
										</div>
										<div class="az-product-item">
											<input type="radio" name="radio3" id="radio902">
											<label for="radio902">5%</label>
										</div>
										<div class="az-product-item">
											<input type="radio" name="radio3" id="radio903">
											<label for="radio903">7,5%</label>
										</div>
									</div>
									<div class="az-product-item style4">
										<input type="submit" value="Далее">
									</div>
								</form>
								<form action="/">
									<h3>3 шаг из 4.  Условия доставки</h3>
									<div class="az-product-item">
										<input type="checkbox" name="checkbox" id="check105">
										<label for="check105">Самовывоз</label>
										<div class="az-product-item-inner">
											<div class="az-pin-item style2">
												<label for="input-text1">Адрес</label>
												<input type="text" id="input-text1" value="ул. М.Танбури 20, Худжанд ">
											</div>
											<div class="az-pin-item style2">
												<label for="input-text1">или отметить на карте</label>
												<div id="map1" class="map"></div>
											</div>
										</div>
									</div>
									<div class="az-product-item checkbox">
										<input type="checkbox" name="checkbox" id="check106">
										<label for="check106">Доставка, организованная продавцом</label>
									</div>
									<div class="az-product-item-inner style2">
										<div class="az-product-item checkbox">
											<textarea name="" id="" cols="30" rows="10" placeholder="Условия доставки и тарифы"></textarea>
										</div>
									</div>
									<div class="az-product-item checkbox">
										<input type="checkbox" name="checkbox" id="check107">
										<label for="check107">Перевозчики Манба</label>
									</div>
									<div class="az-product-item-inner style2">
										<div class="az-product-item checkbox">
											<input type="checkbox" name="checkbox" id="check108">
											<label for="check108">физлица</label>
										</div>
										<div class="az-product-item checkbox">
											<input type="checkbox" name="checkbox" id="check109">
											<label for="check109">бизнес</label>
										</div>
									</div>
									<div class="az-product-item style4">
										<input type="submit" value="Далее">
									</div>
								</form>
								<form action="/">
									<h3>4 шаг из 4.  Способа оплаты</h3>
									<div class="az-product-item checkbox">
										<input type="checkbox" name="checkbox" id="check110">
										<label for="check110">Наличный</label>
									</div>
									<div class="az-product-item checkbox">
										<input type="checkbox" name="checkbox" id="check111">
										<label for="check111">Безналичный</label>
									</div>
									<div class="az-product-item checkbox">
										<input type="checkbox" name="checkbox" id="check112">
										<label for="check112">Карты</label>
									</div>
								</form>
							</div>
						</div>
						<div id="tabs-2">
						2
						</div>
						<div id="tabs-3">
						3
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<script src="//api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
<script type="text/javascript">
	ymaps.ready(init);
	var zMap,
		zPlacemark;

	function init(){
		zMap = new ymaps.Map("map1", {
			center: [55.769432, 37.646961],
			zoom: 16
		});

		zMap.behaviors.disable('scrollZoom'); 

		zPlacemark = new ymaps.Placemark([55.769432, 37.646961], {}, {
			iconLayout: 'default#image',
			iconImageHref: '/img/balun.png',
			iconImageSize: [32, 53],
			iconImageOffset: [-20, -52]
		});
		zMap.geoObjects.add(zPlacemark);
	}

</script>