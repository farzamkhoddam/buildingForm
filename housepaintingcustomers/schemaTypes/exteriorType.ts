import {defineField, defineType} from 'sanity'
export const exteriorType = defineType({
  name: 'exterior',
  title: 'Exterior',
  type: 'document',
  fields: [
    defineField({
      name: 'Roof',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'BrickWall',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'Floor',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'Eaves',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'Facia',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'Render',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'Gutter',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
