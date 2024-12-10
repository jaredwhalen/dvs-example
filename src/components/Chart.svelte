<script>
	let { index, data } = $props();



</script>

<div class="chart">

    <div class="dot" style="left: {data[index]}px"></div>

</div>

<style>
	.chart {
		position: sticky;
		top: 4em;
        width: 100%;
        height: 50px;

	}

    .dot {
        width: 10px;
        height: 10px;
        background-color: red;
        border-radius: 50%;
        position: absolute;
        transition: left 500ms;
    }
</style>
