<script setup>
import { onMounted, ref } from 'vue';

onMounted(() => {
  document.getElementById('scrollButton').addEventListener('click', function() {
    document.getElementById('app-body').scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  });
  // eslint-disable-next-line no-undef
  Splitting(); // Splitting.js - unique! npm install splitting --save
  textLoad();
  setInterval(textLoad, 15000);
});
const secText = ref(null);

const textLoad = () => {
  if (secText.value) {
    setTimeout(() => {
      secText.value.textContent = 'Jack Arana';
    }, 0);
    setTimeout(() => {
      secText.value.textContent = 'Frontend Developer';
    }, 5000);
    setTimeout(() => {
      secText.value.textContent = 'Backend Developer';
    }, 10000);
  }
};
</script>

<template>
  <section class="hero">
    <div class="hero-container container">
      <div class="hero-content">
        <h2 class="hello animated-text" >{{$t('home.hero.hello')}}
          <span style="font-weight: bold;" class="typed sec-text" ref="secText"></span>
        </h2>
        <h1 class="career heading shine">{{$t('home.hero.career')}}</h1>
        <h1 class="speciality animation-duration-1000" v-animateonscroll="{ enterClass: 'scalein', leaveClass: 'fadeout' }">{{$t('home.hero.speciality')}}</h1>
        <router-link to="about-me" class="resume animation-duration-1000" v-animateonscroll="{ enterClass: 'scalein', leaveClass: 'fadeout' }">{{$t('home.hero.resume')}}
          <i class="pi pi-external-link" style="font-size: 0.7em; padding-right: .2rem"></i>
        </router-link>
      </div>
    </div>
    <div class="scroll-down flex flex-column align-items-center gap-2 animation-duration-1000" v-animateonscroll="{ enterClass: 'zoomin', leaveClass: 'fadeout' }">
      <span class="text-xl font-medium" data-splitting>Scroll down</span>
      <i id="scrollButton" class="btn-slide-down pi pi-angle-down fadeout" style="font-size: 2rem;"></i>
    </div>
  </section>
</template>

<style scoped>
.typed {
  position: relative;
  white-space: nowrap;
}
.typed.sec-text:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  border-left: 2px solid whitesmoke;
  animation: animate 5000ms steps(12) infinite;
}
.typed.sec-text {
  background: linear-gradient(to right, var(--color-tertiary) 50%, transparent 50%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  mix-blend-mode: screen;
}

@keyframes animate {
  40%, 60% {
    left: calc(100% + 4px);
  }
  100% {
    left: 0;
  }
}

#scrollButton {
  cursor: pointer;
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
  overflow: hidden;
  & h1 {
    line-height: normal;
  }

  & h2.hello {
    color: white;
    strong {
      color: white;
    }
  }

  & h1.speciality {
    font-size: 2em;
    color: white;
    line-height: 2em;
  }

  & a {
    font-size: 1.5em;
    display: inline-block;
    position: relative;
    z-index: 1;

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
      z-index: -1;
      background-color: var(--color-primary);
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