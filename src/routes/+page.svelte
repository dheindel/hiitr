<script lang="ts">
  let setTimeRemaining = '--';
  let workoutTimeElapsed = 0;
  let paused = true;
  let currentExercise = '';
  
  let timer = 0;

  let workout = [
    {
        exercise: 'Jump squat',
        length: 30 
    },
    {
        exercise: 'Lunge',
        length: 30 
    },
    {
        exercise: 'Squat',
        length: 30 
    },
  ];

  let workoutTimeRemaining =  workout.reduce((sum, set) => sum + set.length, 0);

  function countdown() {
    if (!workoutTimeRemaining) { return; }
    timer = setTimeout(() => {
      workoutTimeElapsed = workoutTimeElapsed + 1;
      updateDisplay();
      workoutTimeRemaining = workoutTimeRemaining - 1;
      countdown();
    }, 1000);
  }

  function updateDisplay() {
    let foo = 0;
      for (let set of workout) {
        if (workoutTimeElapsed >= foo && workoutTimeElapsed <= (foo + set.length)) {
            currentExercise = set.exercise;
            let tmp = set.length - (workoutTimeElapsed - foo);
            setTimeRemaining = tmp.toString();
            if (!paused && tmp <= 5) { 
                if (tmp === 0) {
                  speechSynthesis.speak(new SpeechSynthesisUtterance("Done")); 
                } else {
                  speechSynthesis.speak(new SpeechSynthesisUtterance(setTimeRemaining));
                }
            }
            break;
        } 

        foo = foo + set.length;
      }
  }

  function toggleState() { 
    if (paused) { 
      updateDisplay();
      countdown();
    } else {
      clearTimeout(timer);
    }
    paused = !paused;
  }
</script>

<button on:click={toggleState}>
  {#if paused}
    Play
  {:else}
    Pause
  {/if}
</button>

<section>
  <div class="workout-time-elapsed">{workoutTimeElapsed}</div>
  <div class="workout-time-elapsed">{workoutTimeRemaining}</div>
</section>
<section class="set">
  <div class="exercise-time-remaining">{setTimeRemaining}</div>
  <div class="exercise">{currentExercise}</div>
</section>

<style>
    section {
      font-family: --apple-system, sans-serif;
    }

    .set {
        height: 80vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .exercise {
        color: red;
    }

    .exercise-time-remaining {
        color: green;
        font-size: 8rem;
    }
</style>