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
			<img src="/img/avatar.png" alt="avatar">
			<div class = 'break'>
				<p class = 'user-name'>Юрий Никулин</p>
				<p class = 'user-role'>модератор</p>
			</div>
		</div>

		<!-- button: logout -->
		<a href = '/client' class="CTA-red pad-y-10">выйти</a>

	</header>

	<!-- [ sidebar ] -->
	<aside>
		<h3 class="menu-title">МЕНЮ</h3>
		<nav>
			<a href="/admin" class:active={ route === '/admin' }>Главная</a>
			<a href="/admin/products" class:active={ route.includes('/admin/products') }>Продукты</a>
			<a href="/admin/applications" class:active={ route.includes('/admin/applications') }>Заявки</a>
			<a href="/admin/statistics" class:active={ route.includes('/admin/statistics') }>Отчеты</a>
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
