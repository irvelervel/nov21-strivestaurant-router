// if you need a state, or you need to access any part of the component's lifecycle,
// you need a class component!

// in this component we want to grab all the reservations stored in the DB
// every time you fetch data in a react component, you'll need to store
// the data you grab in your state object

// 1) output the static content
// 2) link the dynamic part of your interface (the reservations) to your state
// mapping the generated components from it
// 3) fetch the data in componentDidMount
// 4) set the state with it

import { useState, useEffect } from 'react'
import { ListGroup, Spinner, Alert } from 'react-bootstrap'
import { parseISO, format } from 'date-fns'

const Reservations = () => {
  // state = {
  //   // let's make room for the reservations that are going to be fetched!
  //   // they are going to come as an array, because they can be many!
  //   reservations: [], // the initial value here is an empty array because
  //   // we want to map this array in the interface at all times!
  //   isLoading: true,
  //   isError: false,
  // }

  const [reservations, setReservations] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  // in this case we want to fetch the data as soon as possible
  // but what's the best place?
  // we should fetch the data as soon as the component is mounted into the DOM

  useEffect(() => {
    getReservations()
  }, [])

  const getReservations = async () => {
    // what happens if you put code here?
    // if will be executed as soon as the component finishes the mounting process
    console.log("I'm fully mounted!")
    // IT HAPPENS A MOMENT AFTER THE INITIAL RENDER IS COMPLETED!
    // it will happen JUST ONCE for every loading of this component!
    // this moment is PERFECT for fetching data...
    // why?
    // - it happens after the initial render, so the rendering itself is not blocked by it
    // - the user can immediately see the static content of the page, with no waiting
    // - the fetch will happen under the hood
    // we want the static content first, and then do our expensive operations
    // the componentDidMount method is perfect for fetching data or doing any expensive operation,
    // because they will not make the page wait and the user will already see something :)

    // so what now?
    // we'll put the fetch here, grab the data and save it into the state
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/reservation'
      )
      if (response.ok) {
        let data = await response.json()
        console.log(data)
        // this.setState({
        //   reservations: data,
        //   isLoading: false,
        // })
        setReservations(data)
        setIsLoading(false)
      } else {
        // alert('something went wrong :(')
        // this.setState({
        //   isLoading: false,
        //   isError: true,
        // })
        setIsLoading(false)
        setIsError(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  console.log("I'm rendering!")
  // react will call AGAIN render() every time you set the state or the props change

  // this.setState({
  //   // <-- NEVER DO THIS! this leads to an infinite loop :(
  //   reservations: [], // because setting the state will invoke render() again automatically
  // })

  return (
    <div className='mb-3 reservations-container'>
      <h2>BOOKED TABLES:</h2>
      {/* React is VERY declerative! You're just saying: create a list item for every element in the array */}
      {isLoading && (
        <Spinner animation='border' variant='success' className='mb-2' />
      )}
      {isError && <Alert variant='danger'>Something went wrong 😨</Alert>}
      {/* it works! but we need to show it initially, and then hide it when the data is ready... */}
      <ListGroup>
        {!isLoading && !isError && reservations.length === 0 && (
          <ListGroup.Item>No reservations yet :(</ListGroup.Item>
        )}
        {reservations.map((reservation) => (
          <ListGroup.Item key={reservation._id}>
            {/* the ._id is a property created by the DB while storing the resource */}
            {/* it's a unique identifier, basically a long unique string */}
            {reservation.name} for {reservation.numberOfPeople} on{' '}
            {format(parseISO(reservation.dateTime), 'do MMMM yyyy - hh:mm')}
            {/* this is a very ugly string! how can we improve it?*/}
            {/* for transforming something like "2022-02-10T11:39:00.000Z" into a nice string */}
            {/* firstly, we need to convert that string into a proper Date object */}
            {/* format that Date object into a new string, but this time as nice as we want, with the info we want! */}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  )
}

export default Reservations
