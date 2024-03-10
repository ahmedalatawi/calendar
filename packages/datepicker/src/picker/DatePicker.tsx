import React, { useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import { HeaderSelector, DaySelector, MonthSelector, YearSelector } from '@reactcalendar/components'

import '@reactcalendar/components/dist/index.css'

type View = {
  month: boolean
  year: boolean
}

function DatePicker() {
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

export default DatePicker
