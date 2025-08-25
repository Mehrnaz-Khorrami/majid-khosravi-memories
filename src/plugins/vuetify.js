/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
const customLight = {
  dark: false,
  colors: {
    background: "#FAFAFA",
  }
}

// Composables
import { createVuetify } from 'vuetify'
import { fa } from 'vuetify/locale'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  locale:{
    locale: "fa",
    messages: { fa },
    rtl:{
      fa: true
    }
  },
  theme: {
    defaultTheme: 'customLight',
    themes: {
      customLight,
    },
  },
})
