import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Template } from './Templates.jsx';
import { TemplatesCollection } from '/imports/api/TemplatesCollection';
import { TemplateForm } from './TemplateForm.jsx';

export const App = () => {
  const templates = useTracker( () => TemplatesCollection.find({}, { sort: { createdAt: -1 } }).fetch());
  
  return (
    <div>
      <h1>Welcome to Meteor!</h1>

      <TemplateForm />

      <label htmlFor="template-select">Choose a template color: </label>
      <select name="templates" id="template-select">
          <option value="">--Please choose an option--</option>
          { templates.map(template => <Template key={ template._id } template={ template } />) }
      </select>
    </div>
  );
};
