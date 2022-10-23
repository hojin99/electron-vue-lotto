import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fa0, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9 } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
// library.add(faCircle1)
library.add(fa0)
library.add(fa1)
library.add(fa2)
library.add(fa3)
library.add(fa4)
library.add(fa5)
library.add(fa6)
library.add(fa7)
library.add(fa8)
library.add(fa9)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).use(router).mount('#app')
