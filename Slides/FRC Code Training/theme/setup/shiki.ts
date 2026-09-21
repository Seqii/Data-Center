import { defineShikiSetup } from '@slidev/types'
import theme from './mparors-dark.json'

export default defineShikiSetup(() => ({
  themes: { dark: theme, light: theme },
}))
