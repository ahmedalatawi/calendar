import { Dayjs } from 'dayjs'
import { addDay, getFirstDayOfWeek, getStartWeekDay, setDateOfMonth } from './dayjsUtil'

export const getCalendarStartDate = (date: Dayjs) => {
  const weekFirstDay = getFirstDayOfWeek()
  const monthStartDate = setDateOfMonth(date, 1)
  const startDateWeekDay = getStartWeekDay(monthStartDate)

  return addDay(monthStartDate, weekFirstDay - startDateWeekDay)
}
