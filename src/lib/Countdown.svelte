<script lang="ts">
    import { playState, type PlayState } from "./play-state-store";

    export let countdownLength: number;
    export let name: string;
    export let onCountdownDone: () => void = () => console.log("done");

    let timer: number;
    let timeElapsed = 0;
    let timeRemaining = countdownLength;
    let percentRemaining = "0%";

    function countdown() {
        if (!countdownLength) {
            return;
        }
        timer = setTimeout(() => {
            timeElapsed = timeElapsed + 0.1;
            timeRemaining = countdownLength - timeElapsed;
            if (timeRemaining <= 0) {
                $playState = "paused";
                onCountdownDone();
            }
            updateDisplay();
            countdown();
        }, 100);
    }

    function updateDisplay() {
        percentRemaining = `${100 - (timeRemaining / countdownLength) * 100}%`;
    }

    function toggleState(state: PlayState) {
        if (state === "playing") {
            countdown();
        } else {
            clearTimeout(timer);
        }
    }

    $: toggleState($playState);
</script>

<section class="set" style="--set-progress: {percentRemaining};">
    <div class="exercise-time-remaining">{Math.trunc(timeRemaining)}</div>
    <div class="exercise">{name}</div>
</section>

<style>
    section {
        font-family: --apple-system, sans-serif;
    }

    .set {
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        color: white;
        background-image: linear-gradient(
            155deg,
            hsl(253deg 100% 11%) 0%,
            hsl(253deg 100% 30%) var(--set-progress),
            hsl(253deg 100% 40%) 100%
        );
    }

    .exercise-time-remaining {
        font-size: 8rem;
        font-weight: 600;
    }

    .exercise {
        font-size: 1.5rem;
        font-style: italic;
        text-transform: uppercase;
    }
</style>
