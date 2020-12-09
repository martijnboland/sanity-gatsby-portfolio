export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fd0b2d50f7bd6d89fa030e0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-jeyykbtf',
                  apiId: '8d5153e3-5fe0-4a59-8c53-76288d82e26c'
                },
                {
                  buildHookId: '5fd0b2d5608225fd145d213b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ky9ybdhw',
                  apiId: 'dd03580d-d4bd-4e35-9a01-492212c4c883'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/martijnboland/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ky9ybdhw.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
