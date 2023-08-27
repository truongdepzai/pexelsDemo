import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router  from './router/router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBell, faSearch,faCaretDown, faHeart, faBookmark, faDownload  } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
// import vuex from './vuex'

library.add(faBell,faSearch,faCaretDown,faHeart,faBookmark,faDownload)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
// app.use(vuex)
app.mount('#app')
