import dayjs, { Dayjs } from 'dayjs'
import 'dayjs/locale/es'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import weekday from 'dayjs/plugin/weekday'

dayjs.extend(localizedFormat)
dayjs.locale('en')
dayjs.extend(weekday)

export const getTodayDate = () => dayjs()
export const getDate = (date: Dayjs) => date.date()
export const getFirstDayOfWeek = () => dayjs().locale('en').startOf('week').day()
export const getStartWeekDay = (date: Dayjs) => date.weekday() + date.startOf('week').day()

export const setDateOfMonth = (date: Dayjs, day: number) => date.date(day)
export const addDay = (date: Dayjs, days: number) => date.add(days, 'day')
