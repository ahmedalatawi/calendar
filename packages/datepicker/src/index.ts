// import styling
import './styles/index.scss'

import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday'

dayjs.extend(weekday)

import DatePicker from './picker/DatePicker'

export { DatePicker }
