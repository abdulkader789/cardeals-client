const CONSTANTS = {
    // Navlinks for the Navbar
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
                    url: '/cars/suvs'
                },
                {
                    name: 'Sedans',
                    url: '/cars/sedans'
                },
                {
                    name: 'Trucks',
                    url: '/cars/trucks'
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
    ],
    // Other constants...
};

export default CONSTANTS;
