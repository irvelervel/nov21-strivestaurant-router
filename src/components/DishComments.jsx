import { ListGroup } from 'react-bootstrap'

// ListGroup is a <ul>
// ListGroup.Item is a <li>
// ternary operator is the way of defining if/else in JSX
// <ListGroup>
// {this.state.selectedPasta ? (
// this.state.selectedPasta.comments.map((c) => (
// <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
// ))
// ) : (
// <ListGroup.Item>NO SELECTED PASTA YET</ListGroup.Item>
// )}
// </ListGroup>
// && SHORT CIRCUIT OPERATOR

// This component will receive as a prop one pasta object or null

const DishComments = (props) =>
  // pastaToShowCommentsFrom is part of the props object
  props.pastaToShowCommentsFrom && // if pastaToShowCommentsFrom is truthy, go on
  props.pastaToShowCommentsFrom.comments.map((c) => (
    <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
  ))

export default DishComments
