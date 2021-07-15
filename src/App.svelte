<script lang="ts">
    import MainPage from "./modules/main-page/MainPage.svelte";
    import Attractions from "./modules/main-page/Attractions.svelte";
    import NewsPage from "./modules/main-page/NewsPage.svelte";
    import Contact from "./modules/main-page/Contact.svelte";
    import ReservationsPage from "./modules/main-page/ReservationsPage.svelte";
    import ReservationsInfoPage from "./modules/main-page/ReservationsInfoPage.svelte";
    import SocialMedia from "./modules/main-page/SocialMedia.svelte";
    import PhotosPage from "./modules/main-page/PhotosPage.svelte";

    let currentPage: string = 'Główna';
    const pages: string[] = ['Główna', 'Atrakcje', 'Aktualności', 'Kontakt', 'Rezerwacje', 'Rezerwacje-Info', 'Social-Media', 'Zdjęcia'];
</script>


<div class="navbar">
    {#each pages as page}
        <button on:click={() => currentPage = page}
                style={`${page === currentPage?
                'background: #00ebff; border-color: white': ''}`}>
            {page}
        </button>
    {/each}
</div>
<div class="switch">
    {#if currentPage === 'Główna'}
        <MainPage/>
    {:else if currentPage === 'Atrakcje'}
        <Attractions/>
    {:else if currentPage === 'Aktualności'}
        <NewsPage/>
    {:else if currentPage === 'Kontakt'}
        <Contact/>
    {:else if currentPage === 'Rezerwacje'}
        <ReservationsPage/>
    {:else if currentPage === 'Rezerwacje-Info'}
        <ReservationsInfoPage/>
    {:else if currentPage === 'Social-Media'}
        <SocialMedia/>
    {:else if currentPage === 'Zdjęcia'}
        <PhotosPage/>
    {/if}
</div>


<style>
    .navbar {
        width: 100%;
        height: 50px;
        background: #3fc1cd;

        padding-left: 15px;
        padding-right: 15px;
        display: flex;
        justify-content: space-around;
        /*justify-items: center;*/
        align-items: center;
    }

    .switch {

    }

    button {
        background: #00dede;
        border: 2px solid black;
        border-radius: 5px;
        margin: 0;
        padding: 5px;
        cursor: pointer;
    }

    button:hover {
        background: #93e5e5;
    }
</style>