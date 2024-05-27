const CONSTANTS = {
    NAV_LINKS: [
      {
        name: 'Home',
        url: '/'
      },
      {
        name: 'About',
        url: '/about'
      },
      {
        name: 'Services',
        url: '/services'
      },
      {
        name: 'Cars',
        url: '/cars',
        dropdown: [
          {
            name: 'SUVs',
            url: '/cars/suvs',
            dropdown: [
              {
                name: 'Models',
                models: ['CR-V', 'Rogue', 'Escape', 'RAV4', 'Tucson']
              }
            ]
          },
          {
            name: 'Sedans',
            url: '/cars/sedans',
            dropdown: [
              {
                name: 'Models',
                models: ['Corolla', 'Civic', 'Accord', 'Camry', 'Altima']
              }
            ]
          },
          {
            name: 'Trucks',
            url: '/cars/trucks',
            dropdown: [
              {
                name: 'Models',
                models: ['F-150', 'Silverado', 'Ram 1500', 'Tundra', 'Titan']
              }
            ]
          }
        ]
      },
      {
        name: 'Pages',
        url: '/pages',
        dropdown: [
          {
            name: 'Page 1',
            url: '/pages/page1'
          },
          {
            name: 'Page 2',
            url: '/pages/page2'
          }
        ]
      },
      {
        name: 'Blog',
        url: '/blog'
      },
      {
        name: 'Contact',
        url: '/contact'
      }
    ]
  };
  

  
  export default CONSTANTS;
  