<script setup>

</script>

<template>
  <section class="social">

    <div class="social-container container">
      <div class="spotify bg-filter bg-image">
        <h1>Spotify</h1>
        <h3>Peruvian University of Applied Sciences</h3>
        <p>San Isidro - Expected in 07/2026</p>
        <h4>Software Engineering</h4>
      </div>
      <div class="steam bg-filter bg-image">
        <h1>Steam</h1>
        <h3>Peruvian University of Applied Sciences</h3>
        <p>San Isidro - Expected in 07/2026</p>
        <h4>Software Engineering</h4>
      </div>
      <img class="discord" src="/discord.jpg">
    </div>

  </section>
</template>

<style scoped>
.social-container {
  display: grid;
  gap: 2rem;
  grid-template-columns: 2fr 2fr 1fr;
  .bg-filter {
    padding: 2rem;
    border-radius: 1rem;
    display: grid;
    gap: 1rem;
  }
  .bg-image {
    background-size: cover;
    background-position: center;
  }
  .spotify {
    background-image: url('/spotify.jpg');
  }
  .steam {
    background-image: url('/steam.jpg');
  }
  .discord {
    width: 100%;
    border-radius: 1rem;
  }
}
</style>