<script lang="ts">
    import {download} from "../../utils/Download";
    import TextInput from "../../utils/TextInput.svelte";
    import TextAreaInput from "../../utils/TextAreaInput.svelte";
    import type {OnFileLoad} from "../../utils/OnFileLoad.ts";
    import type {NewsPageModel} from "./NewsModel.ts";
    import JsonFileDropper from "../../utils/JsonFileDropper.svelte";
    import Button from "../../utils/Button.svelte";
    import HR from "../../utils/HR.svelte";

    let model: NewsPageModel = {
        socialMediaDescription: "",
        news: [
            {
                name: '',
                shortDescription: '',
                description: '',
                image: ''
            }
        ]
    };

    const addNews = () => {
        model.news.push({name: '', shortDescription: '', description: '', image: ''})
        model.news = model.news;
    }

    const removeNews = () => {
        model.news.pop();
        model.news = model.news;
    }

    const downloadFile = () => {
        download('aktualnosci.json', JSON.stringify(model));
    }

    const onFileLoad: OnFileLoad = (file: any) => {
        model = file;
    }
</script>

<div class="container">

    <JsonFileDropper onLoad={onFileLoad}/>

    <TextAreaInput description="Opis zapraszający na social media" bind:value={model.socialMediaDescription}/>

    {#each model.news as news}
        <HR/>
        <TextInput description="Tytuł opisujący aktualność" bind:value={news.title}/>
        <TextAreaInput description="Krótki opis aktualności" bind:value={news.shortDescription}/>
        <TextAreaInput description="Długi opis aktulności wyświetlany po kliknięciu na nią"
                       bind:value={news.description}/>
        <TextInput description="Nazwa zdjęcia do aktualności" bind:value={news.image}/>
    {/each}

    <div style="display: flex; flex-direction: row">
        <Button on:click={addNews} text="Dodaj paragraf"/>
        <Button on:click={removeNews} text="Usuń paragraf"/>
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
