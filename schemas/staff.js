export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
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
      name: 'favorite-wine',
      title: 'Favorite Wine',
    
    },
    {
      name: 'staff-image',
      title: 'Staff Image',
      type: 'image',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
    },
    
  ],

  preview: {
    select: {
      title: 'Name',
      media: 'staff-image',
    },
    prepare(selection) {
      const {name} = selection
      return Object.assign({}, selection, {
        subtitle: name && `by ${name}`,
      })
    },
  },
}
