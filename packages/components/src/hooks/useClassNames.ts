import { Dayjs } from 'dayjs'
import { isEqualDate, isWithinCurrentMonth } from '../utils/dates'

const useClassNames = () => {
  return {
    getClassNames: (className: string, calendarDate: Dayjs, selectedDate: Dayjs, today: Dayjs) => {
      return {
        [`${className}-current`]: isWithinCurrentMonth(calendarDate, selectedDate),
        [`${className}-today`]: isEqualDate(calendarDate, today),
        [`${className}-selected`]: isEqualDate(calendarDate, selectedDate),
      }
    },
  }
}

export default useClassNames
