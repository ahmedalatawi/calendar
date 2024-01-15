import React, { ReactNode } from 'react'
import { getCalendarStartDate } from '../../utils/dates'
import { getTodayDate } from '../../utils/dayjsUtil'
import type { Dayjs } from 'dayjs'
import classNames from 'classnames'
import CellRows from './CellRows'

interface Props {
  classNamePrefix: string
  date: Dayjs
  selectedDate: Dayjs
  numberOfColumns: number
  numberOfRows: number
  header?: ReactNode
  onSelect?: (date: Dayjs) => void
  cellDate: (date: Dayjs, number: number) => Dayjs
  cellValue: (date: Dayjs) => number | string
  cellClassNames: (
    className: string,
    date: Dayjs,
    calendarDate: Dayjs,
    selectedDate: Dayjs,
    today: Dayjs,
  ) => { [key: string]: boolean }
}

function CellsMatrix({
  classNamePrefix,
  date,
  selectedDate,
  header,
  numberOfColumns,
  numberOfRows,
  onSelect,
  cellDate,
  cellValue,
  cellClassNames,
}: Props) {
  const today = getTodayDate()
  const calendarStartDate = getCalendarStartDate(date)
  const className = `${classNamePrefix}-cell`

  const handleSelectDate = (date: Dayjs) => {
    onSelect?.(date)
  }

  return (
    <div className={classNamePrefix}>
      {header}
      {Array.from({ length: numberOfRows }).map((_, row) => (
        <CellRows key={row} classNamePrefix={classNamePrefix}>
          {Array.from({ length: numberOfColumns }).map((_, weekday) => {
            const calendarDate = cellDate(calendarStartDate, row * numberOfColumns + weekday)
            const calendarDay = cellValue(calendarDate)

            return (
              <span
                key={weekday}
                className={classNames(className, {
                  ...cellClassNames(className, date, calendarDate, selectedDate, today),
                })}
                onClick={() => handleSelectDate(calendarDate)}
              >
                {calendarDay}
              </span>
            )
          })}
        </CellRows>
      ))}
    </div>
  )
}

export default CellsMatrix
