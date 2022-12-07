import { defineUserConfig, defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
    base: '/short-number-docs/',
    lang: 'en-US',
    title: 'Short number',
    description: 'Lightweight package that shortens given number by taking digits and adding K, M, B or T after them',
    plugins: [
        searchPlugin({
            locales: {
                '/': {
                    placeholder: 'Search',
                },
            },
        })
    ],
    theme: defaultTheme({
        navbar: [
            {
                text: 'Documentation',
                link: '/',
            },
            {
                text: 'Usage example',
                link: 'https://replit.com/@SerhiiCho/Usage-of-short-number-package',
            },
            {
                text: 'GitHub',
                link: 'https://github.com/SerhiiCho/short-number',
            },
            {
                text: 'Changelog',
                link: 'https://github.com/SerhiiCho/short-number/blob/master/CHANGELOG.md',
            },
            {
                text: 'About author',
                link: 'https://serhii.io/about-me?welcome=keH13',
            },
        ],
    }),
})
