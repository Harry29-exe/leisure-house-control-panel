<script lang="ts">
    import TextInput from "../../utils/TextInput.svelte";
    import JsonFileDropper from "../../utils/JsonFileDropper.svelte";
    import type {MainPageModel} from "./MainPageModel";
    import TextAreaInput from "../../utils/TextAreaInput.svelte";
    import Button from "../../utils/Button.svelte";
    import HR from "../../utils/HR.svelte";
    import {download} from "../../utils/Download.ts";
    import './../Container.css'

    let loadedFile: MainPageModel = {
        firstParagraph: {
            text: "",
            image: ""
        },
        paragraphs: [
            {
                title: "",
                text: "",
                image: "string"
            }
        ]
    };

    const onFileLoad = (file: MainPageModel) => {
        loadedFile = file;
    }

    const addParagraph = () => {
        loadedFile.paragraphs.push({title: 'Tytuł', text: 'Opis', image: 'nazwa zdjęcia'});
        loadedFile.paragraphs = loadedFile.paragraphs;
    }

    const removeParagraph = () => {
        loadedFile.paragraphs.pop();
        loadedFile.paragraphs = loadedFile.paragraphs;
    }

    const downloadFile = () => {
        download('glowna.json', JSON.stringify(loadedFile));
    }
</script>


<div class="container">
    <JsonFileDropper onLoad={onFileLoad}/>


    <TextAreaInput description={"Pierwszy wytłuszczony tekst na stronie po tytułem:"}
                   value={loadedFile.firstParagraph.text}
                   on:change={e => loadedFile.firstParagraph.text = e.target.value}/>
    <TextInput description="nazwa obrazu pod pierwszym tekstem" value={loadedFile.firstParagraph.image}
               on:change={e => loadedFile.firstParagraph.image = e.target.value}/>


    {#each loadedFile.paragraphs as paragraph, i}
        <HR color="black"/>
        <TextInput description={`Tytuł ${i+1}-tego paragrafu`} value={paragraph.title}
                   on:change={e => paragraph.title = e.target.value}/>

        <TextAreaInput description={"text który zawiera paragraf"} value={paragraph.text}
                       on:change={e => paragraph.text = e.target.value}/>

        <TextInput description="obraz pod paragrafem" value={paragraph.image}
                   on:change={e => paragraph.image = e.target.value}/>
    {/each}


    <div style="display: flex; flex-direction: row">
        <Button on:click={addParagraph} text="Dodaj paragraf"/>
        <Button on:click={removeParagraph} text="Usuń paragraf"/>
    </div>
    <Button on:click={downloadFile} text="Pobierz powyższy plik"/>

</div>

<style>
</style>