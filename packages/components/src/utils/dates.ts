import { Dayjs } from 'dayjs'
import { addDay, getDate, getFirstDayOfWeek, getMonth, getStartWeekDay, getYear, setDateOfMonth } from './dayjsUtil'

export const getCalendarStartDate = (date: Dayjs) => {
  const weekFirstDay = getFirstDayOfWeek()
  const monthStartDate = setDateOfMonth(date, 1)
  const startDateWeekDay = getStartWeekDay(monthStartDate)

  return addDay(monthStartDate, weekFirstDay - startDateWeekDay)
}

export const isWithinCurrentMonth = (calendarDate: Dayjs, selectedDate: Dayjs) => {
  return getYear(calendarDate) === getYear(selectedDate) && getMonth(calendarDate) === getMonth(selectedDate)
}

export const isEqualDate = (calendarDate: Dayjs, selectedDate: Dayjs) => {
  return (
    getYear(calendarDate) === getYear(selectedDate) &&
    getMonth(calendarDate) === getMonth(selectedDate) &&
    getDate(calendarDate) === getDate(selectedDate)
  )
}

export const isEqualMonth = (calendarDate: Dayjs, selectedDate: Dayjs) =>
  getMonth(calendarDate) === getMonth(selectedDate)
