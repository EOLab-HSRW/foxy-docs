import DefaultTheme from 'vitepress/theme'

import Steps from './components/Steps.vue'
import Step from './components/Step.vue'
import Troubleshooting from './components/Troubleshooting.vue'

import './custom.css'

export default {
  extends: DefaultTheme,

  enhanceApp({ app }) {
    app.component('Steps', Steps)
    app.component('Step', Step)
    app.component('Troubleshooting', Troubleshooting)
  },
}
