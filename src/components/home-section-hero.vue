<script setup>
import CodepenBlobBackgroundAnimation from '@/components/CodepenBlobBackgroundAnimation.vue'
</script>

<template>
  <section class="hero">
    <div class="hero-container container">
      <div class="hero-content">
        <h1>Hello, I'm
          <strong>Jack Arana</strong>
        </h1>
        <h1 class="heading">Software Engineering Student</h1>
        <h1>Specialized in FullStack Development</h1>
        <router-link to="about-me">Resume
          <i class="pi pi-external-link" style="font-size: 0.7em; padding-right: .2rem"></i>
        </router-link>
      </div>
    </div>
    <CodepenBlobBackgroundAnimation />
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  background: linear-gradient(to bottom, var(--color-background-mute), var(--color-background-soft));
}
.hero-container {
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  width: 100%;
}
.hero-content {
  width: 100%;
  z-index: 100;
  margin: auto 0;

  & h1 {
    line-height: normal;
  }

  & h1:first-child {
    font-size: 2em;
    strong {
      padding-left: .7rem;
    }
  }

  & h1:nth-child(3) {
    font-size: 2em;
    color: white;
    line-height: 2em;
  }

  & a {
    font-size: 1.5em;
    display: inline-block;
    position: relative;

    &:hover {
      cursor: pointer;
      color: var(--color-text);
    }

    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #27CEB0;
      z-index: -1;
      transition: all .3s ease-in-out;
    }

    &:hover:before {
      height: 100%;
    }
  }
}
</style>