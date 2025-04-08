import { createApp } from 'vue'
import App from './App.vue'

// Import PrimeVue
import PrimeVue from 'primevue/config'

// Import PrimeVue CSS files
import 'primevue/resources/themes/lara-light-blue/theme.css' // theme
import 'primevue/resources/primevue.min.css' // core css
import 'primeicons/primeicons.css' // icons

// Import specific PrimeVue components
import Button from 'primevue/button'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Slider from 'primevue/slider'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

// Create app
const app = createApp(App)

// Use PrimeVue
app.use(PrimeVue)

// Register components
app.component('Button', Button)
app.component('Card', Card)
app.component('InputText', InputText)
app.component('Slider', Slider)
app.component('DataTable', DataTable)
app.component('Column', Column)

// Mount app
app.mount('#app')
