import { defineUserConfig, defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
    base: '/timeago-docs/',
    lang: 'en-US',
    title: 'Timeago',
    description: 'Lightweight package that shortens given number by taking digits and adding K, M, B or T after them',
    head: [
        ['link', { rel: 'icon', href: '/images/favicon.png' }],
    ],
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
        logo: '/images/logo.png',
        navbar: [
            {
                text: 'Documentation',
                link: '/documentation',
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
                link: 'https://serhii.io/about-me',
            },
        ],
    }),
})
