import React, { useEffect, useState } from 'react'
import ChevronLeftIcon from '../../icons/ChevronLeftIcon'
import ChevronRightIcon from '../../icons/ChevronRightIcon'
import { addMonth, getMonth, getMonthsShort, getTodayDate, getYear } from '../../utils/dayjsUtil'
import { Dayjs } from 'dayjs'
import { isEqualDate } from '../../utils/dates'
import classNames from 'classnames'
import ChevronLeftDoubleIcon from '../../icons/ChevronLeftDoubleIcon'
import ChevronRightDoubleIcon from '../../icons/ChevronRightDoubleIcon'

interface Props {
  date?: Dayjs
  resetActive?: boolean
  onSelect?: (date: Dayjs) => void
  onClickMonth?: (month: number) => void
  onClickYear?: (year: number) => void
}

function HeaderSelector({ date, resetActive, onSelect, onClickMonth, onClickYear }: Props) {
  const today = getTodayDate()
  const shortMonths = getMonthsShort()

  const initialDate = date ?? today

  const [selectedDate, setSelectedDate] = useState(initialDate)
  const [activeMonth, setActiveMonth] = useState(false)
  const [activeYear, setActiveYear] = useState(false)

  if (!isEqualDate(initialDate, selectedDate)) {
    setSelectedDate(initialDate)
  }

  const month = getMonth(selectedDate)
  const year = getYear(selectedDate)

  useEffect(() => {
    if (resetActive) {
      setActiveMonth(false)
      setActiveYear(false)
    }
  }, [resetActive])

  const handleOnNextMonth = () => {
    const date = addMonth(selectedDate, 1)
    setSelectedDate(date)
    onSelect?.(date)
  }

  const handleOnPrevMonth = () => {
    const date = addMonth(selectedDate, -1)
    setSelectedDate(date)
    onSelect?.(date)
  }

  const handleClickMonth = (month: number) => {
    onClickMonth?.(month)
    setActiveMonth((a) => !a)
    setActiveYear(false)
  }

  const handleClickYear = (year: number) => {
    onClickYear?.(year)
    setActiveYear((a) => !a)
    setActiveMonth(false)
  }

  const LeftIcon = activeYear ? ChevronLeftDoubleIcon : ChevronLeftIcon
  const RightIcon = activeYear ? ChevronRightDoubleIcon : ChevronRightIcon

  return (
    <div className='rc-header-selector'>
      <LeftIcon onClick={() => handleOnPrevMonth()} />
      <div className='rc-header-selector-container'>
        <span
          className={classNames('rc-header-selector-title', { active: activeMonth })}
          onClick={() => handleClickMonth(month)}
        >
          {shortMonths[month]}
        </span>
        <span
          className={classNames('rc-header-selector-title', { active: activeYear })}
          onClick={() => handleClickYear(year)}
        >
          {year}
        </span>
      </div>
      <RightIcon onClick={() => handleOnNextMonth()} />
    </div>
  )
}

export default HeaderSelector
