import React, { ReactNode, useState } from 'react'
import { getCalendarStartDate } from '../../utils/dates'
import { getTodayDate } from '../../utils/dayjsUtil'
import type { Dayjs } from 'dayjs'
import classNames from 'classnames'
import CellRows from './CellRows'

interface Props {
  classNamePrefix: string
  date?: Dayjs
  numberOfColumns: number
  numberOfRows: number
  header?: ReactNode
  onSelect?: (date: Dayjs) => void
  cellDate: (date: Dayjs, number: number) => Dayjs
  cellValue: (date: Dayjs) => number | string
  cellClassNames: (
    className: string,
    currentDate: Dayjs,
    date: Dayjs,
    selectedDate: Dayjs,
    today: Dayjs,
  ) => { [key: string]: boolean }
}

function CellsMatrix({
  classNamePrefix,
  date,
  header,
  numberOfColumns,
  numberOfRows,
  onSelect,
  cellDate,
  cellValue,
  cellClassNames,
}: Props) {
  const today = getTodayDate()
  const currentDate = date ?? today

  const [selectedDate, setSelectedDate] = useState(currentDate)

  const calendarStartDate = getCalendarStartDate(currentDate)

  const className = `${classNamePrefix}-cell`

  const handleSelectDate = (date: Dayjs) => {
    setSelectedDate(date)
    onSelect?.(date)
  }

  return (
    <div className={classNamePrefix}>
      {header}
      {Array.from({ length: numberOfRows }).map((_, row) => (
        <CellRows key={row} classNamePrefix={classNamePrefix}>
          {Array.from({ length: numberOfColumns }).map((_, weekday) => {
            const date = cellDate(calendarStartDate, row * numberOfColumns + weekday)
            const value = cellValue(date)

            return (
              <span
                key={weekday}
                className={classNames(className, {
                  ...cellClassNames(className, currentDate, date, selectedDate, today),
                })}
                onClick={() => handleSelectDate(date)}
              >
                {value}
              </span>
            )
          })}
        </CellRows>
      ))}
    </div>
  )
}

export default CellsMatrix
