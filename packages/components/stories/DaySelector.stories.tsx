import React from 'react'
import DaySelector from '../src/selectors/DaySelector/DaySelector'

import './styles.css'

export default {
  title: 'Example/DaySelector',
  component: DaySelector,
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

export const Default = () => (
  <div className='DaySelector'>
    <DaySelector />
  </div>
)
