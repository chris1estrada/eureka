import React, { useState } from 'react'
import {
  FormLabel,
  Divider,
  TextField,
  Button,
  FormGroup,
  Box,
} from '@material-ui/core';

import DayEventList from './day-event-list'

// Left this for you to work with. I'd just make it an array of strings
// and use a <Select> that maps over the array to create some <MenuItem>s
const tags = [
  {
    id: 0,
    title: 'Chinese',
    selected: false,
    key: 'food'
  },
  {
    id: 1,
    title: 'Bar',
    selected: false,
    key: 'drink'
  },
  {
    id: 2,
    title: 'American',
    selected: false,
    key: 'food'
  },
  {
    id: 3,
    title: 'Deli',
    selected: false,
    key: 'food'
  }
]

/**
 * TextField wrapper that applies some default styles
 * @param props Any additional props passed to the wrapper element 
 */
const OutlinedTextField = (props) => (
  <TextField
    {...props}
    style={{ paddingRight: '8px' }}
    margin='dense'
    variant='outlined'
    required={props.notRequired ? false : true}
  />
)


/**
 * 
 * @todo Add input for menu: single pdf. Add input multiple images, 5 max.
 */
const BusinessForm = (props) => {

  // Values for form data and form default state
  const [name, setName] = useState()
  const [street, setStreet] = useState()
  const [city, setCity] = useState()
  const [state, setState] = useState()
  const [zip, setZip] = useState()
  const [tel, setTel] = useState()
  const [hours, setHours] = useState([])
  // combine these into a "deals" array when submitting
  const [recurringDeals, setRecurringDeals] = useState([])
  const [limitedDeals, setLimitedDeals] = useState([])

  const [menu, setMenu] = useState()
  const [photos, setPhotos] = useState()

  // axios request goes in here
  const handleSubmit = e => {
    e.preventDefault()
    console.log('submitted');
  }

  return (
    <Box m={2} >
      <form onSubmit={handleSubmit}>
        <FormLabel component='legend'>Business Info</FormLabel>
        <FormGroup >
          <OutlinedTextField value={name} onChange={event => setName(event.target.value)} id='name' label='Business name' type='text' />
          <OutlinedTextField value={street} onChange={event => setStreet(event.target.value)} id='street' label='Street' type='text' />
          <OutlinedTextField value={city} onChange={event => setCity(event.target.value)} id='city' label='City' type='text' />
          <OutlinedTextField value={state} onChange={event => setState(event.target.value)} id='state' label='State' type='text' />
          <OutlinedTextField value={zip} onChange={event => setZip(event.target.value)} id='zip' label='Zip' type='text' />
          <OutlinedTextField value={tel} onChange={event => setTel(event.target.value)} id='tel' label='Telephone' type='tel' />
        </FormGroup>
        <Divider style={{ margin: '8px' }} />
        <FormLabel component='legend'>Hours</FormLabel>
        <DayEventList items={hours} onAdd={data => setHours(data)} onRemove={data => setHours(data)} />
        <FormLabel component='legend'>Specials</FormLabel>
        <DayEventList items={recurringDeals} onAdd={data => setRecurringDeals(data)} onRemove={data => setRecurringDeals(data)} />
        <FormLabel component='legend'>Events</FormLabel>
        <DayEventList dateTime={true} items={limitedDeals} onAdd={data => setLimitedDeals(data)} onRemove={data => setLimitedDeals(data)} />
        <Button type='submit'>Submit</Button>
      </form>
    </Box >
  )
}

export default BusinessForm