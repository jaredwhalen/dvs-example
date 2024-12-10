<script>
	import Scrolly from "$components/helpers/Scrolly.svelte";
    import Chart from "./Chart.svelte";
	let value = $state();



	let data = [
		{text: 'hello', x: 2010},
		{text: 'my name is', x: 2011},
		{text: 'jared', x: 2012},
	]

</script>

<section id="scrolly">
	<Chart index={value} {data}/>

	<div class="spacer"></div>
	<Scrolly bind:value>
		{#each data as slide, i}
			{@const active = value === i}
			<div class="step" class:active>
				<p>{slide.text}</p>
			</div>
		{/each}
	</Scrolly>
	<div class="spacer"></div>
</section>

<style>
	.spacer {
		height: 75vh;
	}

	.step {
		height: 80vh;
		background: var(--color-gray-100);
		text-align: center;
	}

	.step p {
		padding: 1rem;
	}
</style>
