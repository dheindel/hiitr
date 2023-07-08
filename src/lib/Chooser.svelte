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
        gap: 50px;
    }

    button {
        color: navy;
        border: 0;
        padding: 2rem;
        border-radius: 12px;
        font-size: 3em;
        font-weight: 500;
        background: white;
    }
</style>
