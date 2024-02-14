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
      <div class="about-me bg-filter bg-image">
        <h1>Jack Arana Ramos</h1>
      </div>
      <div class="profile bg-filter">
        <h1>Profile</h1>
        <p>I am a software developer with a passion for creating and learning. I
          have experience in web development, mobile development, and desktop
          development. I am currently working on a few projects, including a
          mobile app and a web app. I am also learning about machine learning
          and artificial intelligence.</p>
      </div>
      <div class="meta bg-image">
        <img src="/meta-front-end-developer-certificate.png" alt="meta">
      </div>
      <div class="ibm bg-image">
        <img src="/meta-front-end-developer-certificate.png" alt="ibm">
      </div>

      <div class="education bg-filter bg-image">
        <h1>Education</h1>
        <h3>Peruvian University of Applied Sciences</h3>
        <p>San Isidro - Expected in 07/2026</p>
        <h4>Software Engineering</h4>
      </div>
      <div class="skills bg-filter">
        <h1>Skills</h1>
        <h3>Languages Programming</h3>
        <p>Issued by Coursera</p>
        <div class="stack">
          <img v-for="tech in stack"
               :src="'https://skillicons.dev/icons?i=' + tech + '&theme=light'"
               :alt="`${tech} icon`"
               :key="tech" />
        </div>
      </div>
      <div class="certificates bg-filter">
        <h1>Certificates</h1>
        <h3>Meta Front-End Developer</h3>
        <p>Issued by Coursera</p>
        <pv-image src="src/assets/images/certificate_frontend.png" alt="Image" preview />
      </div>
      <div class="projects bg-filter bg-image">
        <h1>Projects</h1>
        <h3>Peruvian University of Applied Sciences</h3>
        <p>San Isidro - Expected in 07/2026</p>
        <h4>Software Engineering</h4>
      </div>
    </div>
  </section>
</template>

<style scoped>
.summary-container {
  width: 100%;
  overflow: hidden;
  display: grid !important;
  place-items: center;
  gap: 2rem;
  grid-template-areas:
    "about-me about-me about-me profile profile"
    "about-me about-me about-me meta ibm"
    "education education skills skills skills"
    "certificates certificates certificates projects projects";
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  div {
    width: 100%;
    height: 100%;
  }
  .about-me {
    grid-area: about-me;
    background: url('/arack.jpeg');
    display: grid;
    height: 100%;
    h1 {
      font-size: 4.5em;
      color: white;
      font-weight: bold;
      margin-top: auto;
    }
  }
  .profile {
    grid-area: profile;
  }
  .meta {
    grid-area: meta;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .ibm {
    grid-area: ibm;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .education {
    grid-area: education;
    background: url('/upc.jpeg') no-repeat center right;
    padding-right: 5rem;
  }
  .skills {
    grid-area: skills;
    position: relative;
    overflow: hidden;
    padding-right: 15rem;

    .stack {
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      width: 50%;
      img {
        width: min-content;
      }
    }
  }
  .certificates {
    grid-area: certificates;
    position: relative;
    overflow: hidden;

    .p-image {
      position: absolute;
      top: 0;
      right: 0;
      width: 50%;
      max-height: 100%;
    }
  }
  .projects {
    grid-area: projects;
    background: url('https://media.giphy.com/media/4rZA5D22301iMgrUNd/giphy.gif') no-repeat center right;
  }
  .bg-filter {

    h1 {
      padding-bottom: 1rem;
    }
  }
  .bg-image {
    &:before {
      content: '';
      background: rgba(0, 0, 0, 0.5);
      border-radius: 20px;
      position: absolute;
      inset: 0;
      z-index: -1;
    }
  }
}
@media (max-width: 1024px) {
  .summary-container {
    gap: 1rem;
  }
}
@media (max-width: 768px) {
  .summary-container {
    grid-template-areas:
      "about-me about-me about-me"
      "profile profile meta"
      "ibm education education"
      "skills skills skills"
      "certificates certificates certificates"
      "projects projects projects";
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media (max-width: 425px) {
  .summary-container {
    grid-template-areas:
      "about-me about-me"
      "profile profile"
      "meta ibm"
      "education education"
      "skills skills"
      "certificates certificates"
      "projects projects";
    grid-template-columns: 1fr 1fr;
  }
}
</style>