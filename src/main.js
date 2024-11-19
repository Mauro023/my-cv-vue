import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Import Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import '@mdi/font/css/materialdesignicons.css';

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi', // Establece MDI como el conjunto de iconos predeterminado
  },
});

createApp(App).use(vuetify).mount('#app');
