import React, { useState } from 'react'
import DaySelector from '../src/selectors/DaySelector/DaySelector'

import './styles.css'
import { WithDaySelector } from './HeaderSelector.stories'

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

export const Default = () => {
  const today = new Date().setHours(0, 0, 0, 0)
  const [date, setDate] = useState(new Date(today))

  return (
    <>
      <p>
        <span className='selected-date-text-demo'>Selected date: {date.toLocaleDateString()}</span>
      </p>
      <div className='day-selector-demo'>
        <DaySelector
          date={date}
          onSelect={(date) => {
            setDate(date)
          }}
        />
      </div>
    </>
  )
}

export const WithHeaderSelector = () => <WithDaySelector />
