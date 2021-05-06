export default {
    name: 'flight',
    title: 'Flight',
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
            name: 'wine',
            title: 'Wines',
            type: 'array',
            of: [{
                type: 'reference',
                to: {
                    type: 'wine'
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