<script lang="ts">
    export let onSelection: (length: number) => void = (len) =>
        console.log(len);
</script>

<section>
    <form>
        <button on:click={onSelection(15)}>15 seconds</button>
        <button on:click={onSelection(30)}>30 seconds</button>
        <button on:click={onSelection(45)}>45 seconds</button>
        <button on:click={onSelection(60)}>60 seconds</button>
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
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    button {
        border: 0;
        padding: 1rem;
        border-radius: 8px;
        font-size: 2em;
        background: white;
    }
</style>
