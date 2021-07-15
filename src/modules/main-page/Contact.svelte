<script lang="ts">
    import {download} from "../../utils/Download";
    import type {ContactModel} from "./ContactModel";
    import JsonFileDropper from "../../utils/JsonFileDropper.svelte";
    import Button from "../../utils/Button.svelte";
    import TextInput from "../../utils/TextInput.svelte";
    import TextAreaInput from "../../utils/TextAreaInput.svelte";

    let model: ContactModel = {
        googleMapsSrc: '',
        contact: '',
        telephone: '',
        email: ''
    }

    const onFileLoad = (file: ContactModel) => {
        model = file;
    }

    const downloadFile = () => {
        download('kontakt.json', JSON.stringify(model));
    }
</script>


<div class="container">
    <JsonFileDropper onLoad={onFileLoad}/>

    <TextInput description="Skopiowany link z google maps" bind:value={model.googleMapsSrc}/>
    <TextAreaInput description="Informacje kontaktowe" bind:value={model.contact}/>
    <TextInput description="telefon wyświetlany na stronie" bind:value={model.telephone}/>
    <TextInput description="email wyświetlany na stronie" bind:value={model.email}/>

    <Button on:click={downloadFile} text="Pobierz powyższy plik"/>
</div>


