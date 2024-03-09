import React from 'react'
import DatePicker from '../src/picker/DatePicker'

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

export const Default = () => <DatePicker />
