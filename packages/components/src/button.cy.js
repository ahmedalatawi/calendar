import React from 'react';
import { composeStories } from '@storybook/testing-react';
import { mount } from 'cypress/react18';
import * as stories from '../stories/Button.stories';

// compile the "Button" story with the library
const { Primary } = composeStories(stories);

describe('InputText component', () => {
  it('should mount the component', () => {
    // and mount the story using @cypress/react18 library
    mount(<Primary />);
  });
});
