<!-- [ SCRIPT ] -->
<script>

	// [ IMPORTS: components ]
	import Ico from "$components/Ico.svelte"

</script>


<!-- [ TEMPLATE: poducts ] -->
<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<h1>ПРОДУКТЫ</h1>

<button class="CTA mb-20">+ создать продукт</button>

{#each Array(4) as product}
    <a href = '' class="product-card">
		Название продукта
		<div class="controls">
			<Ico type = 'edit' styles = 'ico-blue' />
			<Ico type = 'archive' styles = 'ico-yellow' />
		</div>
	</a>
{/each}
