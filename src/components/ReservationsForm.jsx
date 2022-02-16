// this component will hold all the necessary input fields to book a reservation
// and we still want to connect our interface to a component's state
// because we need a component's state, we are going to create this component
// as a Class

// Riccardo told me the properties I need to send:
// name <-- string
// phone <-- number/string
// numberOfPeople <-- number/string
// smoking <-- boolean
// dateTime <-- string
// specialRequests <-- string

import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const ReservationForm = () => {
  // state = {
  //   reservation: {
  //     name: '',
  //     phone: '',
  //     numberOfPeople: 1,
  //     smoking: false,
  //     dateTime: '',
  //     specialRequests: '',
  //   },
  // }

  const [reservation, setReservation] = useState({
    name: '',
    phone: '',
    numberOfPeople: 1,
    smoking: false,
    dateTime: '',
    specialRequests: '',
  })

  const handleChange = (property, value) => {
    // property and value are both strings (even if value can be also a boolean)
    // what pieces of info do we need to make this function
    // able to work on every onChange of every input field
    // this.setState({
    //   reservation: {
    //     ...this.state.reservation,
    //     [property]: value,
    //   },
    // })
    setReservation({
      ...reservation,
      [property]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // this will prevent the browser from refreshing,
    // put this as the first line of every handle submit function!
    // url -> https://striveschool-api.herokuapp.com/api/reservation
    // let's recap two ways of doing a fetch:
    // 1) CHAINED THENs METHOD
    // fetch('https://striveschool-api.herokuapp.com/api/reservation', {
    //   method: 'POST',
    //   body: JSON.stringify(this.state.reservation),
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data)
    //     alert('reservation saved!')
    //     this.setState({
    //       reservation: {
    //         name: '',
    //         phone: '',
    //         numberOfPeople: 1,
    //         smoking: false,
    //         dateTime: '',
    //         specialRequests: '',
    //       },
    //     })
    //   })
    //   .catch((error) => console.log(error))
    // 2) ASYNC/AWAIT PATTERN
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/reservation',
        {
          method: 'POST',
          body: JSON.stringify(reservation),
          headers: {
            'Content-type': 'application/json',
          },
        }
      )
      if (response.ok) {
        console.log(response)
        alert('reservation saved!')
        // this was for resetting the form to its initial value!
        // this.setState({
        //   reservation: {
        //     name: '',
        //     phone: '',
        //     numberOfPeople: 1,
        //     smoking: false,
        //     dateTime: '',
        //     specialRequests: '',
        //   },
        // })
        setReservation({
          name: '',
          phone: '',
          numberOfPeople: 1,
          smoking: false,
          dateTime: '',
          specialRequests: '',
        })
      } else {
        // what type of error will fall here?
        // here it means you connected to the server, but something went wrong!
        alert('something went wrong! please try again')
        // just some examples...
        if (response.status === 400) {
          alert('some data was wrong')
        }
        if (response.status === 404) {
          alert('not found')
        }
      }
    } catch (error) {
      // what type of error will fall here?
      // you probably have some internet problems :(
      console.log(error)
    }
  }

  return (
    <div className='mb-3'>
      <h2>Book your table here!</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Reservation name</Form.Label>
          <Form.Control
            type='text'
            required
            placeholder='Enter your name'
            value={reservation.name}
            onChange={(e) =>
              // this.setState({
              //   reservation: {
              //     ...this.state.reservation,
              //     // this is called a spread operator
              //     // that line is bringing in this new object
              //     // all the properties I currently have in this.state.reservation
              //     // so the name, the phone, the numberOfPeople
              //     // in this way I'm not losing anything in the process!
              //     name: e.target.value,
              //   },
              // })
              handleChange('name', e.target.value)
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type='text'
            required
            placeholder='Enter your phone'
            value={reservation.phone}
            onChange={(e) =>
              // this.setState({
              //   reservation: {
              //     ...this.state.reservation,
              //     phone: e.target.value,
              //   },
              // })
              handleChange('phone', e.target.value)
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>How many people?</Form.Label>
          <Form.Control
            as='select'
            value={reservation.numberOfPeople}
            onChange={(e) =>
              // this.setState({
              //   reservation: {
              //     ...this.state.reservation,
              //     numberOfPeople: e.target.value,
              //   },
              // })
              handleChange('numberOfPeople', e.target.value)
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Check
            type='checkbox'
            label='Do you smoke'
            checked={reservation.smoking}
            onChange={(e) =>
              // this.setState({
              //   reservation: {
              //     ...this.state.reservation,
              //     smoking: e.target.value,
              //   },
              // })
              handleChange('smoking', e.target.checked)
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Date and time</Form.Label>
          <Form.Control
            type='datetime-local'
            required
            value={reservation.dateTime}
            onChange={(e) =>
              // this.setState({
              //   reservation: {
              //     ...this.state.reservation,
              //     dateTime: e.target.value,
              //   },
              // })
              handleChange('dateTime', e.target.value)
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Any special request?</Form.Label>
          <Form.Control
            as='textarea'
            rows={3}
            value={reservation.specialRequests}
            onChange={(e) =>
              // this.setState({
              //   reservation: {
              //     ...this.state.reservation,
              //     specialRequests: e.target.value,
              //   },
              // })
              handleChange('specialRequests', e.target.value)
            }
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          SEND RESERVATION
        </Button>
      </Form>
    </div>
  )
}

export default ReservationForm
