import React from 'react'
import CellsMatrix from '../CellsMatrix/CellsMatrix'
import useClassNames from '../../hooks/useClassNames'
import { addMonth, getMonth, getMonthsShort } from '../../utils/dayjsUtil'
import { Dayjs } from 'dayjs'

interface Props {
  classNamePrefix?: string
  /** Initial date - default is today's date */
  date?: Dayjs
  /** Callback function when a date is selected */
  onSelect?: (date: Dayjs) => void
}

function MonthSelector({ classNamePrefix = 'rc-month-selector', date, onSelect }: Props) {
  const { getMonthCellClassNames } = useClassNames()

  const months = getMonthsShort()
  const getMonthValue = (date: Dayjs) => months[getMonth(date)]

  return (
    <CellsMatrix
      classNamePrefix={classNamePrefix}
      date={date}
      onSelect={onSelect}
      numberOfColumns={3}
      numberOfRows={4}
      cellDate={addMonth}
      cellValue={getMonthValue}
      cellClassNames={getMonthCellClassNames}
    />
  )
}

export default MonthSelector
