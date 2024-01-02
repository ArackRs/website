<script setup>

</script>

<template>
  <section id="summary">
    <div class="summary-container container">
      <div class="summary-header">
        <h1 class="heading">About Me</h1>
      </div>
      <div class="summary-content content">
        <p>
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
        <div>
          <h1>Education</h1>
          <h3>Peruvian University of Applied Sciences</h3>
          <p>San Isidro - Expected in 07/2026</p>
          <h4>Software Engineering</h4>
        </div>
        <pv-button label="Download Resume" outlined />
      </div>
    </div>
  </section>
</template>

<style scoped>
  #summary {
    padding-bottom: 7rem;
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
</style>