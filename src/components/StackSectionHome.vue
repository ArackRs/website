<script setup>

</script>

<template>
  <section class="skills">
    <div class="skills-container container">
      <div class="skills-header header">
        <h1>My technology stack</h1>
        <p>Languages and tools</p>
      </div>
      <div class="skills-content content bg-filter">
        <div class="skill">
          <i class="pi pi-desktop"></i>
          <h2>Web Development</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        </div>
        <div class="skill">
          <i class="pi pi-mobile"></i>
          <h2>Mobile Development</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .skills {
    background-color: var(--color-background-soft);
  }
  .skills-container {
    flex-direction: column;
    gap: 2rem;
  }
  .skills-header {
    width: 100%;
  }
  .skills-content {
    width: 100%;
    display: flex;
    gap: 2rem;
    & .skill {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      & i {
        font-size: 3em;
        color: var(--color-primary);
      }
      & h2 {
        font-size: 1.5em;
        color: var(--color-text);
      }
      & p {
        font-size: 1em;
        color: var(--color-text);
      }
    }
  }
</style>