import React, { useState } from 'react'
import HeaderSelector from '../src/selectors/HeaderSelector/HeaderSelector'
import DaySelector from '../src/selectors/DaySelector/DaySelector'
import MonthSelector from '../src/selectors/MonthSelector/MonthSelector'
import YearSelector from '../src/selectors/YearSelector/YearSelector'
import dayjs, { Dayjs } from 'dayjs'

import './styles.css'

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

type View = {
  month: boolean
  year: boolean
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
  const [view, setView] = useState<View>({
    month: false,
    year: false,
  })
  const [resetHeaderActive, setResetHeaderActive] = useState(false)

  const handleClickMonth = (month: number) => {
    console.log('month: ', month)
    setResetHeaderActive(false)
    setView((v) => ({ ...v, month: !v.month, year: false }))
  }

  const handleClickYear = (year: number) => {
    console.log('year: ', year)
    setResetHeaderActive(false)
    setView((v) => ({ ...v, year: !v.year, month: false }))
  }

  const handleSelectMonth = (date: Dayjs) => {
    setHeaderDate(date)
    setResetHeaderActive(true)
    setView({ month: false, year: false })
  }

  const handleSelectYear = (date: Dayjs) => {
    setHeaderDate(date)
    setResetHeaderActive(true)
    setView({ month: false, year: false })
  }

  const handleSelectNextPrevMonth = (date: Dayjs) => {
    setHeaderDate(date)
  }

  return (
    <>
      <p>
        <span className='demo-date-text'>Date: {date.format('MM/DD/YYYY')}</span>
      </p>
      <div className='demo-selector-container'>
        <HeaderSelector
          date={headerDate}
          resetActive={resetHeaderActive}
          onSelect={handleSelectNextPrevMonth}
          onClickMonth={handleClickMonth}
          onClickYear={handleClickYear}
        />
        {!view.month && !view.year && (
          <DaySelector
            date={headerDate}
            selectedDate={date}
            onSelect={(d) => {
              setHeaderDate(d)
              setDate(d)
            }}
          />
        )}
        {view.month && <MonthSelector date={headerDate} selectedDate={date} onSelect={handleSelectMonth} />}
        {view.year && <YearSelector date={headerDate} selectedDate={date} onSelect={handleSelectYear} />}
      </div>
    </>
  )
}
