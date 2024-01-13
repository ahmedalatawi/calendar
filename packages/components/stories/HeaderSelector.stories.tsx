import React, { useState } from 'react'
import HeaderSelector from '../src/selectors/HeaderSelector/HeaderSelector'
import DaySelector from '../src/selectors/DaySelector/DaySelector'

import './styles.css'
import dayjs from 'dayjs'

export default {
  title: 'Example/HeaderSelector',
  component: HeaderSelector,
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
      <div className='demo-header-container'>
        <HeaderSelector
          date={date}
          onSelect={setDate}
          onClickMonth={(month) => console.log('month: ', month)}
          onClickYear={(year) => console.log('year: ', year)}
        />
      </div>
    </>
  )
}

export const WithDaySelector = () => {
  const today = dayjs()

  const [headerDate, setHeaderDate] = useState(today)
  const [date, setDate] = useState(today)

  return (
    <>
      <p>
        <span className='demo-date-text'>Date: {date.format('MM/DD/YYYY')}</span>
      </p>
      <div className='demo-selector-container'>
        <HeaderSelector date={headerDate} onSelect={setHeaderDate} />
        <DaySelector
          date={headerDate}
          onSelect={(d) => {
            setHeaderDate(d)
            setDate(d)
          }}
        />
      </div>
    </>
  )
}
