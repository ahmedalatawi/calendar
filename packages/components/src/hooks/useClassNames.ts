import { Dayjs } from 'dayjs'
import { isEqualDate, isWithinCurrentMonth } from '../utils/dates'

const useClassNames = () => {
  const currentPrefix = 'current'
  const todayPrefix = 'today'

  return {
    getInCurrentMonthClassName: (className: string, calendarDate: Dayjs, selectedDate: Dayjs) => {
      return {
        [`${className}-${currentPrefix}`]: isWithinCurrentMonth(calendarDate, selectedDate),
        [`${className}-${todayPrefix}`]: isEqualDate(calendarDate, selectedDate),
      }
    },
  }
}

export default useClassNames
