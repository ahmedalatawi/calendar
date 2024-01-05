import React, { useState } from 'react'
import ChevronLeftIcon from '../../icons/ChevronLeftIcon'
import ChevronRightIcon from '../../icons/ChevronRightIcon'
import { addMonth, getMonth, getMonthsShort, getTodayDate, getYear } from '../../utils/dayjsUtil'
import dayjs from 'dayjs'

interface Props {
  date?: Date
  onSelect?: (date: Date) => void
}

function HeaderSelector({ date, onSelect }: Props) {
  const today = getTodayDate()
  const shortMonths = getMonthsShort()

  const initialDate = date ? dayjs(date) : today

  const [selectedDate, setSelectedDate] = useState(initialDate)

  const month = getMonth(selectedDate)
  const year = getYear(selectedDate)

  const handleOnNextMonth = () => {
    const date = addMonth(selectedDate, 1)
    setSelectedDate(date)
    onSelect?.(dayjs(date).toDate())
  }

  const handleOnPrevMonth = () => {
    const date = addMonth(selectedDate, -1)
    setSelectedDate(date)
    onSelect?.(dayjs(date).toDate())
  }

  return (
    <div className='rc-header-selector'>
      <ChevronLeftIcon onClick={() => handleOnPrevMonth()} />
      <div className='rc-header-selector-container'>
        <span className='rc-header-selector-title'>{shortMonths[month]}</span>
        <span className='rc-header-selector-title'>{year}</span>
      </div>
      <ChevronRightIcon onClick={() => handleOnNextMonth()} />
    </div>
  )
}

export default HeaderSelector
