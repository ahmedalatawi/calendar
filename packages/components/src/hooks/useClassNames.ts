import { Dayjs } from 'dayjs'
import { isWithinCurrentMonth } from '../utils/dates'

const useClassNames = () => {
  const inCurrentMonthClassName = 'current'

  return {
    getInCurrentMonthClassName: (className: string, calendarDate: Dayjs, selectedDate: Dayjs) => {
      return {
        [`${className}-${inCurrentMonthClassName}`]: isWithinCurrentMonth(calendarDate, selectedDate),
      }
    },
  }
}

export default useClassNames
