import React from 'react'
import DayPicker from '../src/pickers/DayPicker/DayPicker'

export default {
  title: 'Example/DayPicker',
  component: DayPicker,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

// export default {
//   title: "TestComponent"
// };

export const Default = () => <DayPicker />
