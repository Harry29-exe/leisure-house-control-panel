<script lang="ts">
    export let color: string = '#000';
</script>


<div style={"border-color: " + color}></div>

<style>
    div {
        width: 90%;
        height: 0;
        border-top: 4px solid;
    }
</style>