<script lang="ts">
    export let text: string;
</script>


<div on:click>
    {text}

</div>


<style>
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 250px;
        height: 60px;
        background: #01dddd;
        cursor: pointer;
        margin: 5px;
        border: 2px solid black;
        border-radius: 10px;
    }

    div:hover {
        background: darkgray;
    }
</style>