<script lang="ts">
    import Chooser from "$lib/Chooser.svelte";
    import Countdown from "$lib/Countdown.svelte";
    import { playState } from "$lib/play-state-store";
    import "../app.css";

    function toggleState() {
        if ($playState === "playing") {
            $playState = "paused";
        } else {
            $playState = "playing";
        }
    }

    let countdownLength = 30;

    function onSelection(length: number) {
        countdownLength = length;
        $playState = "playing";
    }

    function onCountdownDone() {
        $playState = "between-sets";
    }
</script>

<header>
    <button on:click={toggleState}>
        {$playState}
    </button>
</header>
{#if $playState === "playing" || $playState === "paused"}
    <Countdown {onCountdownDone} {countdownLength} name={"Workout"} />
{:else}
    <Chooser {onSelection} />
{/if}

<style>
    header {
        position: fixed;
    }
</style>
