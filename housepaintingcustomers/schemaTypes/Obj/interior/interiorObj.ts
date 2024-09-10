export default {
  name: 'interior',
  title: 'Interior',
  type: 'object',
  fields: [
    {
      name: 'Wall',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'Roof',
      type: 'array',
      of: [{type: 'interiorRoof'}],
    },
    {
      name: 'Timberwork',
      type: 'boolean',
      initialValue: false,
    },
  ],
}
