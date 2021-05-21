export default {
    name: 'wine',
    title: 'Wine',
    type: 'document',
    fields: [{
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'year',
            title: 'Year',
            type: 'number',
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
            name: 'varietals',
            title: 'Varietals',
            type: 'array',
            of: [{
                type: 'string'
            }],
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'specialAttribute',
            title: 'Special Attribute',
            type: 'string',
        },
        {
            name: 'videoUrl',
            title: 'Video Url',
            type: 'url',
        },
        {
            type: 'object',
            name: 'wineMaking',
            fieldsets: [
              {name: 'keyStats', title: 'Key Stats'}
            ],
            fields: [
              {
                title: 'Name',
                name: 'name',
                type: 'string'
              },
              {
                title: 'Twitter',
                name: 'twitter',
                type: 'string',
                fieldset: 'keyStats'
              },
              {
                title: 'Instagram',
                name: 'instagram',
                type: 'string',
                fieldset: 'keyStats'
              },
              {
                title: 'Facebook',
                name: 'facebook',
                type: 'string',
                fieldset: 'keyStats'
              }
            ]
          },
        {
            name: 'reviews',
            title: 'Reviews',
            type: 'array',
            of: [{
                type: 'reference',
                to: {
                    type: 'reviews'
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