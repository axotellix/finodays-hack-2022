<!-- [ SCRIPT ] -->
<script>
	import { page } from '$app/stores'
	$: route = $page.route.id
</script>


<!-- [ TEMPLATE ] -->
<div class="app">

	<!-- [ header ] -->
	<header>
		
		<!-- user info -->
		<div class = 'user-info'>
			<img src="/img/avatar-client.jpg" alt="avatar">
			<div class = 'break'>
				<p class = 'user-name'>Василий Ливанов</p>
				<p class = 'user-role'>клиент</p>
			</div>
		</div>

		<!-- button: logout -->
		<a href = '/admin' class="CTA-red pad-y-10">выйти</a>

	</header>

	<!-- [ sidebar ] -->
	<aside>
		<h3 class="menu-title">МЕНЮ</h3>
		<nav>
			<a href="/admin" class:active={ route === '/client' }>Главная</a>
			<a href="/admin/products" class:active={ route === '/client/products' }>Продукты</a>
			<a href="/admin/applications" class:active={ route === '/client/applications' }>Заявки</a>
			<a href="/admin/statistics" class:active={ route === '/client/statistics' }>Отчеты</a>
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
