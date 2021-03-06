export default {
    name: 'winery',
    title: 'Winery',
    type: 'document',
    fields: [{
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'about',
            title: 'About',
            type: 'text',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },


        {
            name: 'flights',
            title: 'Flights',
            type: 'array',
            of: [{
                type: 'reference',
                to: {
                    type: 'flight'
                }
            }],
        },
        {
            name: 'staff',
            title: 'Staff',
            type: 'array',
            of: [{
                type: 'reference',
                to: {
                    type: 'staff'
                }
            }],
        },
        // production
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
        },
    },
}