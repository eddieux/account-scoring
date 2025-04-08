<template>
  <div class="app-container">
    <div class="columns-container">
      <div class="column first-column">
        <h2>Scoring Weights</h2>
        <div class="slider-container">
          <label for="location">Location</label>
          <div class="slider-with-value">
            <Slider v-model="locationWeight" :min="0" :max="1" :step="0.1" class="w-full" />
            <InputText v-model="locationWeight" :readonly="true" class="value-display" />
          </div>
        </div>
        <div class="slider-container">
          <label for="size">Size</label>
          <div class="slider-with-value">
            <Slider v-model="sizeWeight" :min="0" :max="1" :step="0.1" class="w-full" />
            <InputText v-model="sizeWeight" :readonly="true" class="value-display" />
          </div>
        </div>
      </div>
      <div class="column second-column">
        <h2>Account List</h2>
        <DataTable :value="sortedRankings" stripedRows>
          <Column field="rank" header="Rank" style="width: 80px;"></Column>
          <Column field="name" header="Name"></Column>
          <Column field="location" header="Location"></Column>
          <Column field="size" header="Size"></Column>
          <Column field="score" header="Score"></Column>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Define reactive variables for each slider (0-1 range)
const locationWeight = ref(0.5);
const sizeWeight = ref(0.5);

// Create balanced array of locations
const locations = ['NA', 'LATAM', 'EMEA', 'APAC', 'NA', 'LATAM', 'EMEA', 'APAC', 'NA', 'LATAM'];

// Modified to get a random size between 1 and 1000
const getRandomSize = () => Math.floor(Math.random() * 1000) + 1;

// Location score mapping
const getLocationScore = (location) => {
  switch(location) {
    case 'NA': return 5;
    case 'EMEA': return 4;
    case 'LATAM': return 3;
    case 'APAC': return 2;
    default: return 0;
  }
};

// Calculate score based on location and size
const calculateScore = (account) => {
  const locationScore = getLocationScore(account.location);
  const sizeScore = account.size / 200;
  return parseFloat((locationScore + sizeScore).toFixed(1));
};

// Base data for the rankings table with imaginary company names
const accountData = ref([
  { name: 'NexusWave', location: locations[0], size: getRandomSize() },
  { name: 'QuantumShift', location: locations[1], size: getRandomSize() },
  { name: 'EchoSphere', location: locations[2], size: getRandomSize() },
  { name: 'VortexTech', location: locations[3], size: getRandomSize() },
  { name: 'AlphaFusion', location: locations[4], size: getRandomSize() },
  { name: 'StellarSync', location: locations[5], size: getRandomSize() },
  { name: 'PulseMatrix', location: locations[6], size: getRandomSize() },
  { name: 'ZenithCore', location: locations[7], size: getRandomSize() },
  { name: 'CrestDigital', location: locations[8], size: getRandomSize() },
  { name: 'NovaLink', location: locations[9], size: getRandomSize() },
]);

// Computed property to calculate scores, sort, and assign ranks
const sortedRankings = computed(() => {
  return accountData.value
    .map(account => ({
      ...account,
      score: calculateScore(account)
    }))
    .sort((a, b) => b.score - a.score)  // Sort by score descending
    .map((account, index) => ({
      ...account,
      rank: index + 1
    }));
});
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
  width: 320px;
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

.caret-icon {
  font-size: 1.4rem;
  font-weight: bold;
}

.caret-icon.up {
  color: green;
  font-weight: 800;
}

.caret-icon.down {
  color: red;
  font-weight: 800;
}
</style>
