<script lang="ts">
    export let description: string;
    export let value: string
</script>


<div>
    <p>{description}</p>
    <textarea class="textInput" bind:value={value} on:change></textarea>
</div>


<style>
    .textInput {
        vertical-align: top;
        text-align: start;
        min-height: 200px;
        width: 600px;
    }
</style>