const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')

module.exports = {
    plugins: [
      searchPlugin({
        // options
        locales: {
          '/': {
            placeholder: 'Search',
          },
        },
      }),
    ],
    lang: 'en-US',
    title: 'Ford GitHub User Guide',
    description: 'This is my first VuePress site',
    theme: defaultTheme({
      // set config here
      logo: '/sde.png',
      colorMode: 'light',
      colorModeSwitch: 'false',
      navbar: [
        {
          text: 'CDSID',
          link: '/',
        },
      ],
      head: [
        ['link', { rel: 'icon', href: '/favicon.png' }],
        ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
        ['link', { rel: "shortcut icon", href: "/favicon.ico"}],
        ['link', { rel: "icon",  sizes: "32x32", href: "/favicon-32x32.png"}],
        ['link', { rel: "icon",  sizes: "16x16", href: "/favicon-16x16.png"}],
        ['script',{ src: '/tracker.js' }]
      ],
      sidebar: [
        {
          text: "FORD GitHub",
          collapsible: true, 
          sidebarDepth: 1,
          children: [
            "/ch01/0-Overview",
            "/ch01/1-github-user-agreement"
          ]
        },
        {
          text: "Fundamentals",
          collapsible: true,
          sidebarDepth: 1,
          children: [
            "/ch02/0-why-github",
            "/ch02/1-organization",
            "/ch02/2-repository",
            "/ch02/3-Teams-and-Roles",
            "/ch02/4-branches",
            "/ch02/5-rate-limiting"
          ]
        },      
        {
          text: "Setup",
          collapsible: true,
          sidebarDepth: 1,
          children: [
            "/ch03/0-Request-GitHub-access",
            "/ch03/1-Setting-up-Git-in-local",
            "/ch03/2-create-a-ssh-key",
            "/ch03/3-how-to-create-pat-token",
            "/ch03/4-github-desktop",
            "/ch03/5-setup-gitlfs",
            "/ch03/6-who-can-request-github-license"
          ]
        },
        {
          text: "How-Tos",
          collapsible: true,
          sidebarDepth: 1,
          children: [
            "/ch04/0-Fix-an-ADFS-Login-Issue",
            "/ch04/1-offboarding-a-user",
            "/ch04/2-Add-custom-status-descriptions-to-Jenkinsfile",
            "/ch04/3-Change-Public-repo-to-Private-repo",
            "/ch04/4-How-to-request-GitHub-access-for-Proxy-Account",
            "/ch04/5-Login-to-GitHub-with-Proxy-ID",
            "/ch04/6-oauth-access-methods",
            "/ch04/7-how-to-audit-access",
            "/ch04/8-git-executable-bit",
            "/ch04/9-how-to-submit-github-request",
            "/ch04/10-how-to-submit-github-incident",
            "/ch04/11-github-escalation-process",
            "/ch04/12-dependabot",
            "/ch04/13-git-branch-strategy"
          ]
        },
        {
          text: "Integration",
          collapsible: true,
          sidebarDepth: 1,
          children: [
            "/ch05/0-GitHub-to-Jenkins-Integration",
            "/ch05/1-GitHub-to-Rally"
          ]
        },
        {
          text: "References",
          collapsible: true,
          sidebarDepth: 1,
          children: [
            "/ch06/0-references"
          ] 
        }
      ],
    }),
    
  }