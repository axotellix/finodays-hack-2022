<!-- [ SCRIPT ] -->
<script>

	// [ IMPORTS: components ]
	import Ico from "$components/Ico.svelte"
	import Radio from "$components/Radio.svelte"

</script>


<!-- [ TEMPLATE: poducts page ] -->
<svelte:head>
	<title>Создание продукта</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<h1>СОЗДАНИЕ ПРОДУКТА</h1>

<form action="">
	<!-- product name -->
	<h2>О ПРОДУКТЕ</h2>
	<label for="product-name">Название продукта</label>
	<input type="text" name = 'product-name' placeholder = 'Кредит для инвестиционных целей ...'>

	<!-- criterias -->
	<h2>
		СТОП-ФАКТОРЫ
		<p class = 'subtitle'>(для расчета рейтинга)</p>
	</h2>
	<div class = 'criterias'>
		{#each Array(2) as i }
			<div class="criteria-card">
				<p class = 'criteria-name'>Доля заемных средств в пассивах организации</p>
				<button class = 'CTA-red small w-100'>удалить</button>
			</div>
		{/each}
		<div class="criteria-card-create">
			<p class = 'icon-add'>+</p>
			<p>добавить критерий</p>
		</div>
	</div>

	<!-- terms -->
	<h2>
		ИЗМЕНЕНИЕ УСЛОВИЙ
		<p class = 'subtitle'>(определение констант)</p>
	</h2>

	<!-- term card -->
	<div class="term-card">
		<h5 class = 'term-card-title mb-30'>Процентная ставка</h5>
		<form action="">
			<label for="">Минимальный рейтинг</label>
			<div class="radio-group mb-30">

				<Radio checked={ true }>Рейтинг A</Radio>
				<Radio>Рейтинг B</Radio>
				<Radio>Рейтинг C</Radio>
				<Radio>Рейтинг D</Radio>

			</div>
			<label for="loan-rate">Минимальная ставка по кредиту, %</label>
			<input type="text" name = 'loan-rate' placeholder = '5 ...'>
		</form>
	</div>

	<!-- term card -->
	<div class="term-card">
		<h5 class = 'term-card-title mb-30'>Срок кредита</h5>
		<form action="" class = 'loan-period'>
			<div>
				<label for="min-loan-period">Минимальный, мес.</label>
				<input type="text" name = 'min-loan-period' placeholder = '6 месяцев ...'>
			</div>
			<div>
				<label for="max-loan-period">Максимальный, мес.</label>
				<input type="text" name = 'max-loan-period' placeholder = '36 месяцев ...'>
			</div>
		</form>
	</div>

	<!-- term card -->
	<div class="term-card">
		<h5 class = 'term-card-title mb-30'>Лимит</h5>
		<form action="" class = 'loan-period'>
			<div>
				<label for="min-loan-period">Минимальный, мес.</label>
				<input type="text" name = 'min-loan-period' placeholder = '6 месяцев ...'>
			</div>
			<div>
				<label for="max-loan-period">Максимальный, мес.</label>
				<input type="text" name = 'max-loan-period' placeholder = '36 месяцев ...'>
			</div>
		</form>
	</div>
</form>

