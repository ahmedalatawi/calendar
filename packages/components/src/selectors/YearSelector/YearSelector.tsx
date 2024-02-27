import React from 'react'
import { getYear, setYear, addYear } from '../../utils/dayjsUtil'
import { Dayjs } from 'dayjs'
import CellsMatrix from '../CellsMatrix/CellsMatrix'
import useClassNames from '../../hooks/useClassNames'

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

function YearSelector({ date, classNamePrefix = 'rc-year-selector', selectedDate, onSelect }: Props) {
  const { getYearCellClassNames } = useClassNames()

  const year = getYear(date)
  const calendarStartYear = Math.floor(year / 10) * 10
  const yearDate = setYear(date, calendarStartYear - Math.ceil((NUMBER_OF_COLUMNS * NUMBER_OF_ROWS - 10) / 2))

  return (
    <CellsMatrix
      classNamePrefix={classNamePrefix}
      date={yearDate}
      selectedDate={selectedDate}
      onSelect={onSelect}
      numberOfColumns={NUMBER_OF_COLUMNS}
      numberOfRows={NUMBER_OF_ROWS}
      cellDate={addYear}
      cellValue={getYear}
      cellClassNames={getYearCellClassNames}
    />
  )
}

export default YearSelector
