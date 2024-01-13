import React, { useState } from 'react'
import DaySelector from '../src/selectors/DaySelector/DaySelector'

import './styles.css'
import { WithDaySelector } from './HeaderSelector.stories'
import dayjs from 'dayjs'

export default {
  title: 'Example/DaySelector',
  component: DaySelector,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Default = () => {
  const [date, setDate] = useState(dayjs())

  return (
    <>
      <p>
        <span className='demo-date-text'>Date: {date.format('MM/DD/YYYY')}</span>
      </p>
      <div className='demo-selector-container'>
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
