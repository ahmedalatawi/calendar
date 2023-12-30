import React, { ReactNode, memo, useState } from 'react'
import { NUMBER_OF_DAY_ROWS, NUMBER_OF_WEEKDAYS } from '../../constants'
import { getCalendarStartDate } from '../../utils/dates'
import { addDay, getDate, getTodayDate, getWeekdaysShort } from '../../utils/dayjsUtil'
import type { Dayjs } from 'dayjs'
import classNames from 'classnames'
import useClassNames from '../../hooks/useClassNames'

interface DayCellProps {
  row: number
  weekday: number
  today: Dayjs
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

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Initial date - default is today's date */
  date?: Dayjs
  /** Callback function when a date is selected */
  onSelectDate?: (date: Dayjs) => void
}

function DaySelector({ className = 'rc-day-selector', date, onSelectDate, ...props }: Props) {
  const today = getTodayDate()
  const [selectedDate, setSelectedDate] = useState(date ?? today)
  const calendarStartDate = getCalendarStartDate(selectedDate)

  const handleSelectDate = (date: Dayjs) => {
    setSelectedDate(date)
    onSelectDate?.(date)
  }

  return (
    <div className={className} {...props}>
      <Header classNamePrefix={className} />
      {Array.from({ length: NUMBER_OF_DAY_ROWS }).map((_, row) => (
        <DayCellRows key={row} classNamePrefix={className}>
          {Array.from({ length: NUMBER_OF_WEEKDAYS }).map((_, weekday) => (
            <DayCell
              classNamePrefix={className}
              key={weekday}
              row={row}
              weekday={weekday}
              today={today}
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

const DayCell = ({ row, weekday, calendarStartDate, selectedDate, today, classNamePrefix, onSelect }: DayCellProps) => {
  const { getClassNames } = useClassNames()

  const date = addDay(calendarStartDate, row * NUMBER_OF_WEEKDAYS + weekday)
  const day = getDate(date)

  const className = `${classNamePrefix}-cell`

  return (
    <span
      className={classNames(className, { ...getClassNames(className, date, selectedDate, today) })}
      onClick={() => onSelect(date)}
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
