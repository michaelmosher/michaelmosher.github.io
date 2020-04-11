<script>
    import Header from "../components/Header.svelte";
</script>

<style>
    main {
        grid-area: main;
        grid-column-start: 2;
        grid-column-end: 3;

        display: inline-grid;
        grid-row-gap: 50px;
        margin-top: 25px;
        padding-bottom: 50px;
    }

    div.banner {
        position: fixed;
        top: 0;
        z-index: -1;
        width: 100%;
        height: 33vh;
        background-color: #000040;
    }
</style>

<Header />
<main>
    <slot />
</main>
<div class="banner" />
