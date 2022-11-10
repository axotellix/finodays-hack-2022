<!-- [ SCRIPT ] -->
<script>

	// [ IMPORTS: lib ]
	import { onMount } from 'svelte';

	// [ IMPORTS: components ]
	import Ico from "$components/Ico.svelte"
	import Radio from "$components/Radio.svelte"

	// [ PRESETS ]
	// product data
	let product = {
		name: '',
		covenants: [
			{ name: 'Чистая прибыль', operator: '>', value: '0' },
			{ name: 'Доля заемного капитала', operator: '<', value: '60' },
			{ name: 'Статус банкротство', operator: '=', value: 'нет' },
			{ name: 'Количество сотрудников', operator: '>', value: '50' },
		],
		conditions: {
			percent: {
				rating: 'A',
				value: ''
			},
			period: {
				min: '',
				max: ''
			},
			limit: {
				max: '',
				criterias: [
					{ name: 'выручка', operator: '', value: '' }
				]
			}
		}
	}
	let new_form_id_max = 1
	let criteria_modal_open = false
	let criteria_name = ''
	let criteria_operator = '0'
	let criteria_value = ''


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
	//@ create > criteria 
	const createCriteria = () => {
		let criteria = document.createElement("div")
		criteria.setAttribute("class", 'criteria-card')
		criteria.innerHTML = document.querySelector('.criteria-card')?.innerHTML

		criteria.querySelector('.criteria-name').textContent = criteria_name

		document.querySelector('.criterias').insertBefore(criteria, document.querySelector('.criteria-card-create'))
		closeModal()
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
		const new_field_operator_value = field.querySelector('.new-field-operator-value')?.querySelector('select')
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

		document.querySelector('#product-form').addEventListener('submit', function( e ) {
			
			e.preventDefault();
			let data = new FormData(e.target)
			
			// fill > data
			product.name = data.get('product-name')
			product.conditions.percent.rating = data.get('rating')
			product.conditions.percent.value = data.get('loan-rate')
			product.conditions.period.min = data.get('min-loan-period')
			product.conditions.period.max = data.get('max-loan-period')
			product.conditions.limit.max = data.get('limit-max')
			product.conditions.limit.criterias.operator = data.get('applications-filter')
			product.conditions.limit.criterias.value = data.get('criteria-value')

			// console.log(data.get(`new-field-1-name`));
			for( let i = 1; i <= new_form_id_max; i++ ) {
				let row = { name: data.get(`new-field-${i}-name`), operator: data.get(`new-field-${i}-operator`), value: data.get(`new-field-${i}-value`) }
				console.log(data.get(`new-field-${i}-name`));
				product.conditions.limit.criterias.push(row)
			}

			let form_data = new FormData()
			let send = { 
				name: product.name,
				minDept: product.conditions.percent.value,
				minDivorce: product.conditions.percent.rating,
				maxPeriod: product.conditions.period.max,
				metrics: {
					additionalProp1: '* 5',
				}
			}
			form_data.add('data', JSON.stringify(send))

			
			// console.log(product);
			// console.log(data.get('new-field-1-number'));

			fetch('http://localhost:7110/api/strategy', {
				method: 'POST',
				body: form_data
			}).then(() => {
				console.log('uploaded!')
			}).catch(() => {
				console.log('failed to upload')
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

<form method = 'POST' id = 'product-form'>
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
						<label class = 'new-criteria-name-label' for="new-criteria-name">Название критерия</label>
						<input type="text" bind:value={criteria_name} name = 'new-criteria-name' class = 'w-100' placeholder = 'Доля заемных средств в пассивах организации ...'>
					</div>
					<!-- field -->
					<div>
						<label class = 'new-criteria-operator-label' for="new-riteria-opeartor">Оператор</label>
						<div class="select short new-criteria-operator-value">
							<select name="new-criteria-opeartor" bind:value={criteria_operator} id="applications-filter">
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
						<label class = 'new-criteria-number-label' for="new-criteria-value">Число</label>
						<input class = 'new-criteria-number-value w-100' bind:value={criteria_value} type="text" name = 'new-criteria-value' placeholder = '5 ...'>
					</div>

					<div class = 'save-btn'>
						<button class="CTA" on:click|preventDefault={ createCriteria }>сохранить</button>
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
		<div class="criteria-card">
			<p class = 'criteria-name'>Чистая прибыль </p>
			<a class = 'CTA-red small w-100'>удалить</a>
		</div>
		<div class="criteria-card">
			<p class = 'criteria-name'>Доля заемного капитала</p>
			<a class = 'CTA-red small w-100'>удалить</a>
		</div>
		<div class="criteria-card">
			<p class = 'criteria-name'>Статус банкротство</p>
			<a class = 'CTA-red small w-100'>удалить</a>
		</div>
		<div class="criteria-card">
			<p class = 'criteria-name'>Количество сотрудников </p>
			<a class = 'CTA-red small w-100'>удалить</a>
		</div>
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
			<label for="">Минимальный рейтинг</label>
			<div class="radio-group mb-30">

				<Radio checked={ true } name='rating' value='A'>Рейтинг A</Radio>
				<Radio name='rating' value='B'>Рейтинг B</Radio>
				<Radio name='rating' value='C'>Рейтинг C</Radio>
				<Radio name='rating' value='D'>Рейтинг D</Radio>

			</div>
			<label for="loan-rate">Минимальная ставка по кредиту, %</label>
			<input type="text" name = 'loan-rate' placeholder = '5 ...'>
	</div>

	<!-- term card -->
	<div class="term-card">
		<h5 class = 'term-card-title mb-30'>Срок кредита</h5>
		<div class = 'loan-period'>
			<div>
				<label for="min-loan-period">Минимальный, мес.</label>
				<input type="text" name = 'min-loan-period' placeholder = '6 месяцев ...'>
			</div>
			<div>
				<label for="max-loan-period">Максимальный, мес.</label>
				<input type="text" name = 'max-loan-period' placeholder = '36 месяцев ...'>
			</div>
		</div>
	</div>

	<!-- term card -->
	<div class="term-card">
		<h5 class = 'term-card-title mb-30'>Лимит</h5>
		<div class = 'limit'>

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
					<input type="text" name = 'limit-max' class = 'w-100' placeholder = '30 000 000'>
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
					<input class = 'new-field-number-value' type="text" name = 'criteria-value' placeholder = '5 ...'>
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
				
		</div>
	</div>

	<input type="submit" class="CTA mt-20" value = 'отправить'>
</form>


