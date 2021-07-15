<script lang="ts">

    import {download} from "../../utils/Download";
    import TextInput from "../../utils/TextInput.svelte";
    import Button from "../../utils/Button.svelte";
    import JsonFileDropper from "../../utils/JsonFileDropper.svelte";
    import HR from "../../utils/HR.svelte";

    interface SocialMediaModel {
        name: string,
        link: string,
        color: string
    }

    let model: SocialMediaModel[] = [
        {
            name: '',
            link: '',
            color: ''
        }
    ]

    function addSM() {
        model.push({name: '', link: '', color: ''});
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

    {#each model as sc}
        <TextInput description="Nazwa wyświetlana na stronie np: Nasz facebook albo facebook" bind:value={sc.name}/>
        <TextInput description="Link przekierowujący na daną strone" bind:value={sc.link}/>
        <div>
            Kolor guzika prowadzącego do innej storny
            <input type="color" bind:value={sc.color}>
        </div>
        <HR/>
    {/each}

    <div style="display: flex; flex-direction: row">
        <Button on:click={addSM} text="Dodaj nową rezerwacje"/>
        <Button on:click={removeSM} text="Usuń ostatnią rezerwacje"/>
    </div>
    <Button on:click={downloadFile} text="Pobierz powyższy plik"/>
</div>