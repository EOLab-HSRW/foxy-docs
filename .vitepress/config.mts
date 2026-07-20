import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Foxy Robot",
  description: "Documentation website for the open-source robot foxy-robot",
  base: '/foxy-docs/',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/README' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Assembly', link: '/assembly' },
          { text: 'Robot Setup', link: '/robot-setup' },
          { text: 'User Setup', link: '/user-setup' },
          { text: 'System Overview', link: '/system-overview' },
        ]
      },
      {
        text: 'Exercises',
        items: [
          { text: 'Braitenberg', link: '/docs/exercises/braitenberg' },
        ]
      },
      {
        text: 'For ROS Developers',
        items: [
          { text: 'Developer guide', link: '/docs/developers/guide' },
        ]
      },
      {
        text: 'For System Developers',
        items: [
          { text: 'System (OS) overview', link: '/docs/system/overview' },
        ]
      },
      {
        text: 'For Hardware Developers',
        items: [
          { text: 'Pinouts', link: '/docs/hardware/pinouts' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/EOLab-HSRW/foxy-robot' }
    ]
  },
})
