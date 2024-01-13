import { Dayjs } from 'dayjs'
import { isEqualDate, isEqualMonth, isWithinCurrentMonth } from '../utils/dates'

const useClassNames = () => {
  return {
    getDayCellClassNames: (
      className: string,
      currentDate: Dayjs,
      calendarDate: Dayjs,
      selectedDate: Dayjs,
      today: Dayjs,
    ) => {
      return {
        [`${className}-current`]: isWithinCurrentMonth(calendarDate, currentDate),
        [`${className}-today`]: isEqualDate(calendarDate, today),
        [`${className}-selected`]: isEqualDate(calendarDate, selectedDate),
      }
    },
    getMonthCellClassNames: (className: string, _: Dayjs, calendarDate: Dayjs, selectedDate: Dayjs, today: Dayjs) => {
      return {
        // [`${className}-current`]: isWithinCurrentMonth(calendarDate, currentDate),
        [`${className}-current-month`]: isEqualMonth(calendarDate, today),
        [`${className}-selected`]: isEqualMonth(calendarDate, selectedDate),
      }
    },
  }
}

export default useClassNames
