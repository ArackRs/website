<script setup>
</script>

<template>
  <section id="hero">
    <div class="hero-container container">
      <div class="hero-content">
        <h1>Hello, I'm
          <strong>Jack Arana</strong>
        </h1>
        <h1><span>Software Engineering Student</span></h1>
        <h1>Specialized in FullStack Development</h1>
        <router-link to="about-me">Resume
          <i class="pi pi-external-link" style="font-size: 0.7em; padding-right: .2rem"></i>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
#hero {
  width: 100%;
  height: 100vh;
  padding-top: 0;
  position: relative;
  overflow: hidden;
}

.hero-content {
  width: 100%;
  z-index: 100;
  display: inline-flex;
  flex-direction: column;
  align-items: start;

  & h1 {
    line-height: normal;
    display: inline-flex;
    background-color: var(--color-background);
  }

  & h1:first-child {
    font-size: 2em;
    strong {
      padding-left: .7rem;
    }
  }

  & h1:nth-child(2) {
    background-color: var(--color-background);
    & span {
      font-size: 3em;
      font-weight: bold;
      color: transparent;
      background: linear-gradient(113deg, var(--color-primary), var(--color-secondary-mute));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
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