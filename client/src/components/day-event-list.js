import React, { Fragment, useState } from 'react'
import moment from 'moment'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import { KeyboardDateTimePicker, KeyboardTimePicker } from '@material-ui/pickers'
import {
  Divider,
  Select,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  IconButton,
  MenuItem,
  TextField,
  InputLabel,
  FormControl,
  FormGroup
} from '@material-ui/core';

/**
 * An Object containg DateTime information and an optional description
 * @typedef {Object.(<String,Time,Time,[String]>|<DateTime,DateTime,[String])} EventItem
 */
/**
 * A component that generates and displays an interactive list of elements that can be
 * dynamically changed
 * @prop {Object[EventItem]} items - An Array of EventItems or an empty Array
 * @prop {callback} onAdd - A callback function that accepts the transformed list
 * @prop {callback} onRemove - A callback function that accepts the transformed list
 * @prop {boolean} [dateTime=false] - Used for providing a DateTime range
 */
const DayEventList = (props) => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  const [selectedDay, setSelectedDay] = useState('Monday')
  const [start, setStart] = useState(new Date())
  const [end, setEnd] = useState(new Date())
  const [description, setDescription] = useState()
  const [errors, setErrors] = useState({})

  const Picker = ({ label, value, onChange }) => (
    <Fragment>
      {
        props.dateTime ?
          <KeyboardDateTimePicker
            label={label}
            helperText={errors.timeError}
            autoOk
            disablePast
            value={value}
            error={errors.timeError}
            onChange={onChange}
            showTodayButton
          />
          :
          <KeyboardTimePicker
            label={label}
            autoOk
            error={errors.timeError}
            helperText={errors.timeError}
            mask="__:__ _M"
            value={value}
            onChange={onChange}
          />
      }
    </Fragment>
  )

  const onAddItem = () => {

    const startTime = moment(start).day()
    const endTime = moment(end).day()
    if (startTime > endTime) {
      setErrors({ timeError: 'End date cannot be before start date' })
    } else {
      setErrors({})
      props.onAdd([
        ...props.items,
        {
          day: selectedDay,
          starts: moment(start).format('HH:mm'),
          ends: moment(end).format('HH:mm'),
          description: description
        }
      ])
    }
  }
  const onRemoveItem = (removeIndex) => () => {
    console.log(removeIndex);
    props.onRemove(props.items.filter((_, index) => {
      return index !== removeIndex
    }))
  }

  return (
    <List {...props} >
      {
        props.items.map((item, index) => (
          <ListItem style={{ border: '1px solid lightgrey', borderRadius: '5px' }}>
            <ListItemText >{item.day}</ListItemText>
            <ListItemText >{moment(item.starts, 'hh:mm').format('LT')}</ListItemText>
            <ListItemText >{moment(item.ends, 'hh:mm').format('LT')}</ListItemText>
            <ListItemText >{item.description}</ListItemText>
            <ListItemIcon children={<IconButton onClick={onRemoveItem(index)}><RemoveIcon /></IconButton>} />
          </ListItem>
        ))
      }
      < ListItem style={{ display: 'grid' }}>
        <FormGroup style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', justifyContent: 'center' }}>
          {
            props.dateTime ? false :
              <FormControl >
                <InputLabel id='day-selector'>Day of week</InputLabel>
                <Select labelId='day-selector' value={selectedDay} onChange={e => setSelectedDay(e.target.value)}>
                  {days.map(day => (<MenuItem key={day} value={day} >{day}</MenuItem>))}
                </Select>
              </FormControl>
          }
          <Picker dateTime={props.dateTime} label='Start' value={start} onChange={time => setStart(time)} />
          <Picker dateTime={props.dateTime} label='End' value={end} onChange={time => setEnd(time)} />
        </FormGroup>
        <TextField label='Description' value={description} onChange={e => setDescription(e.target.value)} />
        <ListItemIcon style={{ justifySelf: 'end' }} children={<IconButton onClick={onAddItem}><AddIcon /></IconButton>} />
      </ListItem >
      <Divider style={{ marginTop: '8px' }} />
    </List >
  )
}

export default DayEventList