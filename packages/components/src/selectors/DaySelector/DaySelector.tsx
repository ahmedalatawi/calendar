import React from 'react'
import { NUMBER_OF_DAY_ROWS, NUMBER_OF_WEEKDAYS } from '../../constants'
//import type { Dayjs } from 'dayjs'

interface DayCellProps {
  index: number
  //date: Dayjs
  onSelect: (date: number) => void
}

interface DayCellRowsProps {
  onSelect: (date: number) => void
}

//interface Props {}

function DaySelector() {
  return (
    <div className='day-selector'>
      {Array.from({ length: NUMBER_OF_DAY_ROWS }).map((_, index) => (
        <DayCellRows key={index} onSelect={() => console.log(index)} />
      ))}
    </div>
  )
}

const DayCell = ({ index, onSelect }: DayCellProps) => {
  return (
    <span className='day-cell' onClick={() => onSelect(index)}>
      {index + 10}
    </span>
  )
}

const DayCellRows = ({ onSelect }: DayCellRowsProps) => {
  return (
    <div className='day-cell-rows'>
      {Array.from({ length: NUMBER_OF_WEEKDAYS }).map((_, index) => (
        <DayCell key={index} index={index} onSelect={onSelect} />
      ))}
    </div>
  )
}

export default DaySelector
