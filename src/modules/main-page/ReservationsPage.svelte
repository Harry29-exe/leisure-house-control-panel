<script lang="ts">
    import Button from "../../utils/Button.svelte";
    import type {FetchedReservation} from "./ReservationModel";
    import {download} from "../../utils/Download";
    import HR from "../../utils/HR.svelte";
    import JsonFileDropper from "../../utils/JsonFileDropper.svelte";

    let model: FetchedReservation[] = [
        {
            from: [1, 1, 2021],
            to: [2, 1, 2021]
        }
    ]

    function addReservation() {
        model.push({from: [2021, 1, 1], to: [2021, 1, 2]});
        model = model;
    }

    function removeReservation() {
        model.pop();
        model = model;
    }

    function downloadFile() {
        download('rezerwacje.json', JSON.stringify(model));
    }

    function onFileLoad(file: any) {
        model = file;
    }
</script>



<div class="container">
    <JsonFileDropper onLoad={onFileLoad}/>

    {#each model as reservation}
        <div>
            Data od:
            <input type="number" min="1" max="31" bind:value={reservation.from[2]}>
            <input type="number" min="1" max="12" bind:value={reservation.from[1]}>
            <input type="number" min="2000" max="3000" bind:value={reservation.from[0]}>
        </div>
        <div>
            Data do:
            <input type="number" min="1" max="31" bind:value={reservation.to[2]}>
            <input type="number" min="1" max="12" bind:value={reservation.to[1]}>
            <input type="number" min="2000" max="3000" bind:value={reservation.to[0]}>

        </div>
        <Button on:click={() => {
            model = model.filter(r => r !== reservation);
        }} text="Usuń rezerwacje"/>
        <HR/>
    {/each}

    <div style="display: flex; flex-direction: row">
        <Button on:click={addReservation} text="Dodaj nową rezerwacje"/>
        <Button on:click={removeReservation} text="Usuń ostatnią rezerwacje"/>
    </div>
    <Button on:click={downloadFile} text="Pobierz powyższy plik"/>
</div>