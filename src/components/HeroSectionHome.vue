<script setup>

</script>

<template>
  <section class="hero">
    <div class="container">
      <div class="content">
        <h1>Hello, I'm
          <span class="highlight">Jack Arana</span>
        </h1>
        <h1>Software Engineering Student</h1>
        <h1>Specialized in FullStack Development</h1>
        <router-link to="about-me">Resume
          <i class="pi pi-external-link" style="font-size: 0.7em; padding-right: .2rem"></i>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  width: 100%;
  height: 100vh;
}
.hero .container {
  height: 100%;
}
.hero .content {
  padding-bottom: 5rem;
  & h1 {
    line-height: normal;
  }
  & h1:first-child {
    font-size: 2em;
  }
  & h1:nth-child(2) {
    font-size: 4em;
    font-weight: bold;
    color: transparent;
    background: linear-gradient(113deg, #27CEB0, #0044c4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
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