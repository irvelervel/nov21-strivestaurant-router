import { useState } from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import dishes from '../data/menu.json'
import DishComments from './DishComments'
// dishes is the array of pastas!

// we need a way for remembering (storing) which pasta is the selected one,
// which means the last one we clicked on!
// that way is ofc the component's state
// ...so what we have to do? we need a Class Component!
// how can we convert this functional component into a class based one?

// now that we have a state, we're missing two things:
// 1) manage it, so setting it to a value when we click on an image
// 2) link the unordered list to the selectedPasta, so we just see its comments

const Home = () => {
  // Component is the main class of React
  // you just need ONE MANDATORY METHOD
  // state = {
  //   selectedPasta: null, // <-- you need an initial value
  // }

  const [selectedPasta, setSelectedPasta] = useState(null)

  // from here, just return the JSX you had before in the functional component
  return (
    <Container>
      <Row className='justify-content-center mt-3'>
        {/* I want the column to get full-width on smartphones, half width on desktop */}
        <Col xs={12} md={6}>
          <Carousel>
            {dishes
              // .filter((dish) => dish.id < 3)
              .map((dish) => (
                <Carousel.Item key={dish.id}>
                  <img
                    className='d-block w-100'
                    src={dish.image}
                    alt='First slide'
                    onClick={() =>
                      // this.state.selectedPasta = dish // <-- SUPER WRONG
                      // this.setState({
                      //   selectedPasta: dish,
                      // })
                      setSelectedPasta(dish)
                    }
                  />
                  <Carousel.Caption>
                    <h3>{dish.name}</h3>
                    <p>{dish.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
          </Carousel>
        </Col>
      </Row>
      <Row className='justify-content-center mt-2'>
        <Col xs={12} md={6}>
          <DishComments pastaToShowCommentsFrom={selectedPasta} />
        </Col>
      </Row>
    </Container>
  )
}

export default Home

// the 'this' keyword points to the current instance of the class
// if Home is the chair factory, 'this' is one different chair every time
