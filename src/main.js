import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import { loadFromLocalFile } from './utils/storage.js'

const app = createApp(App)
app.use(router)
app.mount('#app')

loadFromLocalFile().then(result => {
  if (result.success) {
    console.log(`✅ 已从本地文件加载 ${result.mergedCount} 条历史记录`)
  }
})
