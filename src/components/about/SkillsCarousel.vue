<script setup>
const skills = [
  {
    type: 'Programming Languages',
    items: ['html', 'css', 'javascript', 'typescript', 'python', 'java', 'cs', 'cpp']
  },
  {
    type: 'Libraries & Frameworks',
    items: ['bootstrap', 'sass', 'angular', 'vue', 'firebase', 'spring', 'nodejs', 'express']
  },
  {
    type: 'Tools & Platforms',
    items: ['git', 'github', 'figma', 'vscode', 'idea', 'visualstudio', 'postman', 'docker', 'azure', 'linux']
  }
];

const stack = skills.flatMap(skill => skill.items);
console.log(stack);
</script>

<template>
  <pv-carousel :value="skills" :numVisible="1" :numScroll="1" circular :autoplayInterval="5000">
    <template #item="skill">
      <div class="container-carousel bg-filter">
        <div class="text ">
          <h1>{{skill.data.type}}</h1>
        </div>
        <div class="stack">
          <img v-for="tech in skill.data.items"
               :src="'https://skillicons.dev/icons?i=' + tech + '&theme=light'"
               :alt="`${tech} icon`"
               :key="tech" />
        </div>
      </div>
    </template>
  </pv-carousel>
</template>

<style scoped>
.p-carousel {

  .container-carousel {
    position: relative;

    .stack {
      position: absolute;
      top: 0;
      right: 0;
      width: 50%;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      img {
        width: min-content;
      }
    }
  }
}
</style>