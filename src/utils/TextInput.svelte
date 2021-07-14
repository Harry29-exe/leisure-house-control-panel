<script lang="ts">
    export let description: string;
    export let value: string
</script>


<div>
    <p>{description}</p>
    <input type="text" class="textInput" bind:value={value} on:change/>
</div>


<style>
    .textInput {
        vertical-align: top;
        text-align: start;
        width: 600px;
    }
</style>