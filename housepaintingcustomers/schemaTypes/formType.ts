import {defineField, defineType} from 'sanity'
export const formType = defineType({
  name: 'form',
  title: 'Form',
  type: 'document',
  fields: [
    defineField({
      name: 'FullName',
      type: 'string',
      validation: (Rule: {required: () => any}) => Rule.required(),
    }),
    defineField({
      name: 'Address',
      type: 'string',
      validation: (Rule: {required: () => any}) => Rule.required(),
    }),
    defineField({
      name: 'PhoneNumber',
      type: 'string',
      validation: (Rule: {required: () => any}) => Rule.required(),
    }),
    defineField({
      name: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'Date',
      type: 'date',
      validation: (Rule: {required: () => any}) => Rule.required(),
    }),

    defineField({
      name: 'ReminderDate',
      type: 'date',
    }),
    defineField({
      name: 'PropertyPhoto',
      type: 'image',
    }),
    defineField({
      name: 'PropertyOwnership',
      type: 'string',

      options: {
        list: [
          {title: 'Rental', value: 'rental'},
          {title: 'Owner', value: 'owner'},
        ],
      },
    }),
    defineField({
      name: 'ExteriorFields',
      type: 'array',
      of: [{type: 'exterior'}],
    }),
    defineField({
      name: 'InteriorFields',
      type: 'array',
      of: [{type: 'interior'}],
    }),
  ],
})
