<!-- [ SCRIPT ] -->
<script>

	// [ IMPORTS: components ]
	import Ico from "$components/Ico.svelte"

</script>


<!-- [ TEMPLATE: homepage ] -->
<svelte:head>
	<title>Результат заявки</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<h1>РЕЗУЛЬТАТ ЗАЯВКИ</h1>
<h2 class = 'congrats'>Поздравляем, вам одобрен кредит</h2>

<h4 class = 'mb-20 txt-dark'>Условия кредитования:</h4>
<div class="loan-info">
	<div class="loan-info-card">
		<h4 class="value">1 000 000 р.</h4>
		<p class = 'title'>Сумма кредита</p>
	</div>
	<div class="loan-info-card">
		<h4 class="value">1 000 000 р.</h4>
		<p class = 'title'>Сумма кредита</p>
	</div>
	<div class="loan-info-card">
		<h4 class="value">1 000 000 р.</h4>
		<p class = 'title'>Сумма кредита</p>
	</div>
</div>
<button class="CTA mt-50">принять условия</button>
<button class="CTA-red ml-20">отказаться</button>