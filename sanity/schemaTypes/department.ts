export default {
  name: 'department',
  type: 'document',
  title: 'Departments',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of Department',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Department Slug',
      options: {
        source: 'name',
      },
    },
  ],
}
