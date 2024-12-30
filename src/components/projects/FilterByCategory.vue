<script setup>
import { ref, computed, defineProps, defineEmits, watch } from 'vue';

const props = defineProps(['value']);
const emit = defineEmits(['update']);
const selectedCategories = ref(['All']);
const categories = ref([
  { id: 1, name: 'All' },
  { id: 2, name: 'LandingPage' },
  { id: 3, name: 'WebApp' },
  { id: 4, name: 'MobileApp' },
  { id: 5, name: 'DesktopApp' },
  { id: 6, name: 'OpenAPI' },
  { id: 7, name: 'Other' },
]);

const updateSelection = (categoryName) => {
  if (categoryName === 'All') {
    selectedCategories.value = ['All'];
  } else {
    const index = selectedCategories.value.indexOf(categoryName);
    if (index !== -1) {
      selectedCategories.value.splice(index, 1);
      if (selectedCategories.value.length === 0) {
        selectedCategories.value.push('All');
      }
    } else {
      const allIndex = selectedCategories.value.indexOf('All');
      if (allIndex !== -1) {
        selectedCategories.value.splice(allIndex, 1);
      }
      selectedCategories.value.push(categoryName);
    }
  }
  filtered.value;
};

const filtered = computed(() => {
  if (selectedCategories.value.includes('All')) {
    emit('update', props.value);
    return props.value;
  }
  const filtered = props.value.filter(item =>
    item.categories.some(category => selectedCategories.value.includes(category))
  );
  emit('update', filtered);
  return filtered;
});

watch([() => props.value, selectedCategories], () => {
  filtered.value;
});
</script>

<template>
  <div class="filter flex gap-2 flex-wrap chip-container py-4">
    <pv-chip v-for="category in categories" :key="category.id" :label="category.name"
             :class="{ 'selected': selectedCategories.includes(category.name) }"
             @click="updateSelection(category.name)" />
  </div>
</template>

<style scoped>
.selected {
  background-color: var(--color-primary-mute) !important;
  color: white !important;
}
</style>