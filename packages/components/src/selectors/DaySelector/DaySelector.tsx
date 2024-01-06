import React, { ReactNode, memo, useState } from 'react'
import { NUMBER_OF_DAY_ROWS, NUMBER_OF_WEEKDAYS } from '../../constants'
import { getCalendarStartDate } from '../../utils/dates'
import { addDay, getDate, getTodayDate, getWeekdaysShort } from '../../utils/dayjsUtil'
import type { Dayjs } from 'dayjs'
import classNames from 'classnames'
import useClassNames from '../../hooks/useClassNames'
import dayjs from 'dayjs'

interface DayCellProps {
  row: number
  weekday: number
  today: Dayjs
  currentDate: Dayjs
  classNamePrefix: string
  calendarStartDate: Dayjs
  selectedDate: Dayjs
  onSelect: (date: Dayjs) => void
}

interface DayCellRowsProps {
  classNamePrefix?: string
  children: ReactNode
}

interface HeaderProps {
  classNamePrefix?: string
}

interface Props {
  classNamePrefix?: string
  /** Initial date - default is today's date */
  date?: Date
  /** Callback function when a date is selected */
  onSelect?: (date: Date) => void
}

function DaySelector({ classNamePrefix = 'rc-day-selector', date, onSelect }: Props) {
  const today = getTodayDate()
  const currentDate = date ? dayjs(date) : today

  const [selectedDate, setSelectedDate] = useState(currentDate)

  const calendarStartDate = getCalendarStartDate(currentDate)

  const handleSelectDate = (date: Dayjs) => {
    setSelectedDate(date)
    onSelect?.(dayjs(date).toDate())
  }

  return (
    <div className={classNamePrefix}>
      <Header classNamePrefix={classNamePrefix} />
      {Array.from({ length: NUMBER_OF_DAY_ROWS }).map((_, row) => (
        <DayCellRows key={row} classNamePrefix={classNamePrefix}>
          {Array.from({ length: NUMBER_OF_WEEKDAYS }).map((_, weekday) => (
            <DayCell
              classNamePrefix={classNamePrefix}
              key={weekday}
              row={row}
              weekday={weekday}
              today={today}
              currentDate={currentDate}
              selectedDate={selectedDate}
              calendarStartDate={calendarStartDate}
              onSelect={handleSelectDate}
            />
          ))}
        </DayCellRows>
      ))}
    </div>
  )
}

const DayCell = ({
  row,
  weekday,
  currentDate,
  calendarStartDate,
  selectedDate,
  today,
  classNamePrefix,
  onSelect,
}: DayCellProps) => {
  const { getClassNames } = useClassNames()

  const calendarDate = addDay(calendarStartDate, row * NUMBER_OF_WEEKDAYS + weekday)
  const day = getDate(calendarDate)

  const className = `${classNamePrefix}-cell`

  return (
    <span
      className={classNames(className, { ...getClassNames(className, currentDate, calendarDate, selectedDate, today) })}
      onClick={() => onSelect(calendarDate)}
    >
      {day}
    </span>
  )
}

const DayCellRows = ({ classNamePrefix, children }: DayCellRowsProps) => {
  const className = `${classNamePrefix}-cell-row`

  return <div className={className}>{children}</div>
}

const Header = memo(function Header({ classNamePrefix }: HeaderProps) {
  const className = `${classNamePrefix}-header`
  const weekdayShorts = getWeekdaysShort()

  return (
    <div className={className}>
      {weekdayShorts.map((weekdayShort) => (
        <span className={`${className}-cell`} key={weekdayShort}>
          {weekdayShort}
        </span>
      ))}
    </div>
  )
})

export default DaySelector
