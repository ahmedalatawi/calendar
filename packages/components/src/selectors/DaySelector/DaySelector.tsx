import React, { memo } from 'react'
import { addDay, getDate, getWeekdaysShort } from '../../utils/dayjsUtil'
import type { Dayjs } from 'dayjs'
import useClassNames from '../../hooks/useClassNames'
import CellsMatrix from '../CellsMatrix/CellsMatrix'

const NUMBER_OF_COLUMNS = 7
const NUMBER_OF_ROWS = 6

interface HeaderProps {
  classNamePrefix?: string
}

interface Props {
  classNamePrefix?: string
  /** Initial date */
  date: Dayjs
  /** Selected date */
  selectedDate: Dayjs
  /** Callback function when a date is selected */
  onSelect?: (date: Dayjs) => void
}

function DaySelector({ classNamePrefix = 'rc-day-selector', date, selectedDate, onSelect }: Props) {
  const { getDayCellClassNames } = useClassNames()

  return (
    <CellsMatrix
      classNamePrefix={classNamePrefix}
      date={date}
      selectedDate={selectedDate}
      onSelect={onSelect}
      header={<Header classNamePrefix={classNamePrefix} />}
      numberOfColumns={NUMBER_OF_COLUMNS}
      numberOfRows={NUMBER_OF_ROWS}
      cellDate={addDay}
      cellValue={getDate}
      cellClassNames={getDayCellClassNames}
    />
  )
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
