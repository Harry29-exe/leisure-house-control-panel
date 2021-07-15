<script lang="ts">
    import {download} from "../../utils/Download";
    import JsonFileDropper from "../../utils/JsonFileDropper.svelte";
    import TextInput from "../../utils/TextInput.svelte";
    import TextAreaInput from "../../utils/TextAreaInput.svelte";
    import Button from "../../utils/Button.svelte";

    interface ReservationInfo {
        reservationsText: string,
        paymentText: string
    }

    let model: ReservationInfo = {
        reservationsText: '',
        paymentText: ''
    }

    const onFileLoad = (file: any) => {
        model = file;
    }

    const downloadFile = () => {
        download('rezerwacje_info.json', JSON.stringify(model));
    }
</script>

<div class="container">
    <JsonFileDropper onLoad={onFileLoad}/>

    <TextAreaInput description={"Tekst na stronie \"Rezerwacje\" w podzakładce Rezerwacje"} bind:value={model.reservationsText}/>
    <TextAreaInput description={"Tekst na stronie \"Rezerwacje\" w podzakładce Płatność"} bind:value={model.paymentText}/>

    <Button on:click={downloadFile} text="Pobierz powyższy plik"/>
</div>
