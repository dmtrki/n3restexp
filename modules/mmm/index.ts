import {join, resolve} from 'pathe'
import { defineNuxtModule } from '@nuxt/kit'
import type { Nuxt } from '@nuxt/schema'
import {decl} from "postcss";

export interface ModuleOptions {
    prefix?: string,
}

export default defineNuxtModule<ModuleOptions>({
    name: 'nuxt-mmm-base-ui',
    configKey: 'mmm',
    defaults: {
        prefix: 'mmm'
    },
    setup(options: any, nuxt: Nuxt) {
        nuxt.hook('components:dirs', (dirs) => {
            dirs.push({
                path: join(__dirname, 'components'),
                prefix: options.prefix
            })
        })

        nuxt.hook('autoImports:dirs', (dirs) => {
            dirs.push(resolve(__dirname, './composables'))
        })
    }
})

declare interface NuxtOptions {
    mmm?: object
}