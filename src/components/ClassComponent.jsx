import { Component } from 'react'
import withRouter from '../helpers/withRouter'

class ClassComponent extends Component {
  render() {
    console.log(this.props)
    return (
      // let's put location.pathname here!
      <p>The current location is: {this.props.location.pathname}</p>
    )
  }
}

export default withRouter(ClassComponent)

// let's give to this class component location, navigate and params!
// you'll need to create a HIGHER ORDER COMPONENT out of your class component :)
