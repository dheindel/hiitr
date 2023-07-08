<script lang="ts">
    export let onSelection: (length: number) => void = (len) =>
        console.log(len);
</script>

<section>
    <form>
        <button on:click={onSelection(15)}>15</button>
        <button on:click={onSelection(30)}>30</button>
        <button on:click={onSelection(45)}>45</button>
        <button on:click={onSelection(60)}>60</button>
        <button on:click={onSelection(60)}>90</button>
        <button on:click={onSelection(60)}>120</button>
    </form>
</section>

<style>
    section {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: navy;
    }

    form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        /* display: flex; */
        /* flex-direction: column; */
        gap: 4rem;
    }

    button {
        border: 0;
        padding: 2rem;
        border-radius: 50%;
        font-size: 3em;
        background: white;
    }
</style>
