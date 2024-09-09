import {defineField, defineType} from 'sanity'
export const interiorRoofType = defineType({
  name: 'interiorRoof',
  title: 'InteriorRoof',
  type: 'document',
  fields: [
    defineField({
      name: 'Shower',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'Room',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
