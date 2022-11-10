<!-- [ SCRIPT ] -->
<script>

	// [ IMPORTS: components ]
	import Ico from "$components/Ico.svelte"

</script>


<!-- [ TEMPLATE: homepage ] -->
<svelte:head>
	<title>Главная</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<h1>ГЛАВНАЯ</h1>
<nav class = 'page-home'>
	<a href="/products"><Ico type="product" />Продукты</a>
	<a href="/applications"><Ico type="application" />Заявки</a>
	<a href="/statistics"><Ico type="statistics" />Отчеты</a>
</nav>