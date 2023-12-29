import React, { ReactNode, memo } from 'react'
import { NUMBER_OF_DAY_ROWS, NUMBER_OF_WEEKDAYS } from '../../constants'
import { getCalendarStartDate } from '../../utils/dates'
import { addDay, getDate, getTodayDate, getWeekdaysShort } from '../../utils/dayjsUtil'
import type { Dayjs } from 'dayjs'
import classNames from 'classnames'
import useClassNames from '../../hooks/useClassNames'

interface DayCellProps {
  row: number
  weekday: number
  calendarStartDate: Dayjs
  selectedDate: Dayjs
  onSelect: (date: Dayjs) => void
}

interface DayCellRowsProps {
  children: ReactNode
}

interface Props {
  /** Initial date - default is today's date */
  date?: Dayjs
  /** Callback function when a date is selected */
  onSelect?: (date: Dayjs) => void
}

function DaySelector({ date = getTodayDate(), onSelect }: Props) {
  const calendarStartDate = getCalendarStartDate(date)

  return (
    <div className='day-selector'>
      <Header />
      {Array.from({ length: NUMBER_OF_DAY_ROWS }).map((_, row) => (
        <DayCellRows key={row}>
          {Array.from({ length: NUMBER_OF_WEEKDAYS }).map((_, weekday) => (
            <DayCell
              key={weekday}
              row={row}
              weekday={weekday}
              selectedDate={date}
              calendarStartDate={calendarStartDate}
              onSelect={(date) => onSelect?.(date)}
            />
          ))}
        </DayCellRows>
      ))}
    </div>
  )
}

const DayCell = ({ row, weekday, calendarStartDate, selectedDate, onSelect }: DayCellProps) => {
  const { getInCurrentMonthClassName } = useClassNames()

  const date = addDay(calendarStartDate, row * NUMBER_OF_WEEKDAYS + weekday)
  const day = getDate(date)

  return (
    <span
      className={classNames('day-cell', { ...getInCurrentMonthClassName(date, selectedDate) })}
      onClick={() => onSelect(date)}
    >
      {day}
    </span>
  )
}

const DayCellRows = ({ children }: DayCellRowsProps) => {
  return <div className='day-cell-row'>{children}</div>
}

const Header = memo(function Header() {
  const weekdayShorts = getWeekdaysShort()

  return (
    <div className='day-selector-header'>
      {weekdayShorts.map((weekdayShort) => (
        <span className='day-selector-header-cell' key={weekdayShort}>
          {weekdayShort}
        </span>
      ))}
    </div>
  )
})

export default DaySelector
