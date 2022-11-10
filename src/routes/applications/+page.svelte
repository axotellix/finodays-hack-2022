<!-- [ SCRIPT ] -->
<script>

	// [ IMPORTS: components ]
	import Ico from "$components/Ico.svelte"

</script>


<!-- [ TEMPLATE: applications page ] -->
<svelte:head>
	<title>Заявки</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<h1>ЗАЯВКИ</h1>

<form action="" class = 'mb-20'>
    <div class="select short">
        <select name="applications-filter" id="applications-filter">
            <option value="all" selected>Все заявки</option>
            <option value="1">Кредит для молодежи</option>
            <option value="2">Кредит для женщин</option>
            <option value="3">Кредит для детей</option>
        </select>
    </div>
</form>

{#each Array(4) as product}
    <a href = '/applications/application/1' class="application-card">
        <div class="application-info">
            <p class = 'date'>09.11.2022</p>
            <div class="break">
                <p class = 'title'>Название продукта</p>
                <p class = 'client'>от: ИП Алексеич</p>
            </div>
        </div>
        <div class="badge red">отклонено</div>
	</a>
{/each}
