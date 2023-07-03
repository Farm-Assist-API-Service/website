export const menu = {
    items: [
        { id: 0, title: 'Home', url: "/", /* onClick() { console.log('Home') } */ },
        { id: 1, title: 'About Us', url: "/#about-us" },
        { id: 2, title: 'Services', url: "/#services" },
        { id: 3, title: 'Features', url: "/#features" },
        { id: 4, title: 'Testimonials', url: "/#testimonials" }
    ]
}

export const pageLinksFst = [
    {
        id: 10,
        group: {
            name: "Features",
            pages: [
                { id: 0, name: 'Consultancy', link: '/#' },
                { id: 1, name: 'Farm Assist', link: '/#'},
                { id: 2, name: 'Community', link: '/#'}
            ]
        },     
    },
    {
        id: 11,
        group: {
            name: "Company",
            pages: [
                { id: 3, name: 'Farming', link: '/#' },
                { id: 4, name: 'Technology', link: '/#'},
            ]
        },     
    },
]

export const pageLinksSnd = [
    {
        id: 12,
        group: {
            name: "Help",
            pages: [
                { id: 5, name: 'Knowledge Base', link: '/#' },
                { id: 6, name: 'Support', link: '/#'},
                { id: 7, name: 'Grants', link: '/#'},
            ]
        },     
    },
    {
        id: 13,
        group: {
            name: "Legal",
            pages: [
                { id: 8, name: 'Privacy Policy', link: '/#' },
                { id: 9, name: 'Terms & Conditions', link: '/#'}
            ]
        },     
    },
]