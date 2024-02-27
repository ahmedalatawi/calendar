import React, { useState } from 'react'
import YearSelector from '../src/selectors/YearSelector/YearSelector'

import './styles.css'
import dayjs from 'dayjs'
import HeaderSelector from '../src/selectors/HeaderSelector/HeaderSelector'

export default {
  title: 'Example/YearSelector',
  component: YearSelector,
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
        <YearSelector
          date={date}
          selectedDate={date}
          onSelect={(date) => {
            setDate(date)
          }}
        />
      </div>
    </>
  )
}

export const WithHeaderSelector = () => {
  const today = dayjs()

  const [headerDate, setHeaderDate] = useState(today)
  const [date, setDate] = useState(today)

  function handleSelectMonth(month: number) {
    const date = headerDate.month(month)
    console.log('date: ', date)
  }

  return (
    <>
      <p>
        <span className='demo-date-text'>Date: {date.format('MM/DD/YYYY')}</span>
      </p>
      <div className='demo-selector-container'>
        <HeaderSelector date={headerDate} onSelect={setHeaderDate} onClickMonth={handleSelectMonth} />
        <YearSelector
          date={headerDate}
          selectedDate={date}
          onSelect={(d) => {
            setHeaderDate(d)
            setDate(d)
          }}
        />
      </div>
    </>
  )
}
