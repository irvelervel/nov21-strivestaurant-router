import { useEffect, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import dishes from '../data/menu.json'
import DishComments from './DishComments'
import NotFound from './NotFound'

const PastaDetails = () => {
  const params = useParams()
  console.log('params is', params)
  // the pastaId is in params.pastaId

  const [rightPastaToShow, setRightPastaToShow] = useState(null)

  useEffect(() => {
    // here I should grab the correct pasta to load the details of
    // now let's cycle the dishes array to find the pasta with the corresponding pastaId
    let pastaToLoad = dishes.find(
      (pasta) => pasta.id.toString() === params.pastaId
    )
    // pastaToLoad, if found, will be the correct pasta to show the details of!
    console.log('PASTATOLOAD IS', pastaToLoad)
    setRightPastaToShow(pastaToLoad)
  }, [])

  return (
    <Container>
      <Row className='justify-content-center'>
        <Col md={8}>
          {rightPastaToShow && (
            <>
              <Card>
                <Card.Img variant='top' src={rightPastaToShow.image} />
                <Card.Body>
                  <Card.Title>{rightPastaToShow.name}</Card.Title>
                  <Card.Text>{rightPastaToShow.description}</Card.Text>
                </Card.Body>
              </Card>
              <DishComments pastaToShowCommentsFrom={rightPastaToShow} />
            </>
          )}
          {typeof rightPastaToShow === 'undefined' && <NotFound />}
        </Col>
      </Row>
    </Container>
  )
}

export default PastaDetails

// you need to distinguish between null and undefined!
// because null is just the inital value, while undefined means no match has been found
