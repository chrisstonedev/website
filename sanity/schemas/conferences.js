export default {
  title: 'Conferences',
  name: 'conferences',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date'
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'In-person', value: 'in-person'},
          {title: 'Virtual', value: 'virtual'}
        ]
      }
    }
  ]
};
