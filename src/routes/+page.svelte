<script lang="ts">
    import Countdown from "$lib/Countdown.svelte";
    import { playState } from "$lib/play-state-store";

    function toggleState() {
        if ($playState === 'playing') { 
          $playState = 'paused'
        } else {
            $playState = 'playing';
        }
        // paused = !paused;
    }
</script>

<button on:click={toggleState}>
    {$playState}
</button>
<Countdown countdownLength={30} name={"stuff"} /> 
