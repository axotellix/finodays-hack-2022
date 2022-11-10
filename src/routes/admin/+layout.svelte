<!-- [ SCRIPT ] -->
<script>
	// code ...
</script>


<!-- [ TEMPLATE ] -->
<div class="app">

	<!-- [ header ] -->
	<header>
		
		<!-- user info -->
		<div class = 'user-info'>
			<img src="/img/avatar.png" alt="avatar">
			<div class = 'break'>
				<p class = 'user-name'>Юрий Никулин</p>
				<p class = 'user-role'>модератор</p>
			</div>
		</div>

		<!-- button: logout -->
		<button class="CTA-red pad-y-10">выйти</button>

	</header>

	<!-- [ sidebar ] -->
	<aside>
		<h3 class="menu-title">МЕНЮ</h3>
		<nav>
			<a href="/admin" class = 'active'>Главная</a>
			<a href="/admin/products">Продукты</a>
			<a href="/admin/applications">Заявки</a>
			<a href="/admin/statistics">Отчеты</a>
		</nav>
	</aside>

	<!-- [ main ] -->
	<main>
		<slot />
	</main>

	<footer>
		<p>&copy; Bolognese 2022</p>
	</footer>
</div>
