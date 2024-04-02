export default {
  name: 'employee',
  type: 'document',
  title: 'Employee',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Photo',
    },
    {
      name: 'position',
      type: 'string',
      title: 'Position',
    },
    {
      name: 'department',
      type: 'reference',
      title: 'Department',
      to: [{type: 'department'}],
    },
  ],
}
