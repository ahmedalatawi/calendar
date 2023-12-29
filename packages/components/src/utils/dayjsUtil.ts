import dayjs, { Dayjs } from 'dayjs'
import 'dayjs/locale/es'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import weekday from 'dayjs/plugin/weekday'
import localeData from 'dayjs/plugin/localeData'

dayjs.extend(localizedFormat)
dayjs.locale('en')
dayjs.extend(weekday)
dayjs.extend(localeData)

export const getTodayDate = () => dayjs()
export const getDate = (date: Dayjs) => date.date()
export const getMonth = (date: Dayjs) => date.month()
export const getYear = (date: Dayjs) => date.year()

export const getFirstDayOfWeek = () => dayjs().locale('en').startOf('week').day()
export const getStartWeekDay = (date: Dayjs) => date.weekday() + date.startOf('week').day()
export const getWeekdaysShort = () => dayjs().localeData().weekdaysMin()

export const setDateOfMonth = (date: Dayjs, day: number) => date.date(day)
export const addDay = (date: Dayjs, days: number) => date.add(days, 'day')
