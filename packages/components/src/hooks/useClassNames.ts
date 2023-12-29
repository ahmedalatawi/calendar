import { Dayjs } from 'dayjs'
import { isWithinCurrentMonth } from '../utils/dates'

const useClassNames = () => {
  const inCurrentMonthClassName = 'day-cell-in-current-month'

  return {
    getInCurrentMonthClassName: (calendarDate: Dayjs, selectedDate: Dayjs) => {
      return {
        [inCurrentMonthClassName]: isWithinCurrentMonth(calendarDate, selectedDate),
      }
    },
  }
}

export default useClassNames
