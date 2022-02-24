import { defineNuxtConfig } from 'nuxt3'
import * as path from "path";

export default defineNuxtConfig({
    dev: true,
    meta: {
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    publicRuntimeConfig: {
        GRAPHQL_API: '',
        LOG: 3
    },
    css: [
        '@/assets/scss/common.scss'
    ],
    modules: [
    ], // https://debugjs.net/
    buildModules: [
        '@vueuse/nuxt/module',
        "@nuxt3-graphql/urql",
        "@nuxt3-graphql/codegen",
        '@pinia/nuxt',
        {
            name: 'mmm',
            handler: '~/modules/mmm'
        },
        {
            name: 'cart',
            handler: '~/modules/cart'
        },
        {
            name: 'catalog',
            handler: '~/modules/catalog'
        }
    ],
    urql: {
        url: 'http://restoreca.api/graphql'
    },
    build: {
        transpile: [
            'vant',
            '@urql/vue',
            'tslib'
        ]
    },
    vue: {
        compilerOptions: {
            directiveTransforms: {
                touch: () => ({
                    props: [],
                    needRuntime: true
                })
            }
        }
    },
    vite: {
        resolve: {
            alias: {
                'node_modules': path.resolve(__dirname, './node_modules'),
                'assets': path.resolve(__dirname, './assets')
            }
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/scss/system.scss";',
                },
            },
        },
    }
})
