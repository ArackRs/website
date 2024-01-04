<script setup>
const skills = [
  'visualstudio', 'cpp', 'html', 'css', 'js', 'bootstrap', 'sass', 'vscode', 'py', 'git',
  'github', 'figma', 'idea', 'angular', 'ts', 'vue', 'firebase', 'cs', 'dotnet', 'java',
  'spring', 'nodejs', 'mysql', 'mongodb', 'postman', 'docker', 'azure', 'linux'
];
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
          I am a student at the University of Waterloo, studying Computer
          Science. I am also a member of the University of Waterloo
          Association for Computing Machinery (ACM) Student Chapter.
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
            <h3>Programming Languages</h3>
            <p>HTML, CSS, JavaScript</p>
            <h3>Libraries & Frameworks</h3>
            <p>HTML, CSS, JavaScript</p>
            <h3>Tools & Platforms</h3>
            <p>HTML, CSS, JavaScript</p>
          </div>
          <pv-button class="btn-cv" label="Download Resume" outlined />
        </div>
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
  #summary {
    min-height: 100vh;
  }
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
      min-width: max-content;
      display: grid;
      gap: 2rem;
      .btn-cv {
        width: max-content;
      }
    }
    .stack-images {
      width: min(48rem, 100%);
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
  }
</style>