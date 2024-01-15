import React from 'react'
import CellsMatrix from '../CellsMatrix/CellsMatrix'
import useClassNames from '../../hooks/useClassNames'
import { addMonth, getMonth, getMonthsShort } from '../../utils/dayjsUtil'
import { Dayjs } from 'dayjs'

const NUMBER_OF_COLUMNS = 3
const NUMBER_OF_ROWS = 4

interface Props {
  classNamePrefix?: string
  /** Initial date - default is today's date */
  date: Dayjs
  selectedDate: Dayjs
  /** Callback function when a date is selected */
  onSelect?: (date: Dayjs) => void
}

function MonthSelector({ classNamePrefix = 'rc-month-selector', date, selectedDate, onSelect }: Props) {
  const { getMonthCellClassNames } = useClassNames()

  const months = getMonthsShort()
  const getMonthValue = (date: Dayjs) => months[getMonth(date)]

  return (
    <CellsMatrix
      classNamePrefix={classNamePrefix}
      date={date}
      selectedDate={selectedDate}
      onSelect={onSelect}
      numberOfColumns={NUMBER_OF_COLUMNS}
      numberOfRows={NUMBER_OF_ROWS}
      cellDate={addMonth}
      cellValue={getMonthValue}
      cellClassNames={getMonthCellClassNames}
    />
  )
}

export default MonthSelector
