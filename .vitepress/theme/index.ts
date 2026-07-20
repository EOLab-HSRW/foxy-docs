import DefaultTheme from 'vitepress/theme'

import Steps from './components/Steps.vue'
import Step from './components/Step.vue'

import './custom.css'

export default {
  extends: DefaultTheme,

  enhanceApp({ app }) {
    app.component('Steps', Steps)
    app.component('Step', Step)
  },
}
