<template>
  <div class="app-container">
    <div class="columns-container">
      <div class="column first-column">
        <h2>Scoring Weights</h2>
        <div class="slider-container">
          <label for="geography">Geography</label>
          <div class="slider-with-value">
            <Slider v-model="geographyWeight" :min="0" :max="1" :step="0.01" class="w-full" />
            <InputText v-model="geographyWeight" :readonly="true" class="value-display" />
          </div>
        </div>
        <div class="slider-container">
          <label for="size">Size</label>
          <div class="slider-with-value">
            <Slider v-model="sizeWeight" :min="0" :max="1" :step="0.01" class="w-full" />
            <InputText v-model="sizeWeight" :readonly="true" class="value-display" />
          </div>
        </div>
        <div class="slider-container">
          <label for="product">Product</label>
          <div class="slider-with-value">
            <Slider v-model="productWeight" :min="0" :max="1" :step="0.01" class="w-full" />
            <InputText v-model="productWeight" :readonly="true" class="value-display" />
          </div>
        </div>
        <div class="slider-container">
          <label for="adjacency">Adjacency</label>
          <div class="slider-with-value">
            <Slider v-model="adjacencyWeight" :min="0" :max="1" :step="0.01" class="w-full" />
            <InputText v-model="adjacencyWeight" :readonly="true" class="value-display" />
          </div>
        </div>
        <div class="slider-container">
          <label for="techStack">Tech Stack</label>
          <div class="slider-with-value">
            <Slider v-model="techStackWeight" :min="0" :max="1" :step="0.01" class="w-full" />
            <InputText v-model="techStackWeight" :readonly="true" class="value-display" />
          </div>
        </div>
      </div>
      <div class="column second-column">
        <!-- Second column content -->
        <h2>Second Column (800px)</h2>
        <p>This is the second column with 800px width.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Define reactive variables for each slider (0-1 range)
const geographyWeight = ref(0.5);
const sizeWeight = ref(0.5);
const productWeight = ref(0.5);
const adjacencyWeight = ref(0.5);
const techStackWeight = ref(0.5);
</script>

<style scoped>
.app-container {
  max-width: 1250px;
  margin: 0 auto;
  padding: 2rem;
}

.columns-container {
  display: flex;
  gap: 20px;
  width: 100%;
}

.column {
  border: 1px solid #d0d0d0;
  border-radius: 8px;
  padding: 1rem;
}

.first-column {
  width: 400px;
  flex-shrink: 0;
}

.second-column {
  width: 800px;
  flex-shrink: 0;
}

.slider-container {
  margin-bottom: 1.5rem;
}

.slider-container label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.w-full {
  width: 100%;
}

.slider-with-value {
  display: flex;
  align-items: center;
  gap: 10px;
}

.value-display {
  width: 60px;
  text-align: center;
}
</style>
