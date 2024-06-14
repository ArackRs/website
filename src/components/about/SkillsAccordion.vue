<script setup>
import { ref } from 'vue';

const active = ref(0);
const { value } = defineProps(['value'])

</script>

<template>
  <div class="card bg-filter" >
    <div class="top flex align-items-start">
      <h1>Skills</h1>
      <div class="flex gap-2 justify-content-end">
        <pv-button @click="active = 0" rounded label="1" class="w-2rem h-2rem p-0" :outlined="active !== 0" />
        <pv-button @click="active = 1" rounded label="2" class="w-2rem h-2rem p-0" :outlined="active !== 1" />
        <pv-button @click="active = 2" rounded label="3" class="w-2rem h-2rem p-0" :outlined="active !== 2" />
      </div>
    </div>

    <pv-accordion v-model:activeIndex="active">
      <pv-accordion-tab :header="$t('about.main.programmingLanguages')">
        <pv-chip v-for="item in value.languages" :key="item" :label="item" />
      </pv-accordion-tab>
      <pv-accordion-tab :header="$t('about.main.librariesAndFrameworks')">
        <pv-chip v-for="item in value.libraries" :key="item" :label="item" />
      </pv-accordion-tab>
      <pv-accordion-tab :header="$t('about.main.toolsAndPlatforms')">
        <pv-chip v-for="item in value.tools" :key="item" :label="item" />
      </pv-accordion-tab>
    </pv-accordion>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
  height: min-content;

  .top {
    width: 100%;
    height: min-content;
  }

}

.p-chip {
  position: relative;
  font-size: 0.8em;
  width: min-content;
  height: min-content;
  margin-right: 0.5rem;
  z-index: 1;
}


@media (max-width: 525px) {
}
</style>