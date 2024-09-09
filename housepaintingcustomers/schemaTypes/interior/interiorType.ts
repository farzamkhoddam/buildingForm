import {defineField, defineType} from 'sanity'
export const interiorType = defineType({
  name: 'interior',
  title: 'Interior',
  type: 'document',
  fields: [
    defineField({
      name: 'Wall',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'Roof',
      type: 'reference',
      to: [{type: 'interiorRoof'}],
    }),
    defineField({
      name: 'Timberwork',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
