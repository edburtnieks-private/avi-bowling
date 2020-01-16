import { object, string, number, bool, array, date, ref } from 'yup'

const reservationSchema = object().shape({
  date: date()
    .min(new Date(), 'date-min')
    .max(new Date(new Date().getFullYear(), 11, 31), 'date-max')
    .required('date-required'),
  startTime: number()
    .truncate()
    .min(11, 'start-time-min')
    .max(23, 'start-time-max')
    .required('start-time-required'),
  duration: number()
    .truncate()
    .min(1, 'duration-min')
    .max(4, 'duration-max')
    .required('duration-required'),
  laneCount: number()
    .truncate()
    .min(1, 'lane-count-min')
    .max(10, 'lane-count-max')
    .required('lane-count-required'),
  name: string().required('name-required'),
  phone: string().required('phone-required'),
  playerCount: number()
    .truncate()
    .min(1, 'player-count-min')
    .max(6, 'player-count-max'),
  isShoes: bool(),
  shoeCount: number()
    .truncate()
    .min(1, 'shoe-count-min')
    .max(ref('playerCount'), 'shoe-count-max'),
  players: array(string()).max(6),
})

export { reservationSchema }
