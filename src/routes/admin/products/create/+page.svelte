<!-- [ SCRIPT ] -->
<script>

	// [ IMPORTS: lib ]
	import { onMount } from 'svelte';

	// [ IMPORTS: components ]
	import Ico from "$components/Ico.svelte"
	import Radio from "$components/Radio.svelte"

	// [ PRESETS ]
	let new_form_id_max = 1
	let criteria_modal_open = false


	// [ FUNCTIONS ]
	//@ open > add new field form 
	const openForm = () => {
		// get > forms
		const add_btn  = document.querySelector('#add-field-btn')
		const add_form = document.querySelector('#add-field-form')
		const add_done = document.querySelector('#add-field-form-done')

		// set > visibility
		add_btn.classList.add('hidden')
		add_form.classList.remove('hidden')
		add_done.classList.remove('hidden')
	}

	//@ open > Add Criteria Modal
	const addCriteriaModal = () => {
		criteria_modal_open = true
	} 
	//@ close > Add Criteria Modal
	const closeModal = () => {
		criteria_modal_open = false
	} 

	//@ close > add new field form 
	const closeForm = () => {
		// check > empty field
		let title = document.querySelector('[name="new-field"]').value
		if( title === '' ) return

		// get > forms
		const add_btn  = document.querySelector('#add-field-btn')
		const add_form = document.querySelector('#add-field-form')
		const add_done = document.querySelector('#add-field-form-done')

		// set > visibility
		add_btn.classList.remove('hidden')
		add_form.classList.add('hidden')
		add_done.classList.add('hidden')

		// add > new field
		let form = document.querySelector('.limit')
		let field = document.createElement('div')	//: form-row
		field.setAttribute('class', 'form-row')
		field.innerHTML = document.querySelector('.new-field-template').innerHTML

		// collect > form fields
		const new_field_name_label = field.querySelector('.new-field-name-label')
		const new_field_name_value = field.querySelector('.new-field-name-value')
		const new_field_operator_label = field.querySelector('.new-field-operator-label')
		const new_field_operator_value = field.querySelector('.new-field-operator-value')
		const new_field_number_label = field.querySelector('.new-field-number-label')
		const new_field_number_value = field.querySelector('.new-field-number-value')

		// set > fields
		new_field_name_label.setAttribute('for', `new-field-${new_form_id_max}-name`)
		new_field_name_value.setAttribute('name', `new-field-${new_form_id_max}-name`)
		new_field_name_value.value = title

		new_field_operator_label.setAttribute('for', `new-field-${new_form_id_max}-operator`)
		new_field_operator_value.setAttribute('name', `new-field-${new_form_id_max}-operator`)

		new_field_number_label.setAttribute('for', `new-field-${new_form_id_max}-number`)
		new_field_number_value.setAttribute('name', `new-field-${new_form_id_max}-number`)



		// append > new form row
		form.insertBefore(field, document.querySelector('.add-field-form'))
		field.querySelector('.remove-btn').addEventListener('click', removeFormRow)

		// set > new form row ID
		new_form_id_max++
	}

	//@ remove > form row
	function removeFormRow( e ) {
		e.preventDefault()
		e.target.parentNode.remove()
	}


	// [ MAIN ]
	onMount(() => {
		document.querySelectorAll('.remove-btn').forEach(( btn ) => {
			btn.addEventListener('click', ( e ) => {
				e.preventDefault()
				e.target.parentNode.remove()
			})
		})
 	})

</script>


<!-- [ TEMPLATE: poducts page ] -->
<svelte:head>
	<title>Создание продукта</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<h1>СОЗДАНИЕ ПРОДУКТА</h1>

