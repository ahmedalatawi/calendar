import React from 'react'
import PickerHeader from '../PickerHeader/PickerHeader'
import PickerBody from '../PickerBody/PickerBody'
import DaySelector from '../../selectors/DaySelector/DaySelector'

// interface Props {}

function DayPicker() {
  return (
    <div className='day-picker'>
      <PickerHeader>
        <span>Header</span>
      </PickerHeader>
      <PickerBody>
        <DaySelector />
      </PickerBody>
    </div>
  )
}

export default DayPicker
