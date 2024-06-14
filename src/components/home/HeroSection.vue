<script setup>
import CodepenBlobBackgroundAnimation from '@/components/CodepenBlobBackgroundAnimation.vue'
import { onMounted } from 'vue';

onMounted(() => {
  document.getElementById('scrollButton').addEventListener('click', function() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  });
});
</script>

<template>
  <section class="hero">
    <div class="hero-container container">
      <div class="hero-content">
        <h2 class="hello">{{$t('home.hero.hello')}}
          <strong>Jack Arana</strong>
        </h2>
        <h1 class="career heading">{{$t('home.hero.career')}}</h1>
        <h1 class="specialty">{{$t('home.hero.specialty')}}</h1>
        <router-link to="about-me">{{$t('home.hero.resume')}}
          <i class="pi pi-external-link" style="font-size: 0.7em; padding-right: .2rem"></i>
        </router-link>
      </div>
    </div>
    <div class="scroll-down flex flex-column align-items-center gap-2">
      <span class="text-xl font-medium">Scroll Down</span>
      <i id="scrollButton" class="btn-slide-down pi pi-angle-down fadeout" style="font-size: 2rem"></i>
    </div>
    <CodepenBlobBackgroundAnimation />
  </section>
</template>

<style scoped>
#scrollButton {
  cursor: pointer;
  z-index: 1000;
}
.hero {
  position: relative;
  height: 100vh;
  padding-block: 10rem;
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
  margin: auto 0;

  & h1 {
    line-height: normal;
  }

  & h2.hello {
    color: white;
    strong {
      color: white;
    }
  }

  & h1.specialty {
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
      background-color: var(--color-primary);
      z-index: -1;
      transition: all .3s ease-in-out;
    }

    &:hover:before {
      height: 100%;
    }
  }
}

@keyframes slide-down {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0);
  }
}

.btn-slide-down {
  animation: slide-down;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}
</style>