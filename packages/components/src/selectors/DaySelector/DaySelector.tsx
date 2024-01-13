import React, { memo } from 'react'
import { NUMBER_OF_DAY_ROWS, NUMBER_OF_WEEKDAYS } from '../../constants'
import { addDay, getDate, getWeekdaysShort } from '../../utils/dayjsUtil'
import type { Dayjs } from 'dayjs'
import useClassNames from '../../hooks/useClassNames'
import CellsMatrix from '../CellsMatrix/CellsMatrix'

interface HeaderProps {
  classNamePrefix?: string
}

interface Props {
  classNamePrefix?: string
  /** Initial date - default is today's date */
  date?: Dayjs
  /** Callback function when a date is selected */
  onSelect?: (date: Dayjs) => void
}

function DaySelector({ classNamePrefix = 'rc-day-selector', date, onSelect }: Props) {
  const { getDayCellClassNames } = useClassNames()

  return (
    <CellsMatrix
      classNamePrefix={classNamePrefix}
      date={date}
      onSelect={onSelect}
      header={<Header classNamePrefix={classNamePrefix} />}
      numberOfColumns={NUMBER_OF_WEEKDAYS}
      numberOfRows={NUMBER_OF_DAY_ROWS}
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
