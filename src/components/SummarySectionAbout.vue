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
  <section id="summary">
    <div class="summary-container container">
      <div class="summary-header">
        <h1 class="heading">About Me</h1>
      </div>
      <div class="summary-content content">
        <p class="description">
          I am a software developer with a passion for creating and learning. I
          have experience in web development, mobile development, and desktop
          development. I am currently working on a few projects, including a
          mobile app and a web app. I am also learning about machine learning
          and artificial intelligence.
        </p>
      </div>
      <div class="summary-footer footer">
        <div class="highlight">
          <div>
            <h1>Education</h1>
            <h3>Peruvian University of Applied Sciences</h3>
            <p>San Isidro - Expected in 07/2026</p>
            <h4>Software Engineering</h4>
          </div>
          <div>
            <h1>Skills</h1>
            <div v-for="skill in skills" :key="skill.type">
              <h3>{{ skill.type }}</h3>
              <div class="chips">
                <pv-chip v-for="item in skill.items" :key="item" :label="item" style="font-size: 0.7em" />
              </div>
            </div>
          </div>
          <pv-button class="btn-cv" label="Download Resume" outlined />
        </div>
        <div class="stack bg-filter">
          <img v-for="tech in stack"
               :src="'https://skillicons.dev/icons?i=' + tech + '&theme=light'"
               :alt="`${tech} icon`"
               :key="tech" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .summary-container {
    flex-direction: column;
    align-items: start;
    gap: 1rem;
    width: 100%;
  }
  .summary-content {
    width: 100%;
    display: flex;
    flex-wrap: nowrap !important;
    justify-content: space-between;
    gap: 1rem;
    p {
      font-size: 1.2em;
      line-height: 1.5;
    }
    img {
      width: 20rem;
    }
  }
  .summary-footer {
    gap: 10rem !important;
    .highlight {
      width: min(35rem, 100%);
      display: grid;
      gap: 2rem;
      .chips {
        padding: 0.5rem 0;
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
      }
      .btn-cv {
        width: max-content;
      }
    }
    .stack {
      width: min(27rem, 100%);
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
  }
</style>