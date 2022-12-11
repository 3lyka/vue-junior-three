import { createApp } from 'vue'
import App from './App.vue'
import '/node_modules/bootstrap/dist/css/bootstrap.css'
import components from '@/ui-elements/'

const app = createApp(App)
components.forEach(component => {
	app.component(component.name, component)
})
app.mount('#app');