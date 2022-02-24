import {join, resolve} from 'pathe'
import { defineNuxtModule } from '@nuxt/kit'
import type { Nuxt } from '@nuxt/schema'

export default defineNuxtModule({
    name: 'catalog',
    configKey: 'catalog',
    setup(options: any, nuxt: Nuxt) {
        nuxt.hook('components:dirs', (dirs) => {
            dirs.push({
                path: join(__dirname, 'components'),
                prefix: options.prefix ?? 'catalog'
            })
        })

        nuxt.hook('autoImports:dirs', (dirs) => {
            dirs.push(resolve(__dirname, './composables'))
        })
    }
})
