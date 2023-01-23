// FILE: main.js
import './style.css'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'

import { createApp } from 'vue'
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/pt-BR'
import quasarIconSet from 'quasar/icon-set/svg-ionicons-v5'
import routes from './router/routes.js'
// Import icon libraries

import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/ionicons-v4/ionicons-v4.css'
import '@quasar/extras/bootstrap-icons/bootstrap-icons.css'


// Import Quasar css
import 'quasar/src/css/index.sass'
import '../src/reset.css'




const app = createApp(App)
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
  lang: quasarLang,
  iconSet: quasarIconSet,
})
app.config.ignoredElements = [/^ion-/]

app.use(routes)

// Assumes you have a <div id="app"></div> in your index.html
app.mount('#app')