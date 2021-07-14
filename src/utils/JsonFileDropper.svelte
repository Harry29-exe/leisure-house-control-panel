<script lang="ts">
    import type {OnFileLoad} from "./OnFileLoad";

    export let onLoad: OnFileLoad;

    const onInput = (e: any) => {
        let file = e.target.files[0];
        const fileReader = new FileReader();
        console.log('start reading');

        fileReader.addEventListener('load', ev => {
            let parsedFile = JSON.parse(ev.target.result as string);
            console.log(parsedFile)
            onLoad(parsedFile);
        })
        fileReader.readAsText(file)
    }
</script>


<div>
    <input type="file" on:input={onInput}>
</div>