<!-- [ SCRIPT ] -->
<script>

	// [ IMPORTS: components ]
	import Ico from "$components/Ico.svelte"

</script>


<!-- [ TEMPLATE: applications page ] -->
<svelte:head>
	<title>Просмотр заявки</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<h1>ПРОСМОТР ЗАЯВКИ</h1>

<div class="application-card-fullscreen">
    <div class="application-info">
        <p class = 'date'>09.11.2022</p>
        <p class = 'title'>Название продукта</p>
        <p class = 'client'>от: ИП Алексеич</p>
    </div>
    <h3 class = 'mb-10'>Статус заявки:</h3>
    <div class="badge red mb-30">отклонено</div>
    <h4>причина:</h4>
    <p class = 'reject-basis txt-dark'>
        Нет денек у человечка ;(
    </p>
</div>
