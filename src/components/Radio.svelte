<!-- [ SCRIPT ] -->
<script>

    import { onMount } from 'svelte';
    
	export let checked = false
	export let name = false
	export let value = false

    // [ FUNCTIONS ]
    const setChecked = ( e ) => {
        let parent = e.target.parentNode
        if( parent.getAttribute("class").indexOf('radio-group') === -1 ) parent = parent.parentNode
        let radio = e.target.querySelector('input[type=radio]')
        if( e.target.getAttribute("class").indexOf('radio-btn') === -1 ) radio = e.target.parentNode.querySelector('input[type=radio]')

        parent.querySelectorAll('input[type=radio]').forEach(( radio ) => {
            radio.removeAttribute('checked')
            radio.parentNode.classList.remove('radio-checked')
        })
        radio.setAttribute('checked', '')
        radio.parentNode.classList.add('radio-checked')
    }

    onMount(() => {
		document.querySelector('.radio-checked').querySelector('input[type=radio]').setAttribute('checked', '')
 	})

</script>


<!-- [ COMPONENT: Radio Button ] -->
<div class="radio-btn" class:radio-checked={ checked } on:click|stopPropagation={ setChecked }>
    <input type="radio" {name} {value} />
    <div class = 'radio-state'></div>
    <p class = 'title'><slot></slot></p>
</div>