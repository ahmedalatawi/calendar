// import index.scss
import '../src/styles/index.scss'

import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import weekday from 'dayjs/plugin/weekday'
import localeData from 'dayjs/plugin/localeData'

dayjs.extend(localizedFormat)
dayjs.locale('en')
dayjs.extend(weekday)
dayjs.extend(localeData)

import DaySelector from './selectors/DaySelector/DaySelector'
import MonthSelector from './selectors/MonthSelector/MonthSelector'
import YearSelector from './selectors/YearSelector/YearSelector'
import HeaderSelector from './selectors/HeaderSelector/HeaderSelector'
import FooterSelector from './selectors/FooterSelector/FooterSelector'

export { DaySelector, MonthSelector, YearSelector, HeaderSelector, FooterSelector }
