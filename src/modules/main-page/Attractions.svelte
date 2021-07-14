<script lang="ts">
    import type {AttractionModel} from "./AttractionModel.ts";
    import {download} from "../../utils/Download";
    import Button from "../../utils/Button.svelte";
    import TextInput from "../../utils/TextInput.svelte";
    import TextAreaInput from "../../utils/TextAreaInput.svelte";
    import HR from "../../utils/HR.svelte";
    import JsonFileDropper from "../../utils/JsonFileDropper.svelte";
    import type {OnFileLoad} from "../../utils/OnFileLoad.ts";

    let model: AttractionModel[] = [];

    const addAttraction = () => {
        model.push({name: '', description: '', images: []})
        model = model;
    }

    const removeAttraction = () => {
        model.pop();
        model = model;
    }

    const downloadFile = () => {
        download('atrakcje.json', JSON.stringify(model));
    }

    const onFileLoad: OnFileLoad = (file: any) => {
        model = file;
    }
</script>


<div class="container">
    <JsonFileDropper onLoad={onFileLoad}/>

    {#each model as attraction}
        <HR/>
        <TextInput description="Nazwa atrakcji" bind:value={attraction.name}/>
        <TextAreaInput description="Opis atrakcji" bind:value={attraction.description}/>
        {#each attraction.images as image}
            <TextInput description="nazwa zdjęcia atrakcji" bind:value={image}/>
        {/each}
        <div style="display: flex; flex-direction: row">
            <Button on:click={() => {
                    attraction.images.push('');
                    attraction.images = attraction.images;
            }} text="Dodaj Zdjęcie"/>
            <Button on:click={() => {
                attraction.images.pop();
                attraction.images = attraction.images;
            }} text="Usuń Zdjęcie"/>
        </div>
    {/each}

    <div style="display: flex; flex-direction: row">
        <Button on:click={addAttraction} text="Dodaj paragraf"/>
        <Button on:click={removeAttraction} text="Usuń paragraf"/>
    </div>

    <Button on:click={downloadFile} text="Pobierz powyższy plik"/>
</div>


<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>