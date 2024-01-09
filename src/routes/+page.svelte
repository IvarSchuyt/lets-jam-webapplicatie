<section>

      <div class:changed={$isStyleChanged}>
        This is a div
        <button on:click={toggleStyle}>swag</button>
      </div>
      
      <button class:changed-button={$isStyleChanged} on:click={toggleStyle}>
        Change Style
      </button>

</section>

<script defer>
    import { isStyleChanged, toggleStyle } from './styleChange.js';
  </script>

<style>

section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

div{
    height: 20rem;
    width: 20rem;
    background-color: blue;
    margin-top: -20rem;
}

.changed {
    animation: slide-in 0.5s linear 0s 1 forwards;
  }

.changed-button{
    display: none;
}

@keyframes slide-in{
    0%{
    margin-top: -20rem;
    }
    100%{
        margin-top: 0rem;
    }
}

</style>

