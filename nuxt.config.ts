import {defineNuxtConfig} from "nuxt/config";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    // nitro: { preset: "vercel", },
    css: ['~/assets/css/tailwind.css'],
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {}
                }
            }
        }
    }

})
