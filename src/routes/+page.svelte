<script lang="ts">
    import Chooser from "$lib/Chooser.svelte";
    import Countdown from "$lib/Countdown.svelte";
    import { playState } from "$lib/play-state-store";
    import "../app.css";

    let wakeLock: unknown;

    function toggleState() {
        if ($playState === "playing") {
            $playState = "paused";
        } else {
            requestWakeLock();
            $playState = "playing";
        }
    }

    async function requestWakeLock() {
        if (wakeLock) {
            return;
        }
        try {
            // @ts-ignore
            wakeLock = await navigator.wakeLock.request("screen");
        } catch (ex) {
            console.error("Could not get wake lock:", ex);
        }
    }

    let countdownLength = 30;

    async function onSelection(length: number) {
        speechSynthesis.speak(
            new SpeechSynthesisUtterance(`${length} seconds`)
        );
        await requestWakeLock();
        $playState = "paused";
        countdownLength = length;
        setTimeout(() => {
            $playState = "playing";
        }, 1500);
    }

    function onCountdownDone() {
        $playState = "between-sets";
    }
</script>

<header>
    {#if $playState !== "between-sets"}
        <button on:click={toggleState}>
            {$playState}
        </button>
    {/if}
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
