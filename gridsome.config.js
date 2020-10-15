// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "PUC India",
  plugins: [
    {
      use: '@gridsome/plugin-critical',
      options:{
        paths: ['/'],
        width: 1300,
        height: 900,
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-175318803-2'
      }
    }
  ],
  siteUrl: "https://puc-india.com",
  siteDescription: 'PUC India is an interdiscplinary team of undergraduate engineering students in Projects with Underserved Communities, a humanitarian engineering organization at the Univeristy of Texas at Austin. The team is designing, funding, and constructing crucial infrastructure for the village of Siripudi in Andhra Pradesh, India.',
  pathPrefix: "/puc-india",
  icon: './static/favicon-16x16.png',
  pathPrefix: ''
};
