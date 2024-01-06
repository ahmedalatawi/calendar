import { Dayjs } from 'dayjs'
import { isEqualDate, isWithinCurrentMonth } from '../utils/dates'

const useClassNames = () => {
  return {
    getClassNames: (className: string, currentDate: Dayjs, calendarDate: Dayjs, selectedDate: Dayjs, today: Dayjs) => {
      return {
        [`${className}-current`]: isWithinCurrentMonth(calendarDate, currentDate),
        [`${className}-today`]: isEqualDate(calendarDate, today),
        [`${className}-selected`]: isEqualDate(calendarDate, selectedDate),
      }
    },
  }
}

export default useClassNames
