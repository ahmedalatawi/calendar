import React, { ReactNode } from 'react'
import { NUMBER_OF_DAY_ROWS, NUMBER_OF_WEEKDAYS } from '../../constants'
import { getCalendarStartDate } from '../../utils/dates'
import { addDay, getDate, getTodayDate } from '../../utils/dayjsUtil'
import type { Dayjs } from 'dayjs'

interface DayCellProps {
  row: number
  weekday: number
  firstDate: Dayjs
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
      {Array.from({ length: NUMBER_OF_DAY_ROWS }).map((_, row) => (
        <DayCellRows key={row}>
          {Array.from({ length: NUMBER_OF_WEEKDAYS }).map((_, weekday) => (
            <DayCell
              key={weekday}
              row={row}
              weekday={weekday}
              firstDate={calendarStartDate}
              onSelect={(date) => onSelect?.(date)}
            />
          ))}
        </DayCellRows>
      ))}
    </div>
  )
}

const DayCell = ({ row, weekday, firstDate, onSelect }: DayCellProps) => {
  const date = addDay(firstDate, row * NUMBER_OF_WEEKDAYS + weekday)
  const day = getDate(date)

  return (
    <span className='day-cell' onClick={() => onSelect(date)}>
      {day}
    </span>
  )
}

const DayCellRows = ({ children }: DayCellRowsProps) => {
  return <div className='day-cell-rows'>{children}</div>
}

export default DaySelector
