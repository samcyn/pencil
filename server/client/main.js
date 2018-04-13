import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import { Session } from 'meteor/session';

import { routes } from '../imports/routes/routes';



Meteor.startup(() => {
  render(routes, document.getElementById('app'));
});
