import { Container, Row, Col, Badge } from 'react-bootstrap'
import dishes from '../data/menu.json'
import { Link } from 'react-router-dom'

const Menu = () => (
  <Container className='mt-3'>
    {dishes.map((pasta) => (
      <Row key={pasta.id} className='justify-content-center mb-3'>
        <Col md={8} className='text-center'>
          <Link to={'/details/' + pasta.id}>
            <img src={pasta.image} alt='pasta pic' />
          </Link>
          <h4>
            {pasta.name}
            <Badge variant='warning'>{pasta.label}</Badge>
            <Badge variant='danger'>{pasta.price}</Badge>
          </h4>
        </Col>
      </Row>
    ))}
  </Container>
)

export default Menu
