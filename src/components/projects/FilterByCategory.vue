<script setup>
import { ref, computed, defineProps, defineEmits, watch } from 'vue';

const props = defineProps(['value']);
const emit = defineEmits(['update']);
const selectedCategories = ref(['All']);
const categories = ref([
  { id: 1, name: 'All' },
  { id: 2, name: 'Web' },
  { id: 3, name: 'Mobile' },
  { id: 4, name: 'Desktop' },
  { id: 5, name: 'Other' },
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
    selectedCategories.value.includes(item.category)
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