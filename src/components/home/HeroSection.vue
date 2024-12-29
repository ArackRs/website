<script setup>
import { onMounted, ref } from 'vue';

onMounted(() => {
  document.getElementById('scrollButton').addEventListener('click', function() {
    document.getElementById('page').scrollTo({
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
  <section class="h-screen py-40">
    <div class="flex flex-col justify-between items-start h-full">
      <div class="my-auto">
        <h2 class="text-xl" >{{$t('home.hero.hello')}}
          <span class="typed sec-text font-bold" ref="secText"></span>
        </h2>
        <h1 class="heading shine">{{$t('home.hero.career')}}</h1>
        <h1 class="text-3xl/10 font-bold "
            v-animateonscroll="{ enterClass: 'scalein', leaveClass: 'fadeout' }">{{$t('home.hero.speciality')}}</h1>
        <router-link to="about-me" id="resume" class="text-xl inline-block relative z-10"
                     v-animateonscroll="{ enterClass: 'scalein', leaveClass: 'fadeout' }">{{$t('home.hero.resume')}}
          <i class="pi pi-arrow-right" style="font-size: 0.7em; padding-right: .2rem"></i>
        </router-link>
      </div>
    </div>
    <div class="flex flex-col items-center gap-2"
         v-animateonscroll="{ enterClass: 'zoomin', leaveClass: 'fadeout' }">
      <span class="text-xl font-medium" data-splitting>Scroll down</span>
      <i id="scrollButton" class="pi pi-angle-down fadeout cursor-pointer" style="font-size: 2rem;"></i>
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

#resume {

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

#scrollButton {
  animation: slide-down 3s infinite;
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
@keyframes animate {
  40%, 60% {
    left: calc(100% + 4px);
  }
  100% {
    left: 0;
  }
}
</style>