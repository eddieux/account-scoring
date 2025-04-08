<template>
  <Card>
    <template #title>Component Example</template>
    <template #content>
      <p>Count: {{ count }}</p>
      <Button label="Increment" @click="increment" />
    </template>
  </Card>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);

const increment = () => {
  count.value++;
};
</script>

<style scoped>
p {
  margin-bottom: 1rem;
}
</style>
