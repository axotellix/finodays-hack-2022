<!-- [ SCRIPT ] -->
<script>
	export let type 
    export let styles
</script>


<!-- [ TEMPLATE: Ico ] -->
{#if type == 'info'}
    <svg class="ico { styles }">
        <use xlink:href="/img/sprites.svg#ico-info"></use>
    </svg>
{/if}

{#if type == 'edit'}
    <svg class="ico { styles }">
        <use xlink:href="/img/sprites.svg#ico-edit"></use>
    </svg>
{/if}

{#if type == 'archive'}
    <svg class="ico { styles }">
        <use xlink:href="/img/sprites.svg#ico-archive"></use>
    </svg>
{/if}

{#if type == 'product'}
    <svg class="ico { styles }">
        <use xlink:href="/img/sprites.svg#ico-product"></use>
    </svg>
{/if}

{#if type == 'application'}
    <svg class="ico { styles }">
        <use xlink:href="/img/sprites.svg#ico-application"></use>
    </svg>
{/if}

{#if type == 'statistics'}
    <svg class="ico { styles }">
        <use xlink:href="/img/sprites.svg#ico-statistics"></use>
    </svg>
{/if}