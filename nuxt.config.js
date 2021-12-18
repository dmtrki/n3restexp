import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
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
        gqlurl: ''
    },
    css: [
        '@/assets/scss/common.scss'
    ],
    modules: [
    ],
    buildModules: [
        '~/modules/mmm.js',
        '@vueuse/nuxt/module',
        "@nuxt3-graphql/urql",
        "@nuxt3-graphql/codegen",
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
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/scss/system.scss";',
                },
            },
        },
        server: {
            port: 3335
        },
        ssr: {
            target: 'webworker'
        }
    }
})
