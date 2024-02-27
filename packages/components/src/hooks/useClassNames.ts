import { Dayjs } from 'dayjs'
import { isEqualDate, isEqualMonthAndYear, isEqualYear, isWithinCurrentMonth } from '../utils/dates'

const useClassNames = () => {
  return {
    getDayCellClassNames: (className: string, date: Dayjs, calendarDate: Dayjs, selectedDate: Dayjs, today: Dayjs) => {
      return {
        [`${className}-current`]: isWithinCurrentMonth(calendarDate, date),
        [`${className}-today`]: isEqualDate(calendarDate, today),
        [`${className}-selected`]: isEqualDate(calendarDate, selectedDate),
      }
    },
    getMonthCellClassNames: (className: string, _: Dayjs, calendarDate: Dayjs, selectedDate: Dayjs, today: Dayjs) => {
      return {
        [`${className}-current-month`]: isEqualMonthAndYear(calendarDate, today),
        [`${className}-selected`]: isEqualMonthAndYear(calendarDate, selectedDate),
      }
    },
    getYearCellClassNames: (className: string, _: Dayjs, calendarDate: Dayjs, selectedDate: Dayjs, today: Dayjs) => {
      return {
        [`${className}-current-year`]: isEqualYear(calendarDate, today),
        [`${className}-selected`]: isEqualYear(calendarDate, selectedDate),
      }
    },
  }
}

export default useClassNames