<form action="">
	<!-- template selection -->
	<h2>
		СОЗДАТЬ ИЗ ШАБЛОНА
		<p class = 'subtitle'>выберите готовый шаблон продукта - данные заполнятся автоматически</p>
	</h2>
	<div class="select short new-field-operator-value">
		<select name="applications-filter" id="applications-filter">
			<option value="0" selected>настроить вручную</option>
			<option value="1">кредит для молодежи</option>
			<option value="2">кредит для детей</option>
		</select>
	</div>


	<!-- product name -->
	<h2>О ПРОДУКТЕ</h2>
	<label for="product-name">Название продукта</label>
	<input type="text" name = 'product-name' placeholder = 'Кредит для инвестиционных целей ...'>

	<!-- criterias -->
	<!-- MODAL -->
	{#if criteria_modal_open}
	<div class="modal-backdrop" on:click|self={ closeModal }>
		<div class="modal">
			<form action="">
				<h2>Создание нового критерия</h2>
				<div class = 'form-row new-field-template'>
					<!-- field -->
					<div>
						<label class = 'new-criteria-name-label' for="income">Название критерия</label>
						<input type="text" name = 'new-criteria-name-value' class = 'w-100' placeholder = 'Доля заемных средств в пассивах организации ...'>
					</div>
					<!-- field -->
					<div>
						<label class = 'new-criteria-operator-label' for="income">Оператор</label>
						<div class="select short new-criteria-operator-value">
							<select name="applications-filter" id="applications-filter">
								<option value="0" selected>*</option>
								<option value="1">&divide;</option>
								<option value="2">+</option>
								<option value="3">-</option>
								<option value="4">&lt</option>
								<option value="5">&gt</option>
								<option value="6">=</option>
							</select>
						</div>
					</div>
					<!-- field -->
					<div>
						<label class = 'new-criteria-number-label' for="income">Число</label>
						<input class = 'new-criteria-number-value w-100'  type="text" name = 'income' placeholder = '5 ...'>
					</div>

					<div class = 'save-btn'>
						<button class="CTA">сохранить</button>
					</div>
			</form>
		</div>
	</div>
	{/if}
	<h2>
		СТОП-ФАКТОРЫ
		<p class = 'subtitle'>(для расчета рейтинга)</p>
	</h2>
	<div class = 'criterias'>
		{#each Array(2) as i }
			<div class="criteria-card">
				<p class = 'criteria-name'>Доля заемных средств в пассивах организации</p>
				<a class = 'CTA-red small w-100'>удалить</a>
			</div>
		{/each}
		<div class="criteria-card-create" on:click={ addCriteriaModal }>
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
		<form action="" class = 'limit'>

			<!-- form row: client data -->
			<div class = 'form-row'>
				<!-- field -->
				<div class = 'w-100'>
					<label for="income">Заявка клиента</label>
					<input type="text" name = 'income' class = 'inactive' value = 'Данные клиента' disabled>
				</div>
				<!-- button: remove -->
				<button class="CTA-disabled small remove-btn">не учитывать</button>
			</div>

			<!-- form row: max limit -->
			<div class = 'form-row'>
				<!-- field -->
				<div class = 'w-100'>
					<label for="income">Максимальный лимит, р.</label>
					<input type="text" name = 'income' class = 'w-100' placeholder = '30 000 000'>
				</div>
				<!-- button: remove -->
				<a class="CTA-red small remove-btn">не учитывать</a>
			</div>

			<!-- form row: income -->
			<div class = 'form-row new-field-template'>
				<!-- field -->
				<div>
					<label class = 'new-field-name-label' for="income">Критерий</label>
					<input type="text" name = 'income' value = 'Выручка' class = 'inactive new-field-name-value' disabled>
				</div>
				<!-- field -->
				<div>
					<label class = 'new-field-operator-label' for="income">Оператор</label>
					<div class="select short new-field-operator-value">
						<select name="applications-filter" id="applications-filter">
							<option value="0" selected>*</option>
							<option value="1">&divide;</option>
							<option value="2">+</option>
							<option value="3">-</option>
							<option value="4">&lt</option>
							<option value="5">&gt</option>
							<option value="6">=</option>
						</select>
					</div>
				</div>
				<!-- field -->
				<div>
					<label class = 'new-field-number-label' for="income">Число</label>
					<input class = 'new-field-number-value' type="text" name = 'income' placeholder = '5 ...'>
				</div>
				<!-- button: remove -->
				<a class="CTA-red small remove-btn">не учитывать</a>
			</div>

			<!-- form row: add field -->
			<div class = 'form-row add-field-form'>
				<div id = 'add-field-btn'>
					<label for="income">Дополнительное поле</label>
					<button class="CTA" on:click|preventDefault={ openForm }>+ добавить поле</button>
				</div>
				<div class = 'hidden w-100' id = 'add-field-form'>
					<label for="income">Введите название нового показателя</label>
					<input type="text" name = 'new-field' placeholder = 'Выручка ...'>
				</div>
				<button on:click|preventDefault={ closeForm } class="CTA small mt-20 hidden" id = 'add-field-form-done'>готово</button>
			</div>
				
		</form>
	</div>
</form>

