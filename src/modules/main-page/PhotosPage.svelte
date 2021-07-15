<script lang="ts">
    import Button from "../../utils/Button.svelte";
    import {download} from "../../utils/Download";
    import TextInput from "../../utils/TextInput.svelte";
    import HR from "../../utils/HR.svelte";
    import JsonFileDropper from "../../utils/JsonFileDropper.svelte";

    let model: string[] = [''];

    function addSM() {
        model.push('');
        model = model;
    }

    function removeSM() {
        model.pop();
        model = model;
    }

    function downloadFile() {
        download('social_media.json', JSON.stringify(model));
    }

    function onFileLoad(file: any) {
        model = file;
    }

</script>



<div class="container">
    <JsonFileDropper onLoad={onFileLoad}/>

    {#each model as photo}
        <TextInput description="nazwa zdjęcia w folderze images wraz z jego rozszerzeniem np dom_front.jpg"
                   bind:value={photo}/>
        <Button text="Usuń zdjęcie" on:click={() => model = model.filter(p => p !== photo)}/>
        <HR/>
    {/each}

    <div style="display: flex; flex-direction: row">
        <Button on:click={addSM} text="Dodaj nowe zdjęcie"/>
        <Button on:click={removeSM} text="Usuń ostatnie zdjęcie"/>
    </div>
    <Button on:click={downloadFile} text="Pobierz powyższy plik"/>
</div>