<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// eslint-disable-next-line no-unused-vars
let lastScrollPosition = 0;
const isFooter = ref(false);

const checkScroll = () => {
  const currentScrollPosition = window.scrollY || document.documentElement.scrollTop;
  const windowHeight = window.innerHeight;
  const documentHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );

  // Adjust the condition to check if the user has reached the bottom
  isFooter.value = currentScrollPosition + windowHeight >= documentHeight - 200;
  lastScrollPosition = currentScrollPosition;
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>

<template>
  <footer id="bottom" :class="{ 'is-active': isFooter }">
    <div class="bottom-container container">
      <nav class="nav-social">
        <a href=""><i class="pi pi-github"></i></a>
        <a href=""><i class="pi pi-linkedin"></i></a>
        <a href=""><i class="pi pi-instagram"></i></a>
      </nav>
      <button class="toggle-theme"><i class="pi pi-sun"></i></button>
    </div>
  </footer>
</template>

<style>
  #bottom {
    width: 100%;
    padding: 0 1rem;
    position: fixed;
    bottom: 0;
    left: 0;
    display: block;
    z-index: 100;
    transition: all .3s ease-in-out;
    &.is-active {
      bottom: -100%;
    }
  }
  .bottom-container {
    display: flex;
    padding: 2rem 0;
    align-items: end;
  }
  .nav-social {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    a {
      text-decoration: none;
      color: var(--color-text);
      :hover {
        color: var(--color-primary);
      }
      i {
        font-size: 1.5rem;
      }
    }
  }
  .toggle-theme {
    & i {
      font-size: 2em;
    }
  }

  @media screen and (max-width: 768px) {
    #bottom {
      display: none;
    }
  }
</style>