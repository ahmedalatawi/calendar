import React, { useState } from 'react'
import HeaderSelector from '../src/selectors/HeaderSelector/HeaderSelector'

import './styles.css'

export default {
  title: 'Example/HeaderSelector',
  component: HeaderSelector,
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

export const Default = () => {
  const today = new Date().setHours(0, 0, 0, 0)
  const [date, setDate] = useState(new Date(today))

  return (
    <>
      <p>
        Selected date: <span className='selected-date-text-demo'>{date.toLocaleDateString()}</span>
      </p>
      <div className='header-selector-demo'>
        <HeaderSelector date={date} onSelect={setDate} />
      </div>
    </>
  )
}
