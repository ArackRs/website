<script setup>
const skills = [
  'visualstudio', 'cpp', 'html', 'css', 'js', 'bootstrap', 'sass', 'vscode', 'py', 'git',
  'github', 'figma', 'idea', 'angular', 'ts', 'vue', 'firebase', 'cs', 'dotnet', 'java',
  'spring', 'nodejs', 'mysql', 'mongodb', 'postman', 'docker', 'azure', 'linux'
];
</script>

<template>
  <section class="stack">
    <div class="stack-container container">
      <div class="stack-header header">
        <h1>My technology stack</h1>
        <p>Languages and tools</p>
      </div>
      <div class="stack-content content">
        <div class="stack-images bg-filter">
          <img v-for="(skill, index) in skills" ref="imageRefs"
               :src="'https://skillicons.dev/icons?i=' + skill + '&theme=light'"
               :alt="`${skill} icon`"
               :key="index" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .stack {
    background-color: var(--color-background-soft);
    padding-bottom: 7rem;
  }
  .stack-container {
    flex-direction: column;
    gap: 2rem;
    width: 100%;
  }
  .stack-images {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
</style>