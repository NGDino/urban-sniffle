export default {
  name: 'wine',
  title: 'Wine',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string',
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
      of: [
        {type: 'string'}
      ],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'videoUrl',
      title: 'Video Url',
      type: 'url',
    },
    // {
    //   name: 'awards',
    //   title: 'Awards',
    //   type: 'array',
    //   of: [{
    //     type: 'reference',
    //     to: [{type: 'awards'}]
    //   }]
    // },
    {
      name: 'reviews',
      title: 'Reviews',
      type: 'array',
      of: [{type: 'reference', to: {type: 'Reviews'}}],
    },
    production
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}


