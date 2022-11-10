<!-- [ SCRIPT ] -->
<script>

	// [ IMPORTS: components ]
	import Ico from "$components/Ico.svelte"

</script>


<!-- [ TEMPLATE: homepage ] -->
<svelte:head>
	<title>Подача заявки</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<h1>ПОДАЧА ЗАЯВКИ</h1>
<h2 class = 'txt-dark'>Заполните форму</h2>
<form action="" class = 'client-form'>
	<div class="row">
		<label for="inn">ИНН</label>
		<input type="text" name = 'inn' placeholder = '000000000000 ...'>
	</div>

	<div class="row">
		<label for="inn">Тип кредита</label>
		<div class="select short new-field-operator-value">
			<select name="applications-filter" id="applications-filter">
				<option value="0" selected>кредит для молодежи</option>
				<option value="1">кредит для женщин</option>
				<option value="2">кредит для детей</option>
			</select>
		</div>
	</div>

	<div class="row">
		<label for="inn">Желаемая сумма кредита, руб.</label>
		<input type="text" name = 'inn' placeholder = '1 000 000 ...'>
	</div>

	<div class="row">
		<label for="inn">Желаемая срок кредита, мес.</label>
		<input type="text" name = 'inn' placeholder = '36 ...'>
	</div>

	<a href='/client/result' class = 'CTA'>отправить</a>
</form>