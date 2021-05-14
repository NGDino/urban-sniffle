export default {
    name: 'staff',
    title: 'Staff',
    type: 'document',
    fields: [{
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'position',
            title: 'Position',
            type: 'string'
        },
        {
            name: 'favoriteWine',
            title: 'Favorite Wine',
            type: 'string'
        },
        {
            name: 'staffImage',
            title: 'Staff Image',
            type: 'image',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },

    ],

    preview: {
        select: {
            title: 'name',
            media: 'staffImage',
        },

    },
}