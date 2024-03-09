import React, { useState } from 'react'
import DatePicker from '../src/picker/DatePicker'
import dayjs from 'dayjs'

export default {
  title: 'Example/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

export const Default = () => {
  const [date, setDate] = useState(dayjs())

  return <div>datepicker</div>
}
