import { Meteor } from 'meteor/meteor';
import { TemplatesCollection } from '/imports/api/TemplatesCollection';

const insertTemplate = color => TemplatesCollection.insert({ color: color });

Meteor.startup(() => {
  if (TemplatesCollection.find().count() === 0) {
    [
      '#cc88da',
      '#89aa43',
      '#a2a289'
    ].forEach(insertTemplate)
  }
});
