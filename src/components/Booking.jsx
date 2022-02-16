import Reservations from './Reservations'
import ReservationForm from './ReservationsForm'
import { Container, Row, Col } from 'react-bootstrap'

const Booking = () => (
  <Container>
    <Row className='justify-content-center mt-3'>
      {/* I want the column to get full-width on smartphones, half width on desktop */}
      <Col xs={12} md={6}>
        <Reservations />
        <ReservationForm />
      </Col>
    </Row>
  </Container>
)

export default Booking
