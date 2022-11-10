<!-- [ SCRIPT ] -->
<script>

	// [ IMPORTS: components ]
	import Ico from "$components/Ico.svelte"

</script>


<!-- [ TEMPLATE: poducts page ] -->
<svelte:head>
	<title>Продукты</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<h1>ПРОДУКТЫ</h1>

<a href = '/products/create' class="CTA mb-20">+ создать продукт</a>

{#each Array(4) as product}
    <a href = '' class="product-card">
		Название продукта
		<div class="controls">
			<a href = '/products/edit/1'><Ico type = 'edit' styles = 'ico-blue' /></a>
			<Ico type = 'archive' styles = 'ico-yellow' />
		</div>
	</a>
{/each}
