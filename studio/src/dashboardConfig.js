export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ed03a0125990a8058b99b8a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-v72raf6c',
                  apiId: '5f959b12-15cc-44d4-b6e9-9faaae84c073'
                },
                {
                  buildHookId: '5ed03a01a2115871af181376',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-as247asn',
                  apiId: 'e77a55d4-3861-4812-a64c-939a7bedbe3c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pramam/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-as247asn.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
