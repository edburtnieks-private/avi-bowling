import React, { useState } from 'react'
import {
  useForm,
  useFieldArray,
  FormContext,
  Controller,
} from 'react-hook-form'
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl'

import { Calendar } from '../../../../components/Calendar'
import { TextInput } from '../../../../components/Inputs/TextInput'
import { IncrementInput } from '../../../../components/Inputs/IncrementInput'
import { Dropdown } from '../../../../components/Inputs/Dropdown'
import { Select } from '../../../../components/Inputs/Select'
import { Checkbox } from '../../../../components/Inputs/Checkbox'
import { Caret } from '../../../../components/Icons/Caret'
import { Button } from '../../../../components/Button'

import { reservationSchema } from './schema'

import * as S from './styled'

const ReservationForm = () => {
  const intl = useIntl()
  const [isDateAndTimeDropdownOpen, setDateAndTimeDropdown] = useState(false)
  const [isMoreDetailsDropdownOpen, setMoreDetailsDropdown] = useState(false)

  const startHour = 11
  const nextHour = new Date().getHours() + 1
  const isWorkingHours = nextHour >= startHour && nextHour <= 23

  const defaultValues = {
    date: new Date(),
    startTime: isWorkingHours ? nextHour : startHour,
    duration: 2,
    laneCount: 1,
    name: '',
    phone: '',
    playerCount: 2,
    players: Array(2).fill(''),
    isShoes: true,
    shoeCount: 2,
  }

  const reservationFormMethods = useForm({
    defaultValues,
    validationSchema: reservationSchema,
  })

  const {
    fields: players,
    append: appendPlayer,
    remove: removePlayer,
  } = useFieldArray({
    control: reservationFormMethods.control,
    name: 'players',
  })

  const isShoes = reservationFormMethods.watch('isShoes')

  const formatDateAndTime = (date, startTime) =>
    `${date.toLocaleDateString(intl.locale, {
      month: 'long',
      day: 'numeric',
    })}, ${startTime}:00`

  const calendarOptions = {
    minDate: new Date(),
    maxDate: new Date(new Date().getFullYear(), 11, 31),
    minDetail: 'year',
    showFixedNumberOfWeeks: true,
    prevLabel: <Caret left />,
    nextLabel: <Caret right />,
    locale: intl.locale,
    formatShortWeekday: (_, date) =>
      intl.formatDate(date, { weekday: 'narrow' }),
  }

  const availableTimes = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
  const minLaneCount = 1
  const maxLaneCount = 10
  const minDuration = 1
  const maxDuration = 4
  const maxAvailableDuration = maxDuration
  const minPlayerCount = 1
  const maxPlayerCount = 6
  const minShoeCount = minPlayerCount
  const maxShoeCount = maxPlayerCount

  const onSubmit = data => {
    console.log({
      ...data,
    })
  }

  const decrementLaneCount = value => {}

  const incrementLaneCount = value => {}

  const decrementDuration = value => {}

  const incrementDuration = value => {}

  const decrementPlayerCount = value => {
    removePlayer(value - 1)
  }

  const incrementPlayerCount = value => {
    appendPlayer({ name: 'players' })
  }

  const decrementShoeCount = value => {}

  const incrementShoeCount = value => {}

  return (
    <FormContext {...reservationFormMethods}>
      <form onSubmit={reservationFormMethods.handleSubmit(onSubmit)}>
        <S.MainFields>
          <S.Field>
            <Dropdown
              id="date-and-time"
              label={intl.formatMessage({ id: 'date-and-time' })}
              value={formatDateAndTime(
                reservationFormMethods.watch('date'),
                reservationFormMethods.watch('startTime')
              )}
              isOpen={isDateAndTimeDropdownOpen}
              toggleDropdown={() =>
                setDateAndTimeDropdown(!isDateAndTimeDropdownOpen)
              }
              closeDropdown={() => setDateAndTimeDropdown(false)}
            >
              <S.DateAndTimeFields>
                <S.CalendarWrapper>
                  <Controller
                    as={<Calendar name="date" {...calendarOptions} />}
                    name="date"
                  />
                </S.CalendarWrapper>

                <S.TimeFields>
                  <S.Field vertical>
                    <Select
                      name="startTime"
                      id="start-time"
                      label={intl.formatMessage({ id: 'start-time' })}
                      options={availableTimes}
                      customOptionTextEnd=":00"
                    />
                  </S.Field>

                  <S.Field vertical>
                    <IncrementInput
                      name="duration"
                      id="duration"
                      label={`${intl.formatMessage({ id: 'duration' })} (h)`}
                      minValue={minDuration}
                      maxValue={maxAvailableDuration}
                      decrement={decrementDuration}
                      increment={incrementDuration}
                    />
                  </S.Field>
                </S.TimeFields>
              </S.DateAndTimeFields>
            </Dropdown>
          </S.Field>

          <S.Field>
            <IncrementInput
              name="laneCount"
              id="lane-count"
              label={intl.formatMessage({ id: 'lane-count' })}
              minValue={minLaneCount}
              maxValue={maxLaneCount}
              decrement={decrementLaneCount}
              increment={incrementLaneCount}
            />
          </S.Field>

          <S.Field>
            <TextInput
              name="name"
              id="name"
              label={intl.formatMessage({ id: 'name' })}
              type="text"
            />
          </S.Field>

          <S.Field>
            <TextInput
              name="phone"
              id="phone"
              label={intl.formatMessage({ id: 'phone' })}
              type="text"
            />
          </S.Field>
        </S.MainFields>

        <S.Footer>
          <S.MoreDetailsDropdownWrapper>
            <Dropdown
              label={intl.formatMessage({ id: 'more-details' })}
              isOpen={isMoreDetailsDropdownOpen}
              toggleDropdown={() =>
                setMoreDetailsDropdown(!isMoreDetailsDropdownOpen)
              }
              closeDropdown={() => setMoreDetailsDropdown(false)}
            >
              <S.SecondaryFields>
                <S.LaneInformationFields>
                  <S.Field vertical>
                    <IncrementInput
                      name="playerCount"
                      id="player-count"
                      label={intl.formatMessage({ id: 'players' })}
                      minValue={minPlayerCount}
                      maxValue={maxPlayerCount}
                      decrement={decrementPlayerCount}
                      increment={incrementPlayerCount}
                    />
                  </S.Field>

                  <S.Field vertical>
                    <IncrementInput
                      name="shoeCount"
                      id="shoe-count"
                      label={
                        <Checkbox
                          name="isShoes"
                          id="is-shoes"
                          label={intl.formatMessage({ id: 'shoes' })}
                        />
                      }
                      minValue={minShoeCount}
                      maxValue={maxShoeCount}
                      decrement={decrementShoeCount}
                      increment={incrementShoeCount}
                      disabled={!isShoes}
                    />
                  </S.Field>
                </S.LaneInformationFields>

                <S.PlayerNameFields>
                  {players.map((_, index) => {
                    const playerIndex = index + 1

                    return (
                      <S.Field vertical key={`player-${playerIndex}`}>
                        <TextInput
                          name={`players[${index}]`}
                          id={`player-${playerIndex}`}
                          label={`${intl.formatMessage({
                            id: 'player',
                          })} ${playerIndex}`}
                          type="text"
                        />
                      </S.Field>
                    )
                  })}
                </S.PlayerNameFields>
              </S.SecondaryFields>
            </Dropdown>
          </S.MoreDetailsDropdownWrapper>

          <Button>
            <FormattedMessage id="make-reservation" />
          </Button>
        </S.Footer>
      </form>
    </FormContext>
  )
}

export { ReservationForm }
